import React from "react";
import Cards from "../constant/cards";
import { MdLocalShipping } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const Services = () => {
    return(
        <div className="servicePage">
            <h1 className="text-white text-center">Why People choose us</h1>

            <div className ="flex ml-6 mt-6">
                <Cards 
                    icon = {<GiCheckMark className="card-icon" />}
                    title = "Quality Products"
                />

                <Cards 
                    icon = {<MdLocalShipping  className="card-icon"/>}
                    title = "Free Shipping"
                />

                <Cards 
                    icon = {<IoMdReturnLeft className="card-icon" />}
                    title = "14-day Return"
                />

                <Cards 
                    icon = {<IoCallSharp className="card-icon"/>}
                    title = "24/7 Support"
                />
            </div>

            
        </div>
    )
}

export default Services;