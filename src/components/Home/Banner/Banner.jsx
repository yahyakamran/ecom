import "./Banner.scss";
import BannerImg from "../../../assets/pngwing.png"

const Banner = () => {
    return(
        <>
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Premium Quality</h1>
                    <p>Demo Furnitures provides you best quality furniture in very reasonable rates.You can contact us and get your furniture ready on demand</p>
                    <div className="ctas">
                        <div className="banner-ctas">Read More</div>
                        <div className="banner-ctas v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div> 
        </>
    );
};

export default Banner;
