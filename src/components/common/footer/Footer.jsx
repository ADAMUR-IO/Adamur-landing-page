import React from 'react';
import Logo from '../../images/flogo.png';
import BgImage from '../../images/background.png'
import WhatsAppButton from '../../../assets/whatsapp/WhatsApp'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import {
    FaInstagram,
    FaFacebookSquare,
    FaLinkedin,
    FaTwitterSquare,
  } from 'react-icons/fa';
function Footer() {
    const email = 'info@adamur.io';
    const subject = 'Hello';
    const body = 'Hi there!';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      };

  return (

<div className="bg-fixed items-center justify-center" style={{backgroundImage: `url(${BgImage})`}}>
  <div className='footer m-1 p-1 '>
         <div className=' ml-4 text-center ml-88 justify-end mr-32 mt-4 gap-16 flex sm:flex items-center '>
            <h6 className='font-medium text-gray-400  lg:mt-4 md:mt-4 lg:mb-2 md:mb-2'>Ready to join our next cohort?</h6>
            <WhatsAppButton />
        </div>

     <div className='grid lg:cols-2 md:col-span-1 md:cols-2 gap-8 lg:flex md:flex items-center justify-center pt-1'>
            <div className=' pt-1 md:ml-16 lg:ml-16  grid lg:flex-cols-2  mt-1 '>
                <img src= { Logo } alt="" className='flogo w-44 mt-2 ' />
                <p className='py-2  text-gray-400'>With each project <br/>We strengthen the brand identity <br/> of organizations.</p>
                <div className='flex justify-between md:w-[70%] p-4 pt-1 text-white md:gap-1 lg:gap-2'>
               <a href="https://instagram.com/adamurtribe?igshid=YmMyMTA2M2Y=">
               <FaInstagram size={30} className="hover:text-orange-700" /> 
               </a>
                <a href="https://www.facebook.com/adamurtribe">
                <FaFacebookSquare size={30} className="hover:text-blue-900"/>
                </a>
                <a href="https://twitter.com/ADAMUR_R">
                <FaTwitterSquare size={30} className="hover:text-blue-900"/>
                </a> 
                <a href="https://www.linkedin.com/company/adamurr/">
                <FaLinkedin size={30} className="hover:text-blue-900"/>
                </a> 
                 
                </div>
            </div>
           

                <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2 '>
                    <h6 className='font-medium text-white'>Location</h6>
                    <ul className='pt-4 text-gray-400'>
                        <li className='py-2 text-sm'>10th Floor  ABC Place</li>
                        <li className='py-2 text-sm'>Waiyaki way</li>
                        <button className='py-2 text-sm hover:text-[red]'
                         onClick={handleEmailClick}>info@adamur.io</button> 
                        <div className='flex items-center gap-2'>
                            <FiPhoneCall />
                        <a href='tel:0794658105' className='py-2 text-sm hover:text-blue-600'>+2547 9465 8105</a>
                        </div>
                    </ul>
                </div>

                    <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2'>
                        <h6 className='font-medium text-white'>Startup care</h6>
                        <ul className='pt-4  text-gray-400'>
                            <Link 
                            to='/'
                            span={true}
                            smooth={true}
                            className='py-2 text-sm hover:text-[red]'>About us</Link>
                            <li className='py-2 text-sm'>Programs</li>
                            <li className='py-2 text-sm'>Portfolio</li>
                            <li className='py-2 text-sm'>News</li>
                            <Link 
                            to='privacy'
                            span={true}
                            smooth={true} 
                            className='py-2 text-sm hover:text-[red]'>Privacy Policy</Link>
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