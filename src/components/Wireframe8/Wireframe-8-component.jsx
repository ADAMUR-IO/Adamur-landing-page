import React from 'react'
import Train from '../images/train.png';
import {Outlet, Link} from 'react-router-dom'
import './wireframe-8.css'
import Navbar from '../navbar/Navbar'

import Startup from '../startup-care/startup-care.component'
import Startups from '../startup/Startups'

import Cards from '../cards/Cards'
import Logo from '../Logo/Logo.component'
import Footer from '../common/footer/Footer'
import { FaChevronLeft } from "react-icons/fa";


const  Wireframe8 = () => {
  return (
    <div>
<Navbar/>
      <div className='text-white bg-black '>
        
        <div className='text-white items-center justify-between p-2 xl:p-4 sm:p-4'>

        <div className='flex xl:space-x-0 space-x-4 justify-center'>
                    
                    <div className='flex justify-center mt-2'>
                    <div className='z-50'><div className='bg-pink-900 rounded  h-12 w-12 xl:w-20 xl:h-20 ml-2 mt-2 sm:ml-0'></div></div>
                    <div className='bg-right'><div className='bg-pink-700 w-12 h-12  rounded  xl:w-20 xl:h-20 xl:mr-20'></div></div>
                    
                                    
                    </div>
                    
                            <span className=' mt-2 text-sm xl:text-2xl'>We bring well trained and delivery ready product engineers</span>
                                    </div>
                                    <div className='flex justify-between'>
                                    <div>
<Link className='float-left mt-44 mr-2 lg:mt-32 text-white items-center  text-2xl lg:text-3xl' to='/pages'><FaChevronLeft/></Link>

  <Outlet />
</div>
                                    <div className='text-start xl:ml-24 xl:w-96 xl:mt-16 py-8 xl:py-1 sm:w-80'>
                                    <p className='pb-2 text-2xl xl:text-5xl'>Welcome on</p>
                                    <span className='text-2xl xl:text-5xl'>Board</span>
                                    
                                    {/* <p className='text-sm pt-8 xl:pt-16 xl:text-xl sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p> */}
                                    </div>
                                    <div>
 <img src={Train} alt="Train" className='move-right md:mt-8 lg: mt-32 sm:mt-24' />
</div>

                                    </div>
                                    
       
        </div>
        <div className="startup">
        <div className="cards">
<div className='card-1'><sup>02/</sup><sub>3</sub></div>
<div className='card-b'></div>
<div className='card-c'></div>
</div>
</div>
        <div className='w-full text-start pl-6 pt-8 text-2xl xl:text-8xl xl:pl-20 sm:text-5xl'>
                                    <span><span className='font-bolder'>Bold</span>  <span className='xl:p-6 p-2'>*</span> <span className='text-red-600'>Thinkers</span> <span className=' xl:p-6 p-2'>*</span> Doers <span className='xl:p-6 p-2'>*</span> </span>
                                    </div>
                
    </div>
    <Startups />
     <Startup /> 
     <Cards />
     <Logo />
     <Footer />
    </div>
  )
}

export default Wireframe8;
