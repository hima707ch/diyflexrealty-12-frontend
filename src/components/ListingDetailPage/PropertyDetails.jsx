import React from 'react';
import images from '../assets/images';

const PropertyDetails = ({ property }) => {
  return (
    <div id="PropertyDetails_1" className="bg-white rounded-lg shadow-lg p-6">
      <h1 id="PropertyDetails_2" className="text-3xl font-bold mb-4">{property?.title || 'Luxury Villa'}</h1>
      <div id="PropertyDetails_3" className="flex items-center gap-4 mb-6">
        <span id="PropertyDetails_4" className="text-2xl font-bold text-blue-600">
          ${property?.price?.toLocaleString() || '1,200,000'}
        </span>
        <span id="PropertyDetails_5" className="text-gray-500">
          {property?.location || 'Beverly Hills, CA'}
        </span>
      </div>
      <div id="PropertyDetails_6" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div id="PropertyDetails_7" className="text-center p-3 bg-gray-50 rounded">
          <p className="font-bold">{property?.bedrooms || 4}</p>
          <p className="text-gray-500">Bedrooms</p>
        </div>
        <div id="PropertyDetails_8" className="text-center p-3 bg-gray-50 rounded">
          <p className="font-bold">{property?.bathrooms || 3}</p>
          <p className="text-gray-500">Bathrooms</p>
        </div>
        <div id="PropertyDetails_9" className="text-center p-3 bg-gray-50 rounded">
          <p className="font-bold">{property?.sqft || 3500}</p>
          <p className="text-gray-500">Sq Ft</p>
        </div>
        <div id="PropertyDetails_10" className="text-center p-3 bg-gray-50 rounded">
          <p className="font-bold">{property?.yearBuilt || 2020}</p>
          <p className="text-gray-500">Year Built</p>
        </div>
      </div>
      <div id="PropertyDetails_11" className="prose max-w-none">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">
          {property?.description || 'This stunning luxury villa offers modern living at its finest. Featuring high-end finishes, open concept living spaces, and premium appliances throughout.'}
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;