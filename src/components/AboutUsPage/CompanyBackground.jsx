import React from 'react';
import images from '../assets/images';

const CompanyBackground = () => {
  return (
    <section className="mb-16" id="CompanyBackground_1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="CompanyBackground_2">
        <div className="prose" id="CompanyBackground_3">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800" id="CompanyBackground_4">
            Our Story
          </h2>
          <p className="text-gray-600" id="CompanyBackground_5">
            Founded in 2020, DIY Flex Realty emerged from a vision to revolutionize the real estate industry by combining traditional expertise with modern technology. Our journey began with a simple idea: make real estate transactions more accessible, transparent, and flexible for everyone.
          </p>
          <p className="text-gray-600 mt-4" id="CompanyBackground_6">
            Today, we're proud to serve thousands of clients across the nation, helping them achieve their real estate goals through our innovative platform and dedicated team of professionals.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden" id="CompanyBackground_7">
          <img
            src={images[0]}
            alt="Company Office"
            className="object-cover w-full h-full"
            id="CompanyBackground_8"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyBackground;
