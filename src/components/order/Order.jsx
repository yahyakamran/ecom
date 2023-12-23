import React, { useContext, useState } from 'react'
import { Context } from '../../utils/context'
import CartItem from '../Cart/CartItem/CartItem'
import { BsCartX } from 'react-icons/bs'
import "./order.scss"
import { useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import {db} from "../../config/config.firebase"
import { addDoc, collection } from 'firebase/firestore'
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/warning.css';



function Order() {
  const navigate = useNavigate()
  const [showForm , setShowForm] = useState(false);

  const {cartSubTotal,cartItems} = useContext(Context)
  return (
    <>
    <div className='main'>
      <section className='heading'>
        <p className="heading-title">
          Order ({cartItems.length})
        </p>
      </section>
      {!cartItems?.length && <div className="empty-cart">
        <BsCartX/>
        <span>No Item to place order</span>
        <button className="retrun-cta" onClick={()=>navigate("/")}>RETRUN TO SHOPING</button>
      </div>}
      {!!cartItems?.length &&
      <section className='center'>
        <div className='item'>
          <CartItem layout="order" />
        </div>
      </section>
      }
      <section className="bottom">
        <div className="amount-section">
          <p className="amount">
            <span className="amount-text">Total Amount : </span>
            <span> Rs {cartSubTotal}</span>
          </p>
        </div>
        <div className="buttons-section">
          <button
            type="button"
            className="cash-on-delivery"
            onClick={()=>setShowForm(true)}
          >
            Cash On delivery
          </button>
          <a href="	https://wa.me/" target='_blank'>
          <button
            type="button"
            className="contact-to-order"
          >
            Contact To Order
          </button>
          </a>
        </div>
      </section>
    </div>
    {showForm && <CashOnDeliveryForm setShowForm={setShowForm}/>}  
    </>
  )
}

const CashOnDeliveryForm = ({setShowForm}) => {

  const {cartSubTotal,cartItems} = useContext(Context)
  const [name, setName] = useState()
  const [email , setEmail] = useState();
  const [address , setAddress] = useState();
  const [number, setNumber] = useState();
  const [zipCode  , setZipCode] = useState();
  const [city  , setCity] = useState();
  const [loading  , setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    if(cartSubTotal== 0){
      toast("Please select product to buy",{theme:"warning"})
      setLoading(false)
      return
    }
    try {
        const usersCollectionRef = collection(db, 'orders');
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        let productsLinks = [];
        cartItems.forEach(element => {
          productsLinks.push(`http://localhost:5174/product/${element?.id}`)
        });

        await addDoc(usersCollectionRef, {
          PersonalDetails:{
            name: name,
            number:number,
            email:email,
            city:city,
            zipCode:zipCode,
            address:address,
          },
          cost:cartSubTotal,
          orderProduct: productsLinks,
          date:{
            date:date,
            month:month,
            year:year
          },
          status:"pending",
        });
        setLoading(false)
        toast("Order placed successfully!",{theme:"success"})
      } catch (error) {
        setLoading(false)
        toast("Could not place an order",{theme:"warning"})
      console.log(error)
    }
  }

  return(
    <div className="search-modal">
      <div className="cart-header">
        <span className="cart-heading">Cash On Delivery</span>
        <span className="close-btn" 
        onClick={() => setShowForm(false)}
        >
        <MdClose/>
        <span className="text">close</span>
        </span>
      </div>
      <div className='form'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className="form-input" required onChange={(e)=>setName(e.target.value)}/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="form-input" required onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" className="form-input" required onChange={(e)=>setNumber(e.target.value)}/>

        <label htmlFor="zip">ZIP Code:</label>
        <input type="text" id="zip" name="zip" className="form-input" required onChange={(e)=>setZipCode(e.target.value)}/>

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" className="form-input" required onChange={(e)=>setCity(e.target.value)}/>

        <label htmlFor="address">Address:</label>
        <textarea name="address" id="adress" cols="30" rows="5" required onChange={(e)=>setAddress(e.target.value)}></textarea>

        <button  type="submit" className={`submit-button`} id={`${loading ? "processing" : ""}`}  onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Order