import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import SearchBar from './SearchBar';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex justify-between items-center border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/" legacyBehavior>
            <span className="cursor-pointer font-bold text-2xl text-white tracking-wider flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m-1 13V10a2 2 0 00-2-2h-3m3 3h-3" />
              </svg>
              Mtaa Times
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`} legacyBehavior>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold hover:text-blue-300 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
           <div className="relative">
            <SearchBar />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <SearchBar />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`} legacyBehavior>
                <a className="text-white my-2 font-semibold hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>
                  {category.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;