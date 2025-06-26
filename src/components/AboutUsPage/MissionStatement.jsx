import React from 'react';
import images from '../assets/images';

const MissionStatement = () => {
  return (
    <section className="py-12 bg-gray-100 rounded-xl mb-16" id="MissionStatement_1">
      <div className="max-w-4xl mx-auto px-6" id="MissionStatement_2">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8" id="MissionStatement_3">
          Our Mission
        </h2>
        <div className="text-center" id="MissionStatement_4">
          <p className="text-xl text-gray-600 leading-relaxed mb-8" id="MissionStatement_5">
            To empower individuals in their real estate journey by providing innovative solutions, transparent processes, and personalized support, making property transactions accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" id="MissionStatement_6">
          <div className="bg-white p-6 rounded-lg shadow-md" id="MissionStatement_7">
            <h3 className="text-xl font-semibold mb-4 text-gray-800" id="MissionStatement_8">Innovation</h3>
            <p className="text-gray-600" id="MissionStatement_9">Leveraging technology to streamline real estate processes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md" id="MissionStatement_10">
            <h3 className="text-xl font-semibold mb-4 text-gray-800" id="MissionStatement_11">Transparency</h3>
            <p className="text-gray-600" id="MissionStatement_12">Clear communication and honest dealings in every transaction</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md" id="MissionStatement_13">
            <h3 className="text-xl font-semibold mb-4 text-gray-800" id="MissionStatement_14">Excellence</h3>
            <p className="text-gray-600" id="MissionStatement_15">Committed to delivering exceptional service and results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
