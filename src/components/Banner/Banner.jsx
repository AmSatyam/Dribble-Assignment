import React from 'react';

const Banner = () => {
  return (
    <div className="mt-24 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="text-3xl font-semibold tracking-tighter text-center sm:text-left">
        Authentication Flow
      </h1>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-6">
        <p className="text-center sm:text-left sm:ml-5">
          Phil Goodwin for Unfold <br />
          <span className="text-green-500">Available for work</span> &nbsp;
          Follow
        </p>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-full mt-4 sm:mt-0 sm:mr-12">
          <a href="">Get in Touch</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
