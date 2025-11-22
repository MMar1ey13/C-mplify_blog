import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
      <form className="flex">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full bg-gray-700 text-white rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold rounded-r-full px-4 hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
