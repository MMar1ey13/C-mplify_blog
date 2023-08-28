// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <a href="/" className="text-white font-bold text-xl">
          My Website
        </a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-200">About</a></li>
          <li><a href="/services" className="text-white hover:text-gray-200">Services</a></li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
