import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Listings', route: '/listingspage' },
    { name: 'About Us', route: '/aboutuspage' },
    { name: 'Contact Us', route: '/contactuspage' }
  ];

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-white text-xl font-bold">RealEstate</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6" id="Header_3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className={`text-white hover:text-gray-200 transition-colors ${location.pathname === link.route ? 'border-b-2 border-white' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4" id="Header_4">
            {!isLoggedIn ? (
              <>
                <Link to="/loginpage" className="text-white hover:text-gray-200 px-4 py-2 rounded-lg transition-colors">
                  Login
                </Link>
                <Link to="/registerpage" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  Register
                </Link>
              </>
            ) : (
              <Link to="/dashboardpage" className="text-white hover:text-gray-200 px-4 py-2 rounded-lg transition-colors">
                Dashboard
              </Link>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            id="Header_5"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4" id="Header_6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!isLoggedIn ? (
              <>
                <Link
                  to="/loginpage"
                  className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg mt-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/registerpage"
                  className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/dashboardpage"
                className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;