import React from 'react';
import pic from '../../assets/GetInTech/recur.jpeg';

const Recruiment = () => {
  return (
    <div
      className='relative flex items-center justify-center h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${pic})` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0  '></div>

      {/* Content */}
      <div className='relative  z-0 text-center  px-6 py-4 max-w-md rounded-lg'>
        <h1 className='text-3xl md:text-4xl text-gray-950 font-bold mb-4'>
          Get in Tech
        </h1>
        <p className='text-sm md:text-base text-gray-50 font-medium mb-6'>
          We’re aiming to keep our 98% success rate and would love to work with
          talented sales representatives in the medical and pharmaceutical
          industry.
        </p>
        <button className='bg-[#E1FF00] hover:bg-[#e1ff00cf] duration-200 text-gray-950 font-medium px-4 py-2 rounded  focus:outline-none'>
          <label className='cursor-pointer'>
            <input type='file' className='hidden' />
            Upload Resume
          </label>
        </button>
      </div>
    </div>
  );
};

export default Recruiment;
