import React from 'react';
import useContactForm from './useContactForm';
import images from '../assets/images';

const ContactForm = () => {
  const { formData, errors, loading, success, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="ContactForm_1">
      <div id="ContactForm_2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="ContactForm_3"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600" id="ContactForm_4">{errors.name}</p>
        )}
      </div>

      <div id="ContactForm_5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="ContactForm_6"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600" id="ContactForm_7">{errors.email}</p>
        )}
      </div>

      <div id="ContactForm_8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="ContactForm_9"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.message ? 'border-red-500' : ''}`}
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600" id="ContactForm_10">{errors.message}</p>
        )}
      </div>

      {success && (
        <div className="rounded-md bg-green-50 p-4" id="ContactForm_11">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
            </div>
          </div>
        </div>
      )}

      <div id="ContactForm_12">
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;