import React from "react";
import { IoMdSearch } from "react-icons/io";


const Search = () => {
    return(
        <div className="searchBar mb-12">
            <input type="text" placeholder="Search" className="inputField" />
            <IoMdSearch className="searchIcon" />
        </div>
    )
}

export default Search;