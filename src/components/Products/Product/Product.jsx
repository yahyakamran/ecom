import "./Product.scss";

import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {

  const navigate = useNavigate();

  const navigateToSinglePage = () => {
    navigate("/product/" + id);
  };

  return (
    <div className="product-card" onClick={navigateToSinglePage}>
      <div className="thumnail">
        <img className="activeImg"
          src={data?.pic[0]}
          alt=""
        />
      </div>
      <div className="product-details">
        <span className="Name">{data?.name}</span>
        <span className="price">Rs {data?.price}</span>
      </div>
    </div>
  );
};

export default Product;
