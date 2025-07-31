import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search/?q=${query}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="w-full max-w-md px-4 sm:px-0 mx-auto mt-6">
      <div className="relative">
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      <ul className="mt-4 bg-white shadow-md rounded-md overflow-hidden">
        {results.map((result) => (
          <li key={result.id} className="px-4 py-2 border-b last:border-none hover:bg-gray-50 text-sm sm:text-base">
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
