import "./Category.scss";
import "react-loading-skeleton/dist/skeleton.css"

import {useParams} from "react-router-dom";
import {useFetch} from "../../utils/useFetch"

import Products from "../Products/Products" 
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";

import Skeleton from "react-loading-skeleton";

const Category = () => {

    const [loading ,setloading] = useState(false);

    const { id } = useParams();

    const { data } = useFetch(id ,"category")
    useEffect(()=>{
        getProducts()
    },[])

    const [productData , setProductData] =useState();
    const getProducts = () => {
        setloading(true)
        fetchDataFromApi("product")
        .then((res)=>{
            let products = []
            for (let i = 0; i <= res.length; i++) {
                if (res[i]?.categoryId?.id === id ){
                    products.push(res[i])
                }
            }
            setProductData(products);
            setloading(false)
        })
    }

    return (
        <div className="category-main-content">
            <div className="layout">
                {!loading ? <>
                <div className="category-title">
                    {!data ? " " : `${data[0]?.name}`}
                </div>
                <Products innerPage={true} products={productData}/>
                </>
                : <Skeleton count={30}/>   
            }
                </div>
        </div>
    );
};

export default Category;
