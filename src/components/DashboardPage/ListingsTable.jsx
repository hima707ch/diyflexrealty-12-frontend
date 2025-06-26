import React from 'react';
import images from '../assets/images';

const ListingsTable = ({ listings, onEdit, onDelete }) => {
  return (
    <div id="ListingsTable_1" className="bg-white rounded-lg shadow overflow-hidden">
      <table id="ListingsTable_2" className="min-w-full divide-y divide-gray-200">
        <thead id="ListingsTable_3" className="bg-gray-50">
          <tr>
            <th id="ListingsTable_4" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
            <th id="ListingsTable_5" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th id="ListingsTable_6" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th id="ListingsTable_7" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody id="ListingsTable_8" className="bg-white divide-y divide-gray-200">
          {listings.map((listing) => (
            <tr key={listing.id}>
              <td id="ListingsTable_9" className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img className="h-10 w-10 rounded-full" src={listing.image || images[0]} alt="" />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                    <div className="text-sm text-gray-500">{listing.type}</div>
                  </div>
                </div>
              </td>
              <td id="ListingsTable_10" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{listing.location}</td>
              <td id="ListingsTable_11" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${listing.price}</td>
              <td id="ListingsTable_12" className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onEdit(listing)}
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(listing.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;