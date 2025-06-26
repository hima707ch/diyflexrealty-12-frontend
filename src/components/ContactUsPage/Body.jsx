import React from 'react';
import ContactForm from './ContactForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-4xl mx-auto" id="Body_2">
        <div className="text-center mb-12" id="Body_3">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" id="Body_4">Contact Us</h1>
          <p className="text-lg text-gray-600" id="Body_5">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden" id="Body_6">
          <div className="flex flex-col md:flex-row" id="Body_7">
            <div className="md:w-1/3 bg-blue-600 p-8 text-white" id="Body_8">
              <h3 className="text-2xl font-bold mb-4" id="Body_9">Get in Touch</h3>
              <div className="space-y-4" id="Body_10">
                <p className="flex items-center" id="Body_11">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center" id="Body_12">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@example.com
                </p>
                <p className="flex items-center" id="Body_13">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Business Street, Suite 100
                  <br />New York, NY 10001
                </p>
              </div>
            </div>
            <div className="md:w-2/3 p-8" id="Body_14">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;