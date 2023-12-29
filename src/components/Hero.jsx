// Hero.js
import React from 'react';
import Placehol from '../assets/placeholder.png';
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";

const Hero = () => {
  return (
    <div className='text-white bg-[#2B2B2B] grid md:grid-cols-2 gap-2 lg:pt-20 h-full md:pt-8 md:gap-10 xl:pt-20 '>
        <img src={Placehol} alt={Placehol} className='h-64 w-full md:h-full object-cover' />
      <div className='flex flex-col items-center md:items-start pt-10 px-7 gap-6 lg:gap-8 lg:pt-8'>
        <div className='font-semibold text-4xl lg:text-[51px] text-right lg:pl-14'>Create Account</div>
        <div className='md:flex md:justify-center font-normal text-base md:text-wrap w-[70%] md:w-[100%] lg:w-[80%] lg:text-[22px]'>Welcome! Enter your details and start collecting, and selling NFTS.</div>
        <form action="#" className='flex flex-col justify-start gap-4'>
          <div className='bg-white rounded-3xl flex gap-2 items-center px-4 '><span><MdOutlineMailOutline size={22} className='text-gray-700'/></span><input type="text" className='rounded-3xl text-gray-900 py-3 pl-2 pr-10 focus:outline-none'  placeholder='Username' /></div>
          <div className='bg-white rounded-3xl flex gap-2 items-center px-4'><span><MdOutlineMailOutline size={22} className='text-gray-700'/></span><input type="text" className='rounded-3xl text-gray-900 py-3 pl-2 pr-10 focus:outline-none'  placeholder='Email Address' /></div>
          <div className='bg-white rounded-3xl flex gap-2 items-center px-4'><span><HiOutlineLockClosed size={22} className='text-gray-700'/></span><input type="text"  className='rounded-3xl focus:outline-none text-gray-900 py-3 pl-2 pr-10' placeholder='Password' /></div>
          <div className='bg-white rounded-3xl flex gap-2 items-center px-4'><span><HiOutlineLockClosed size={22} className='text-gray-700'/></span><input type="text"  className='rounded-3xl text-gray-900 py-3 pl-2 pr-10 focus:outline-none' placeholder='Confirm Password' /></div>
        <button className='bg-[#A259FF] py-3 font-semibold rounded-3xl w-full'>Create account</button>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
