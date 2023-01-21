import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../components/images/logo.png'


const Header = () => {

   const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    
   <div className='flex items-center h-8 max-w-[800px] gap-8 mx-auto px-[-14]  lg:mt-8 md:mt-4 lg:mb-2 md:mb-2 text-black'>
     <img src= { Logo } alt="" className='logo w-44  gap-2 mt-1' />
      <ul className='hidden md:flex '>
        <li className='p-4'>About us</li>
        <li className='p-4'>Programs</li>
        <li className='p-4'>Cohorts</li>
        <li className='p-4'>Startup care</li>
        <li className='p-4'>News</li>
      </ul>
      <button className='bg-[#FF1616] w-[80px] h-[40px] rounded-md font-small justify-end  my-6 mx-auto py-3 text-black'>Enroll Now</button>
      <div onClick={handleNav} className='block md:hidden sm:justify-end'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-2 w-[60%] h-70% border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <img src= { Logo } alt="" className='logo w-44 mt-1' />
          <li className='p-4 border-b border-gray-600'>About us</li>
          <li className='p-4 border-b border-gray-600'>Programs</li>
          <li className='p-4 border-b border-gray-600'>Cohorts</li>
          <li className='p-4 border-b border-gray-600'>Startup Care</li>
          <li className='p-4'>News</li>
      </ul>
   
    </div>

    
  )
}

export default Header