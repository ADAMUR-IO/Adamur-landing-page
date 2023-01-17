import React from 'react';
import Logo from '../../images/logo.png';
import BgImage from '../../images/background.png'
import {
    FaInstagram,
    FaFacebookSquare,
    FaYoutube,
    FaTwitterSquare,
  } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer m-2 p-1  '>

        <div class="bg-local" style={{backgroundImage: `url(${BgImage})`}}>

        <div className='max-w-[1200px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white-300'></div>
      <img src= { Logo } alt="" className='flogo'/>
      

     
      <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
      <div className='flex justify-between md:w-[75%] my-6'>
          <FaInstagram size={30} />
          <FaFacebookSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaYoutube size={30} />
          
      </div>

      <div className='grid lg:cols-2 md:col-span-1 gap-2  lg:flex md:flex justify-between mt-6 '>
  <div>
      <h6 className='font-medium text-gray-400'>Location</h6>
      <ul>
          <li className='py-2 text-sm'>10th Floor  ABC Place</li>
          <li className='py-2 text-sm'>Waiyaki way</li> 
          <li className='py-2 text-sm'>info@adamur.io</li>
          <li className='py-2 text-sm'>0000-00000-0000</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-gray-400'>Startup care</h6>
      <ul>
          <li className='py-2 text-sm'>About us</li>
          <li className='py-2 text-sm'>Programs</li>
          <li className='py-2 text-sm'>Portfolio</li>
          <li className='py-2 text-sm'>News</li>
          <li className='py-2 text-sm'>Contact Us</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-gray-400'>Services</h6>
      <ul>
          <li className='py-2 text-sm'>Product Mapping & Technical specification</li>
          <li className='py-2 text-sm'>UX and UI development</li>
          <li className='py-2 text-sm'>Minimum Viable Product(MVP) Development</li>
          <li className='py-2 text-sm'>Beta product Development</li>
          <li className='py-2 text-sm'>Web3 Development</li>
      </ul>
  </div>
 
    </div>
    </div>
      </div>

      
  );
}

export default Footer;