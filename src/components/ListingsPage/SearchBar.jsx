import React, { useState } from 'react';
import images from '../assets/images';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location: searchTerm });
  };

  return (
    <form id="SearchBar_1" onSubmit={handleSubmit} className="w-full">
      <div id="SearchBar_2" className="relative">
        <input
          id="SearchBar_3"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by location..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          id="SearchBar_4"
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;