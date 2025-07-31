import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { RiMenu4Line } from 'react-icons/ri';
import { FiX} from 'react-icons/fi';
import Search from "./Search";
import elegant from "../assets/elegant.png";


const Navbar = () => {
    const [open, setOpen] = useState()
    const handleClick  = () =>{
        setOpen(!open);
    }
    const closeMenu = () => {
        setOpen(false);
    }
    return(
        <>
        <nav className="flex">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
                <img src={elegant} alt="Elegant Logo" className="logo"/>
            </Link>
            <Search />

            <div onClick={handleClick} className="bg-white rounded-full nav-icon">
                {open ? <FiX /> : <RiMenu4Line />}
            </div>

            <ul className={`nav-links ${open ? 'active' : ''}`}>
        
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                    HOME
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link" onClick={closeMenu}>
                       ABOUT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={closeMenu}>
                   CONTACT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link" onClick={closeMenu}>
                   SHOP NOW
                    </Link>
                </li>
            </ul>
        
        </nav>
        <hr />
        </>
     
    )
}

export default Navbar;