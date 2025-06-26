import React from 'react';
import ListingsTable from './ListingsTable';
import EditListingModal from './EditListingModal';
import AddListingForm from './AddListingForm';
import images from '../assets/images';
import { useDashboard } from './useDashboard';

const Body = () => {
  const { listings, isModalOpen, selectedListing, loading, error, handleEdit, handleDelete, handleAdd, handleCloseModal } = useDashboard();

  if (loading) return <div id="Body_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <div id="Body_4" className="flex justify-between items-center mb-8">
        <h1 id="Body_5" className="text-3xl font-bold text-gray-800">My Listings</h1>
        <button
          id="Body_6"
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add New Listing
        </button>
      </div>
      <ListingsTable listings={listings} onEdit={handleEdit} onDelete={handleDelete} />
      {isModalOpen && (
        <EditListingModal listing={selectedListing} onClose={handleCloseModal} />
      )}
      <AddListingForm />
    </div>
  );
};

export default Body;