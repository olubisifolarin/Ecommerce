import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import Search from "./Search";
import elegant from "../assets/elegant.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="flex items-start justify-between p-4 z-50">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={elegant} alt="Elegant Logo" className="w-32 h-auto -mt-8" />
        </Link>

        {/* Search */}
        <div className="w-full max-w-md mx-4 hidden sm:block">
          <Search />
        </div>

        {/* Hamburger Icon (always visible) */}
        <div onClick={handleClick} className="text-6xl text-white cursor-pointer z-50">
          {open ? <FiX /> : <RiMenu4Line />}
        </div>
      </nav>

      {/* Menu Overlay (for all screen sizes) */}
      <ul
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-md flex flex-col pt-28 pl-8 transition-transform duration-500 ease-in-out z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="mb-6 text-lg font-semibold">
          <Link to="/" onClick={closeMenu}>
            HOME
          </Link>
        </li>
        <li className="mb-6 text-lg font-semibold">
          <Link to="/about" onClick={closeMenu}>
            ABOUT
          </Link>
        </li>
        <li className="mb-6 text-lg font-semibold">
          <Link to="/contact" onClick={closeMenu}>
            CONTACT
          </Link>
        </li>
        <li className="mb-6 text-lg font-semibold">
          <Link to="/shop" onClick={closeMenu}>
            SHOP NOW
          </Link>
        </li>
      </ul>

      <hr />
    </>
  );
};

export default Navbar;
