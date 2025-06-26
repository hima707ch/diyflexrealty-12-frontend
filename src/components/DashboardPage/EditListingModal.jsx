import React, { useState } from 'react';
import images from '../assets/images';

const EditListingModal = ({ listing, onClose }) => {
  const [formData, setFormData] = useState(listing);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div id="EditListingModal_1" className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div id="EditListingModal_2" className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 id="EditListingModal_3" className="text-2xl font-bold mb-6">Edit Listing</h2>
        <form onSubmit={handleSubmit}>
          <div id="EditListingModal_4" className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div id="EditListingModal_5" className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div id="EditListingModal_6" className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditListingModal;