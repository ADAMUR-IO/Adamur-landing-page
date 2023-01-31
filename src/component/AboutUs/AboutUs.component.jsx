import React from 'react'
import Values from '../Values/Values.component';
import Scope from '../Scope/Scope.component'
import Adamur from '../Y-adamur/Y-admur.component';
import Footer from '../common/footer/Footer'
import adamur from '../images/Group 36687.png';
const AboutUs = () => {
  return (
    <div>
        <div className='bg-black text-white pt-3 pl-1 items-center justify-center min-w-full lg:p-10'>
            <div className='flex space-x-2 lg:space-x-32'>
                <img className='w-24 lg:w-auto' src={adamur} alt="Adamur aLogo" />
                <div className='flex-col space-x-1 text-sm lg:text-3xl lg:space-x-10'>
                <span>Programs</span>
                <span>Cohorts</span>
                <span>StartupCare</span>
                <span>News</span>
                </div>

            </div>
            <div className='text-xs  text-red-600  text-center pt-8 lg:text-3xl'>
            <span>About Us</span>
            </div>
<div className='justify-center items-center p-8 lg:p-32'>
            <span className='text-xl w-full font-extrabold text-center mt-10 lg:text-7xl'>Our Philosophy is Simple...</span>
            <div className='pt-4 text-sm pl-7 w-52 lg:text-2xl lg:w-9/12 lg:pl-32'>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. </span>
            </div>
            </div>

        </div>
        <div>
          <Scope />
          <Values />
          <Adamur />
          <Footer />
        </div>
      
    </div>
  )
}

export default AboutUs;
