import "./Category.scss";

import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigator = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="section-heading">Categories</div>
      <div className="categories">
        {categories?.map((item) => (
          <div
            key={item?.id}
            className="category"
            onClick={() => navigator(`/category/${item.id}`)}>
            <img
              src={item?.pic}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
