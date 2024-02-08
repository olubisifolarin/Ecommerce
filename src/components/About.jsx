import React from "react";
import cloth from '../assets/cloth.png';

const About = () => {
    return(
    <>
        <div className="flex about-page">
            <div className="aboutImg">
                <img src={cloth} alt="aboutImg"/>
            </div>

            <div className="w-1/2 m-6 ml-12">
                <h1 className="aboutUs">ABOUT US</h1>
                <p className="aboutUs-text"> At Elegant Wears! we believe that fashion is more than just clothing.
                    We are passionate about providing a seamless and enjoyable shopping
                    experience for all of our customers. We offers a wide variety of 
                    trendy and affordable clothing options for men, women, and children. 
                    We are committed to providing high-quality products and 
                    excellent customer service. Our goal is to make shopping for 
                    clothing convenient and fun. Thank you for choosing our app for 
                    all of your fashion needs!</p>
            </div>
        </div>
        <hr />
    </>
    )
}

export default About;