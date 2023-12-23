import { useEffect, useContext} from "react";

import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

import {fetchDataFromApi} from "../../utils/api";
import { Context } from "../../utils/context";

const Home = ({categoryRef}) => {

    const { categories , setCategories , products , setProducts} = useContext(Context);

    useEffect (()=>{
        getProducts();
        getCategories();
    },[])


    const getCategories = () => {
        fetchDataFromApi("category")
        .then((res)=>{;
            setCategories(res);
        })
    }

    const getProducts = () => {
        fetchDataFromApi("product")
        .then((res)=>{
            setProducts(res);
        })
    }

    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <div ref={categoryRef}>
                <Category categories={categories} />
                </div>
                <Products products={products} heading = "Popular Products" />
            </div>
        </div>
    </div>;
};

export default Home;
