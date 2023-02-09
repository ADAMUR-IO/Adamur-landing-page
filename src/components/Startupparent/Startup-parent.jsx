import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

const StartupParent = () => {
  return (
    <div className="startup">
      <div className='startup1'>
        <span className='what'>Let us take care of your startup tech needs!</span>
        <>
      <Link className='float-right lg:mr-12 lg:mt-20 text-white items-center text-2xl lg:text-3xl' to='/frame'><FaChevronRight/></Link>
  <Outlet />
      </>
      <p>We let you focus on building the business while we help you create an effective product that has the vision and impact you want it to have.</p> 
      
      <div className="cards">
<div className='card-1'><sup>01/</sup><sub>3</sub></div>
<div className='card-b'></div>
<div className='card-c'></div>
</div>
 </div>

    </div>
  )
}

export default StartupParent;
