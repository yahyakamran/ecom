import "./Products.scss";
import Product from "./Product/Product"
const Products = ({ products, innerPage, heading }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="section-heading">{heading}</div>}    
            <div className="products">
                {products?.map((item) => (
                    <Product key={item.id} id={item.id} data={item}  />
                ))}
            </div>
        </div>
    );
};

export default Products;
