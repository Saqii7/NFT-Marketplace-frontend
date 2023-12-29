import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoMdClose } from "react-icons/io";
import { LuUser2 } from 'react-icons/lu';
import Logo from '../assets/Storefront.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <nav className='text-white fixed w-full flex justify-between items-center bg-[#2B2B2B] px-4 py-4 lg:px-12'>
        <div className='flex items-center'>
          <h1 className='flex items-center text-2xl gap-3 font-semibold'>
            <img src={Logo} alt='Icons' /> NFT Marketplace
          </h1>
        </div>
        <div className='lg:flex hidden gap-7 list-none items-center font-semibold'>
          <li>Marketplace</li>
          <li>Ranking</li>
          <li>Connect a wallet</li>
          <button className='flex items-center gap-2 justify-center bg-[#A259FF] px-6 py-3 rounded-3xl'>
            <LuUser2 size={25} /> Sign up
          </button>
        </div>
        <div className='lg:hidden'>
          <button className='text-2xl' onClick={toggleMenu}>
            <HiOutlineMenuAlt1 />
          </button>
        </div>
      </nav>
      {showMenu && (
        <div className='lg:hidden fixed inset-0 z-50 bg-[#2B2B2B] bg-opacity-50' onClick={closeMenu}>
          <div className='absolute top-0 right-0 h-full bg-[#2B2B2B] w-3/4 shadow-lg'>
            <div className='flex justify-end p-4'>
              <button className='text-xl text-white' onClick={closeMenu}>
                <IoMdClose />
              </button>
            </div>
            <ul className='text-white pt-8'>
              <li className='py-4 px-6 border-b'>Marketplace</li>
              <li className='py-4 px-6 border-b'>Ranking</li>
              <li className='py-4 px-6 border-b'>Connect a wallet</li>
              <li className='py-4 px-6'>
                <button className='flex items-center gap-2 justify-center bg-[#A259FF] px-8 py-3 rounded-3xl'>
                  <LuUser2 size={25} /> Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
