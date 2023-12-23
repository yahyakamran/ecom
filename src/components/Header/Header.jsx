import { useEffect,useState,useContext,useRef } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";

import { Context } from "../../utils/context";

import "./Header.scss";
import { fetchDataFromApi } from "../../utils/api";
const Header = ({categoryRef, aboutRef}) => {
    const {cartCount} = useContext(Context)
    const [products , setProducts] = useState();
    const [scrolled , setScrolled] = useState(false);
    const [showCart , setShowCart] = useState(false);
    const [showSearch , setShowSearch] = useState(false);
    const navigate = useNavigate()

    const handleCategoryScroll = (categoryRef) => {
        const route = window.location.pathname
        if (route !== "/")
        {
            navigate("/")
            setTimeout(function(){
                categoryRef.current?.scrollIntoView({behavior:"smooth"});
            },300)
        }
        else
        {
            categoryRef.current?.scrollIntoView({behavior:"smooth"});
        }          
    }
    const handleAboutScroll = (aboutRef) => {
        const route = window.location.pathname
        if (route !== "/")
        {
            navigate("/")
            setTimeout(function(){
                aboutRef.current?.scrollIntoView({behavior:"smooth"});
            },600)
        }
        else
        {
            aboutRef.current?.scrollIntoView({behavior:"smooth"});
        }    
    }
    const handleScroll = () =>{
        const ofset = window.scrollY;
        

        if(ofset>300){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }

    }
    const getProducts = () => {
        fetchDataFromApi("product")
        .then((res)=>{
          setProducts(res);
        })
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        getProducts();    
    },[])

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header":""}`}>
                <div className="header-content">
                    <div className="left">
                        <ul>
                            <li onClick={()=>navigate("/")}>Home</li>
                            <li onClick={()=>handleCategoryScroll(aboutRef)}>About  </li>
                            <li onClick={()=>handleCategoryScroll(categoryRef)} >Category</li>
                        </ul>
                    </div>
                    <div className="center" onClick={()=>navigate("/")}>Demo Furnitures.</div>
                    <div className="right">
                        <TbSearch
                        onClick={()=>{
                            setShowSearch(true)
                        }}
                        />
                        <span className="cart-icon"
                            onClick={()=>{
                                setShowCart(true)
                            }}
                        >
                            <CgShoppingCart/>
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
            {showSearch && <Search setShowSearch={setShowSearch} products={products}/>}

        </>
)
    
    
};

export default Header;
