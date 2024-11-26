import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white px-6 py-4 shadow">
      
      <div className="text-3xl italic font-bold text-black">Dribbble</div>

      <button
        className="block md:hidden text-gray-900"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >

{/* hamburger wala svg */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      
      <div className="sm:flex h-16 justify-evenly bg-gray-100 rounded-full px-6 py-3 w-full md:w-2/4">
        <input
          type="text"
          placeholder="What are you looking for ?"
          className="flex-grow bg-transparent text-sm text-gray-700 focus:outline-none placeholder:overflow-hidden"
        />
        <button className=  {`${
          isMenuOpen ? 'hidden' : 'block'
        } text-white rounded-full bg-pink-600 ml-2 px-3 py-1"`}> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

     
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full md:w-auto md:flex items-center font-semibold space-x-6 text-sm text-gray-700 mt-4 md:mt-0`}
      >
        <a href="#" className="block md:inline hover:underline">
          Explore
        </a>
        <a href="#" className="block md:inline hover:underline">
          Hire a Designer
        </a>
        <a href="#" className="block md:inline hover:underline">
          Find Jobs
        </a>
        <a href="#" className="block md:inline hover:underline">
          Blog
        </a>
        <a href="#" className="block md:inline hover:underline">
          Sign up
        </a>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-full w-full md:w-auto mt-2 md:mt-0">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Header;
