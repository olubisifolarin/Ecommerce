import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";


const Search = () => {
    const[query, setQuery] = useState('');
    const[results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
          const response = await fetch(`/api/search/?q=${query}`);
          const data = await response.json();
          setResults(data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

    return(
        <div className="searchBar mb-12">
            <input type="text" value={query} placeholder="Search" 
            className="inputField"
            onChange={(e) => setQuery(e.target.value)}
             />
            <IoMdSearch className="searchIcon" onClick={handleSearch}/>
           <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
           </ul>
        </div>
        
    )
}

export default Search;