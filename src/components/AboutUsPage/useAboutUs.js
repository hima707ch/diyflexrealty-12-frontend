import { useState, useEffect } from 'react';

const useAboutUs = () => {
  const [companyData, setCompanyData] = useState({
    founded: 2020,
    locations: 25,
    clients: 10000,
    teamMembers: 50
  });

  useEffect(() => {
    // Here you can add API calls if needed in the future
  }, []);

  return {
    companyData
  };
};

export default useAboutUs;
