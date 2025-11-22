      import React from 'react';
      import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

      const SocialMedia = () => {
        return (
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-blue-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <FaInstagram size={24} />
            </a>
          </div>
        );
      };

      export default SocialMedia;