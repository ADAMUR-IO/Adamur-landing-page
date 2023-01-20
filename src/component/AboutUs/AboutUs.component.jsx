import React from 'react'
import Adamur from '../images/Group 36687.png';
const AboutUs = () => {
  return (
    <div>
        <div className='bg-black text-white p-2'>
            <div className='flex space-x-3 w-1/2'>
                <img  className='' src={Adamur} alt="Adamur aLogo" />
                <div className='flex space-x-1'>
                <span>Programs</span>
                <span>Cohorts</span>
                <span>StartupCare</span>
                <span>News</span>
                </div>

            </div>
            <span className='text-base text-#E20044  text-center'>About Us</span>

            <span className='text-#FFFFFF font-extrabold text-center mt-8'>Our Philosophy is Simple...</span>
            <span className='p-32  mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. </span>

        </div>
      
    </div>
  )
}

export default AboutUs;
