import "./Footer.scss";
import React from "react";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = ({aboutRef}) => {
    return(
        <footer className="footer" ref={aboutRef}>
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Welcome to Demo Furnitures in Caniot Market! We have awesome furniture that mixes traditional and modern styles. From fancy carved wood to cool modern designs, we've got something for everyone. Our staff is super friendly and helps you find the perfect piece for your home. We use the best materials from talented craftspeople in Pakistan to make our furniture comfy and long-lasting. Demo Furnitures is not just a store; it's a cool place where your furniture tells a story of style and living nicely. Come check it out!
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">Lorem ipsum dolor sit amet consectetur </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">Phone : +9230000000</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">Email : Demobusiness8@gmail.com</div>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Bed set included front back + dressing tables + frame</span>
                    <span className="text">Center sets (All design)</span>
                    <span className="text">Dewaan(All design)</span>
                    <span className="text">All type of Stands</span>
                    <span className="text">Tables</span>
                    <span className="text">Chairs</span>
                    <span className="text">Sofas</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bar-content">
                    <div className="text">Demo Furnitures </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
