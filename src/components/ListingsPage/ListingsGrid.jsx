import React from 'react';
import images from '../assets/images';

const ListingsGrid = ({ listings }) => {
  return (
    <div id="ListingsGrid_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing, index) => (
        <div
          key={listing.id || index}
          id={`ListingsGrid_${index + 2}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={listing.image || images[index % images.length]}
            alt={listing.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{listing.title}</h3>
            <p className="text-gray-600 mb-2">{listing.location}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">${listing.price.toLocaleString()}</span>
              <span className="text-sm text-gray-500">{listing.type}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="text-sm text-gray-600">{listing.bedrooms} beds</span>
              <span className="text-sm text-gray-600">•</span>
              <span className="text-sm text-gray-600">{listing.bathrooms} baths</span>
              <span className="text-sm text-gray-600">•</span>
              <span className="text-sm text-gray-600">{listing.area} sqft</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingsGrid;