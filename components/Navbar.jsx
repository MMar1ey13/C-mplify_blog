// Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-white font-bold text-xl">
          My Website
        </Link>
        <ul className="flex space-x-4">
          <li href="/" className="text-white hover:text-gray-200">Home</li>
          <li href="/about" className="text-white hover:text-gray-200">About</li>
          <li href="/services" className="text-white hover:text-gray-200">Services</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
