import { useState, useContext, useEffect } from "react";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import "./SingleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/useFetch";
import { Context } from "../../utils/context";
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImage] = useState("")

  const { id } = useParams()
  const { data } = useFetch(id,"product");

  const { handleAddToCart } = useContext(Context);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  return (
    <div className="single-product-content">
      <div className="layout">
        {!data 
          ?
            <Skeleton count={40}/>
            
          :
          <>
          <div className="page-content">
            <div className="left">
              <div className="top">
                <img
                  className="active"
                  src={activeImg || data[0]?.pic[0]}
                  alt=""
                />             
              </div>
              {/* <div className="bottom">
                {
                  (data[0]?.pic).map((img)=>
                    <img src={img} alt="" key={img} onClick={()=>setActiveImage(img)}/>
                  )
                }
              </div> */}
            </div>
            <div className="right">
              <span className="name">{data[0]?.name}</span>
              <span className="price">RS. {data[0]?.price}</span>
              <span className="desc">{data[0]?.description}</span>
              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span onClick={decrement}>-</span>
                  <span>{quantity}</span>
                  <span onClick={increment}>+</span>
                </div>
                <div
                  className="add-to-cart-button"
                  onClick={() => {
                    handleAddToCart(data[0], quantity);
                    setQuantity(1);
                  }}>
                  <FaCartPlus size={20} />
                  Add to cart
                </div>
              </div>

              <span className="divider" />

              <div className="info-item">
                <span className="bold-text">
                  Social Media : 
                  <span className="social-icons">
                    <a href="https://facebook.com" target="_blank">
                    <FaFacebookF size={16} />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                    <FaInstagram size={16} />
                    </a>
                    <FaTwitter size={16} />
                    <FaLinkedin size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
                <span className="bold-text">
                  Contact : 
                  <span className="social-icons">
                     +9230000000
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="related-product">
            <RelatedProducts
              productId={id}
              categoryId={data[0]?.categoryId?.id}
            />
          </div>
          </>
        }
      </div>
    </div>
  );
};

export default SingleProduct;
