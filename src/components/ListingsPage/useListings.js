import { useState, useEffect } from 'react';

const useListings = () => {
  const [listings, setListings] = useState([]);
  const [searchParams, setSearchParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchListings = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`/api/properties/search?${queryString}`);
      if (!response.ok) throw new Error('Failed to fetch listings');
      const data = await response.json();
      setListings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchCriteria) => {
    const newParams = { ...searchParams, ...searchCriteria };
    setSearchParams(newParams);
    fetchListings(newParams);
  };

  const handleFilterChange = (filterKey, value) => {
    const newParams = { ...searchParams, [filterKey]: value };
    setSearchParams(newParams);
    fetchListings(newParams);
  };

  useEffect(() => {
    fetchListings({});
  }, []);

  return {
    listings,
    searchParams,
    loading,
    error,
    handleSearch,
    handleFilterChange
  };
};

export default useListings;