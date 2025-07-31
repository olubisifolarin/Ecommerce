import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


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
        <div className="relative w-full max-w-md mb-12">
            <input type="text" value={query} placeholder="Search" 
            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 outline-none"
            onChange={(e) => setQuery(e.target.value)}
             />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl cursor-pointer" onClick={handleSearch}/>
           <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
           </ul>
        </div>
        
    )
}

export default Search;