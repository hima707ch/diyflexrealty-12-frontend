import React from 'react';
import CompanyBackground from './CompanyBackground';
import MissionStatement from './MissionStatement';
import TeamProfiles from './TeamProfiles';
import useAboutUs from './useAboutUs';
import images from '../assets/images';

const Body = () => {
  const { companyData } = useAboutUs();

  return (
    <div className="min-h-screen bg-gray-50" id="Body_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="Body_2">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12" id="Body_3">
          About DIY Flex Realty
        </h1>
        <CompanyBackground />
        <MissionStatement />
        <TeamProfiles />
      </div>
    </div>
  );
};

export default Body;
