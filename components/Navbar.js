import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling ? 'bg-blue-500 bg-opacity-75' : 'bg-blue-500'
      } p-4 fixed w-full transition-all duration-300 ease-in-out z-50`}
    >
       <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="text-white font-bold text-xl cursor-pointer">C-MPLIFY</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
             {/* <span className="text-white hover:text-pink-500 cursor-pointer">Home</span> */}
            </Link>
          </li>
          <li>
            <Link href="/about">
              {/*<span className="text-white hover:text-pink-500 cursor-pointer">About</span>  */}
            </Link>
          </li>
          <li>
            <Link href="/services">
              {/*<span className="text-white hover:text-pink-500 cursor-pointer">Services</span> */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
