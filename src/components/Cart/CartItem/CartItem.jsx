import { useContext } from "react";

import "./CartItem.scss";
import { MdClose } from "react-icons/md";

import { Context } from "../../../utils/context";

const CartItem = ({layout}) => {
  const { cartItems, handleRemoveFromCart, handleProductQuantity } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="image-container">
            <img
              src={item?.pic[0]}
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.name}</span>
            <MdClose onClick={() => handleRemoveFromCart(item)} />
            {
              layout === "order" ? " "
              :
              <div className="quantity-buttons" >
                <span onClick={() => handleProductQuantity("dec", item)}>-</span>
                <span>{item.quantity}</span>
                <span onClick={() => handleProductQuantity("inc", item)}>+</span>
              </div>
            }
            <div className="text">
              <span>{item.quantity}</span>
              <span>x</span>
              <span className=" highlight">Rs{item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
