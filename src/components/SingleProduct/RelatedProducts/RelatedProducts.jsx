import Products from "../../Products/Products"
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../../utils/api";

const RelatedProducts = ({productId , categoryId}) => {

    useEffect(()=>{
        getProducts()
    },[])

    const [data , setData] =useState();
    const getProducts = () => {
        fetchDataFromApi("product")
        .then((res)=>{
            let relatedProducts = []
            for (let i = 0; i <= res.length - 1; i++) {
                if (res[i]?.categoryId?.id === categoryId ){
                    if(res[i]?.id !== productId){
                        relatedProducts.push(res[i])
                    }
                }
            }
            setData(relatedProducts);
        })
    }
    return (
        <div className="related-products">
            <Products heading = "Related Products" products={data}/>
        </div>
    )
};

export default RelatedProducts;
