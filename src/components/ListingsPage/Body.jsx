import React from 'react';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import ListingsGrid from './ListingsGrid';
import useListings from './useListings';
import images from '../assets/images';

const Body = () => {
  const { 
    listings,
    searchParams,
    loading,
    error,
    handleSearch,
    handleFilterChange 
  } = useListings();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-4xl font-bold text-gray-800 mb-8">Property Listings</h1>
      <div id="Body_3" className="space-y-6">
        <SearchBar onSearch={handleSearch} />
        <FilterOptions onFilterChange={handleFilterChange} />
        {error && <p id="Body_4" className="text-red-500">{error}</p>}
        {loading ? (
          <div id="Body_5" className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <ListingsGrid listings={listings} />
        )}
      </div>
    </div>
  );
};

export default Body;