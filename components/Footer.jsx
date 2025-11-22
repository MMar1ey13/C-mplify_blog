import React from 'react';
import SocialMedia from './SocialMedia';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center md:justify-start">
            <SocialMedia />
          </div>
          <div className="flex justify-center md:justify-end">
            <Newsletter />
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-blue-400">
          <p>&copy; {new Date().getFullYear()} Mtaa Times. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
