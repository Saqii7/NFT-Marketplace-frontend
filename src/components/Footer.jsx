import React from 'react'
import { RxDiscordLogo } from "react-icons/rx";
import { PiYoutubeLogo } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from '../assets/Storefront.svg';

const Footer = () => {
  return (
    <>
    <div className='text-white bg-[#3B3B3B] flex flex-col gap-4 h-full pt-8 px-7 md:pl-16 lg:flex lg:flex-row lg:justify-between lg:flex-wrap lg:gap-5 lg:px-36 '>
        <div className='flex flex-col gap-3'>
        <div className='flex items-center'>
          <h1 className='flex items-center text-2xl gap-3 font-semibold'>
            <img src={Logo} alt='Icons' /> NFT Marketplace
          </h1>
        </div>
            <div className='text-lg text-[#CCCCCC]'>NFT marketplace UI created with Anima for Figma</div>
            <div className='text-lg text-[#CCCCCC]'>Join our community</div>
            <div className='flex gap-3 text-[#CCCCCC]'>
                <RxDiscordLogo size={27}/>
                < PiYoutubeLogo size={27}/>
                < FiTwitter size={27}/>
                < BsInstagram size={25}/>
            </div>
        </div>
        <div className='flex flex-col gap-4 text-[#CCCCCC] sm:pt-10 md:pt-10 lg:pt-0 text-lg'>
            <div className='text-white font-medium text-2xl'>Explore</div>
            <div>Marketplace</div>
            <div>Ranking</div>
            <div>Connect a wallet </div>
        </div>
        <div className='flex flex-col gap-4 text-[#CCCCCC] pt-8 lg:pt-0 text-base'>
            <div className='text-white font-medium text-2xl '>Join our weekly digest</div>
            <div className='lg:w-[70%]'>Get exclusive promotions and updates straight to your inbox.</div>
            
        <div className='flex items-center'>
        <div className='bg-white rounded-2xl flex items-center justify-end pl-2'>
        <span className='text-gray-700'><MdOutlineMailOutline size={22} /></span>
        <input
          type="text"
          className='rounded-3xl text-gray-900 py-3 pl-10 focus:outline-none'
          placeholder='Email Address'
       /> 
       <span className='bg-[#A259FF] rounded-2xl lg:flex'> 
        <button className='bg-[#A259FF] px-8 py-3 font-semibold rounded-3xl flex items-center justify-end text-center gap-2 text-white'><span><MdOutlineMailOutline size={22} className='text-white'/></span> Subscribe</button> </span>

      </div>
    </div>
            
            <div className='flex flex-col gap-4 md:hidden'>
            <div className=' bg-white rounded-3xl flex gap-2 items-center px-4'><span><MdOutlineMailOutline size={22} className='text-gray-700'/></span>  <input type="text" className='rounded-3xl text-gray-900 py-3 pl-2 pr-10'  placeholder='Email Address' /></div>
            <button className='bg-[#A259FF] px-8 py-3 font-semibold rounded-3xl w-full flex items-center justify-center text-center gap-2 text-white'><span><MdOutlineMailOutline size={22} className='text-white'/></span> Subscribe</button>
        </div>
        </div>
        <div className='lg:w-full'>
            <div className='pt-6 border-b-[1px] border-[#858584]'></div>
            <div className='pt-6 text-[#CCCCCC] pb-10 text-sm'> &#169; NFT Market. Use this template freely. </div>
    </div>
    </div>
    </>
  )
}

export default Footer