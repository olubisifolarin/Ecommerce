import React from "react";
import ShopCards from "../constant/ShopCards";
import shirt from "../assets/shirt.png";
import top from "../assets/top.png";
import bag from "../assets/bag.webp";
import bag2 from "../assets/bag2.webp";
import crocs2 from "../assets/crocs2.png";
import shoe from "../assets/shoe.png";
import shoe1 from "../assets/shoe1.png";
import pinkbag from "../assets/pinkbag.png";
import crocs from "../assets/crocs.png";
import crocs3 from "../assets/crocs3.jpg";
import gownbag from "../assets/gownbag.jpg";
import shirt1 from "../assets/shirt1.jpg";
import shirt2 from "../assets/shirt2.jpg";
import boxer from "../assets/boxer.png";
import boxer1 from "../assets/boxer1.png";
import gown from "../assets/gown.png";

const Shop = () => {
    return(
    <>
        <div className="shopPage">
            <h1 className="text-white text-center">Our Latest Product</h1>

            <div className="flex flex-wrap">
                <ShopCards
                    image= {shirt}
                />

                <ShopCards
                    image= {bag}
                />

                <ShopCards
                    image= {top}
                />

                <ShopCards
                    image= {crocs2}
                />

                <ShopCards
                    image= {pinkbag}
                />  

                <ShopCards
                    image= {gown}
                /> 

                <ShopCards
                    image= {shoe}
                />

                <ShopCards
                    image= {boxer1}
                />  
            
                <ShopCards
                    image= {shirt1}
                />

                <ShopCards
                    image= {gownbag}
                />

                <ShopCards
                    image= {crocs3}
                />

                <ShopCards
                    image= {boxer}
                />

                <ShopCards
                    image= {bag2}
                />

                <ShopCards
                    image= {crocs}
                />

                <ShopCards
                    image= {shirt2}
                />

                <ShopCards
                    image= {shoe1}
                />

                

            </div>
        </div>

        <hr />
    </>
  
    )
}

export default Shop;