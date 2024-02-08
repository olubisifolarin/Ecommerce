import React from "react";
import imgbg from "../assets/imgbg.png";
import boxer from "../assets/boxer.png";
import pinkbag from "../assets/pinkbag.png";
import crocs from "../assets/crocs.png";
import Services from "./Services";
import Shop from "./Shop";

const Home = () => {
    return(
        <>
        <div className="home text-white flex">
            <div className="w-1/2 elegantWears">
                <h1 className="welcome">Welcome to Elegant Wears, the place where style and comfort collide to make fashion a statement!</h1>
                    <div className="shop-btn pt-2 text-center">
                        <button>Shop Now</button>
                    </div>  
            </div>
            <div className="w-1/2 home-img flex relative">
                <img src={imgbg} alt="home-img" className="gown"/>
                
                <div className="block boxerPink absolute">
                    <img src={boxer} className="boxer mt-10" alt="home-img" />
                    <img src={pinkbag} className="pinkBag" alt="home-img" />
                </div>
                <img src={crocs} className="crocs relative" alt="home-img" />
            </div>   
        </div>
        < Services />
        <Shop />
     </>
    )
}

export default Home;