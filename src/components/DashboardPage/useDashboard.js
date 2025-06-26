import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [listings, setListings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await fetch('/api/properties/search');
      if (!response.ok) throw new Error('Failed to fetch listings');
      const data = await response.json();
      setListings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (listing) => {
    setSelectedListing(listing);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        // Add delete API call here
        setListings(listings.filter(listing => listing.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleAdd = () => {
    // Handle add listing logic
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedListing(null);
  };

  return {
    listings,
    isModalOpen,
    selectedListing,
    loading,
    error,
    handleEdit,
    handleDelete,
    handleAdd,
    handleCloseModal
  };
};