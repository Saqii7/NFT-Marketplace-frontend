import React from 'react'
import Place from '../assets/placeholder.png'
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";


const Hero = () => {
  return (
    <div className='text-white bg-[#2B2B2B] flex flex-col-reverse gap-2 h-full md:flex-row-reverse md:pt-8 md:gap-10 md:justify-center lg:pt-0 lg:items-center lg:gap-16'>
        <div className='flex flex-col items-center md:items-start px-7 gap-6 lg:gap-8 lg:pt-24'>
            <div className='font-semibold text-4xl lg:text-[51px] md:flex md:justify-start'>Create Account</div>
            <div className='md:flex md:justify-center font-normal text-base md:w-[70%] lg:text-[22px]'>Welcome! enter your details and start collecting, and sellig NFTS.</div>
            <div className='flex flex-col items-center justify-center gap-6 '>
                <form action="#" className='flex flex-col items-center justify-center gap-4'>
                   <div className=' bg-white rounded-3xl flex gap-2 items-center px-4'><span><MdOutlineMailOutline size={22} className='text-gray-700'/></span>  <input type="text" className='rounded-3xl text-gray-900 py-3 pl-2 pr-10'  placeholder='Username' /></div>
                   <div className=' bg-white rounded-3xl flex gap-2 items-center px-4'><span><MdOutlineMailOutline size={22} className='text-gray-700'/></span>  <input type="text" className='rounded-3xl text-gray-900 py-3 pl-2 pr-10'  placeholder='Email Address' /></div>
                   <div className=' bg-white rounded-3xl flex gap-2 items-center px-4'><span><HiOutlineLockClosed size={22} className='text-gray-700'/></span>  <input type="text"  className='rounded-3xl text-gray-900 py-3 pl-2 pr-10' placeholder='Password' /></div>
                   <div className=' bg-white rounded-3xl flex gap-2 items-center px-4'><span><HiOutlineLockClosed size={22} className='text-gray-700'/></span>  <input type="text"  className='rounded-3xl text-gray-900 py-3 pl-2 pr-10' placeholder='Confirm Password' /></div>
                </form>
                    <button className='bg-[#A259FF] px-8 py-3 font-semibold rounded-3xl w-full'>Create account</button>
                <div>
                </div>
            </div>
        </div>
            <img src={Place} alt="" className='h-60 md:h-full md:w-[50%] object-contain' />
        
    </div>
  )
}

export default Hero