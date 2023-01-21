import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../components/images/logo.png'
import FormButton from '../../assets/button/Button'
import { NavLink } from 'react-router-dom';


const Header = () => {

   const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    
   <div className='flex items-center ml-16 h-8 max-w-100% gap-12 mx-auto px-[-14]  lg:mt-8 md:mt-4 lg:mb-2 md:mb-2 text-black'>
     <img src= { Logo } alt="" className='logo w-44 ml-1 gap-2 mt-1' />
      <ul  className='hidden md:flex '>
        <NavLink exact activeClassName="active"
        to='/' 
        span={true}
        smooth={true}
        className='p-4'>Home</NavLink>
        <NavLink exact activeClassName="active"
        to='/programs' 
        span={true}
        smooth={true}
        className='p-4'>Programs</NavLink>
        <NavLink exact activeClassName="active"
        to='cohorts'
        span={true}
        smooth={true}
         className='p-4'>Cohorts</NavLink>
        <NavLink exact activeClassName="active"
        to='/pages'
        span={true}
        smooth={true}
        className='p-4'>Startup care</NavLink>
        <NavLink exact activeClassName="active"
        to='news' 
        span={true}
        smooth={true}
        className='p-4'>News</NavLink>
      </ul>
      <FormButton className='bg-[#FF1616] w-[80px] h-[40px] rounded-md font-small justify-end  my-6 mx-auto py-3 text-black'>Enroll Now</FormButton>
      <div onClick={handleNav} className='block md:hidden sm:justify-end'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-2 w-[60%] h-70% border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <img src= { Logo } alt="" className='logo w-44 mt-1' />
          <NavLink exact activeClassName="active"
          span={true}
            smooth={true}
          className='p-4 border-b border-gray-600'>Home</NavLink>
          <NavLink exact activeClassName="active"
          span={true}
          smooth={true} 
          className='p-4 border-b border-gray-600'>Programs</NavLink>
          <NavLink exact activeClassName="active"
          span={true}
           smooth={true} 
          className='p-4 border-b border-gray-600'>Cohorts</NavLink>
          <NavLink exact activeClassName="active"
           span={true}
          smooth={true}
          className='p-4 border-b border-gray-600'>Startup Care</NavLink>
          <NavLink exact activeClassName="active"
          span={true}
           smooth={true}
         className='p-4'>News</NavLink>
      </ul>
   
    </div>

    
  )
}

export default Header