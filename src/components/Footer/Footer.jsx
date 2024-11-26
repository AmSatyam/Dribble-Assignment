import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-200">
      
      <div className="text-3xl italic font-bold text-black p-5 ml-5 md:ml-10 mt-10">
        Dribbble
      </div>

     
      <div className="flex flex-wrap justify-center md:justify-between font-semibold text-sm md:text-base w-full md:w-[75%] mx-auto p-5">
        <a href="#" className="px-3 py-2 hover:underline">For Designers</a>
        <a href="#" className="px-3 py-2 hover:underline">Hire Talent</a>
        <a href="#" className="px-3 py-2 hover:underline">Inspiration</a>
        <a href="#" className="px-3 py-2 hover:underline">Advertising</a>
        <a href="#" className="px-3 py-2 hover:underline">Blog</a>
        <a href="#" className="px-3 py-2 hover:underline">About</a>
        <a href="#" className="px-3 py-2 hover:underline">Careers</a>
        <a href="#" className="px-3 py-2 hover:underline">Support</a>
      </div>

      
      <div className="mt-10 flex flex-wrap justify-center md:justify-between text-sm text-gray-700 px-5 py-10">
       
        <div className="text-center md:text-left mb-4 md:mb-0">
          ©2024 Dribbble&nbsp; | &nbsp;
          <a href="#" className="hover:underline">Terms</a>&nbsp; | &nbsp;
          <a href="#" className="hover:underline">Privacy</a>&nbsp; | &nbsp;
          <a href="#" className="hover:underline">Cookies</a>
        </div>

        
        <div className="text-center md:text-right">
          <a href="#" className="hover:underline">Jobs</a>&nbsp; | &nbsp;
          <a href="#" className="hover:underline">Designer</a>&nbsp; | &nbsp;
          <a href="#" className="hover:underline">Freelancer</a>&nbsp; | &nbsp;
          <a href="#" className="hover:underline">Resources</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
