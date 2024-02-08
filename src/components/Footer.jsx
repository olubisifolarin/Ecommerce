import React from "react";
import { Link } from 'react-router-dom';
import elegant from "../assets/elegant.png"
import socialmedia from "../assets/socialmedia.png"

const Footer = () => {
    return(
        <>
        <div className="flex">
            <Link to="/" className="nav-logo mt-6">
                <img src={elegant} alt="Elegant Logo" className="logo"/>
            </Link>
            
            <div className="flex mt-3 ml-[5rem]">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white ">
                    HOME
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link text-white">
                       ABOUT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link text-white">
                   CONTACT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link text-white">
                   SHOP NOW
                    </Link>
                </li>     
            </div>

                <div className="flex mt-[5rem] ml-[10rem]">
                    <h2 className="text-white font-bold ">Follow Us: </h2>
                    <img src={socialmedia} alt="Elegant Logo" className="footer-img ml-8"/>
                </div>
        </div>
         <p className="text-white text-center">&copy; 2024 Elegant Wears - All right reserved</p>
    </>
    )
}

export default Footer;