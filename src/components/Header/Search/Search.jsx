import { useState } from "react";

import "./Search.scss";
import 'react-loading-skeleton/dist/skeleton.css'
import { MdClose } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'

const Search = ({ setShowSearch , products }) => {
  const [query, setQuery] = useState("");
  const [data , setdata] = useState([]);
  const [loading , setloading] = useState(false);
  const navigate = useNavigate();

  let searchProducts = []
  const searchProduct = () => {
    setloading(true)
    for (let i = 0; i <= products.length - 1; i++) {
        let productName = (products[i]?.name).toLowerCase();
        if (productName.includes(query)){
            searchProducts.push(products[i])
            setdata(searchProducts);
        }
    }
    setloading(false)
  }
  

  const onChange = (e) => {
    setQuery((e.target.value).toLowerCase());
    searchProduct(products);
  };
  

  return (
    <div className="search-modal">
      <div className="search-form">
        <input
          type="text"
          autoFocus
          placeholder="Search for product"
          value={query}
          onChange={onChange}
        />
        <MdClose
          className="close-btn"
          onClick={() => {
            setShowSearch(false);
          }}
        />
      </div>

      <div className="search-result-content">
        {!setloading ? <Skeleton count={30}/> :<div className="search-results">
          {data?.map((item) => (
            <div
            key={item.id}
            className="search-result-item"
            onClick={() => {
              navigate("/product/" + item.id);
              setShowSearch(false);
            }}>
              <div className="image-container">
                <img
                  src={item.pic[0]}
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item?.name}</span>
                <span className="desc">{item?.description}</span>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default Search;
