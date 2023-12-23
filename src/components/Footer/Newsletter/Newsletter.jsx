import "./Newsletter.scss";
import React, { useState } from "react";
import {
    FaFacebookF, 
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa"
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/warning.css';

const Newsletter = () => {
    const [input, setInput] = useState();
    function handleClick () {
        if(!input){
            toast("Please write something",{theme:"warning"})
            return
        }
        toast("Thanks for You Quote",{theme:"success"})
    }
    return(
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">Sign up for latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="Enter your email" onChange={(e)=>setInput(e.target.value)} />
                    <button onClick={handleClick}>Subscribe</button>
                </div>
                <div className="text">
                    Will be used in accordance with our private policy
                </div>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank">
                    <div className="icon" >
                        <FaFacebookF size={14} />
                    </div>
                    </a>
                    <div className="icon">
                        <FaTwitter size={14}/>
                    </div>
                    <a href="https://instagram.com" target="_blank">
                    <div className="icon" >
                        <FaInstagram size={14} />
                    </div>
                    </a>
                    <div className="icon"> 
                        <FaLinkedinIn size={14}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;
