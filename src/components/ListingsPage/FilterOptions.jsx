import React from 'react';
import images from '../assets/images';

const FilterOptions = ({ onFilterChange }) => {
  const propertyTypes = ['House', 'Apartment', 'Condo', 'Villa'];

  return (
    <div id="FilterOptions_1" className="flex flex-wrap gap-4 bg-gray-50 p-4 rounded-lg">
      <div id="FilterOptions_2" className="flex flex-col w-full md:w-auto">
        <label className="text-sm font-medium text-gray-700 mb-1">Price Range</label>
        <div className="flex gap-2">
          <input
            id="FilterOptions_3"
            type="number"
            placeholder="Min Price"
            onChange={(e) => onFilterChange('minPrice', e.target.value)}
            className="w-32 px-3 py-2 border rounded-md"
          />
          <input
            id="FilterOptions_4"
            type="number"
            placeholder="Max Price"
            onChange={(e) => onFilterChange('maxPrice', e.target.value)}
            className="w-32 px-3 py-2 border rounded-md"
          />
        </div>
      </div>
      <div id="FilterOptions_5" className="flex flex-col w-full md:w-auto">
        <label className="text-sm font-medium text-gray-700 mb-1">Property Type</label>
        <select
          id="FilterOptions_6"
          onChange={(e) => onFilterChange('type', e.target.value)}
          className="px-3 py-2 border rounded-md"
        >
          <option value="">All Types</option>
          {propertyTypes.map((type, index) => (
            <option key={index} value={type.toLowerCase()}>{type}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;