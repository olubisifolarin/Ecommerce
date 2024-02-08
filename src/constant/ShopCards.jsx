import React from "react";


const ShopCards = ({image}) => {
    return(
        <>
            <div className="shopCard-content">
                <img src={image} alt="shop-cards" className="mx-auto my-auto w-64 h-64"  />

                <div className="ml-5 mt-6 text-white">
                    <button className="shopNow-btn">Shop Now</button>
                    <button  className="addCart-btn">Add Cart</button>
                </div>
            
            </div>

        </>

    )
}

export default ShopCards