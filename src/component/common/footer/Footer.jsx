import React from 'react';
import Logo from '../../images/flogo.png';
import BgImage from '../../images/cover.png';
import {
    FaInstagram,
    FaFacebookSquare,
    FaYoutube,
    FaTwitterSquare,
  } from 'react-icons/fa';
  import { FaWhatsapp } from 'react-icons/fa'
function Footer() {
  return (

<div class="bg-fixed" style={{backgroundImage: `url(${BgImage})`}}>
  <div className='footer m-1 p-1 '>
         <div className=' ml-4 text-center ml-88 justify-end mr-36 mt-4 gap-20 flex sm:flex items-center 2'>
            <h6 className='font-medium text-gray-400  lg:mt-4 md:mt-4 lg:mb-2 md:mb-2'>Ready to join our next cohort?</h6>
            <button className='bg-green-600 py-2 px-4 rounded w-56 h-12 flex'><FaWhatsapp size={30} class='ml-2 text-white '/><h2 className=' text-center text-sm md:text-lg lg:text-lg ml-2 text-white '>Whatsapp Us</h2></button>
        </div>

     <div className='  grid lg:cols-2 md:col-span-1 md:cols-2 gap-8 lg:flex space-x-20 md:flex  md:ml-4p0 lg:ml-24 m  pt-1'>
            <div className=' pt-1 md:ml-20 lg:ml-20  grid lg:flex-cols-2  mt-1 '>
                <img src= { Logo } alt="" className='flogo w-44 mt-2 ' />
                <p className='py-2  text-gray-400'>Lorem, ipsum dolor sit amet consectetur <br/> adipisicing elit. Id odit ullam iste repellat <br/>consequatur libero reiciendis, blanditiis accusantium.</p>
                <div className='flex justify-between md:w-[70%] p-4 pt-1 text-white md:gap-1 lg:gap-2'>
                    <FaInstagram size={30} />
                    <FaFacebookSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaYoutube size={30} />
                 
                </div>
            </div>
           

                <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2 '>
                    <h6 className='font-medium text-white '>Location</h6>
                    <ul className='pt-4 text-gray-400'>
                        <li className='py-2 text-sm'>10th Floor  ABC Place</li>
                        <li className='py-2 text-sm'>Waiyaki way</li> 
                        <li className='py-2 text-sm'>info@adamur.io</li>
                        <li className='py-2 text-sm'>0000-00000-0000</li>
                    </ul>
                </div>

                    <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2'>
                        <h6 className='font-medium text-white'>Startup care</h6>
                        <ul className='pt-4  text-gray-400'>
                            <li className='py-2 text-sm'>About us</li>
                            <li className='py-2 text-sm'>Programs</li>
                            <li className='py-2 text-sm'>Portfolio</li>
                            <li className='py-2 text-sm'>News</li>
                            <li className='py-2 text-sm'>Contact Us</li>
                        </ul>
                    </div>

                        <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2 '>
                            <h6 className='font-medium text-white'>Services</h6>
                            <ul className='pt-4  text-gray-400'>
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