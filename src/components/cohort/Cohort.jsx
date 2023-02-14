import React from 'react'
import Values from '../Values/Values.component';
import Scope from '../Scope/Scope.component'
import Adamur from '../Y-adamur/Y-admur.component';
import Footer from '../common/footer/Footer'
import Navbar from '../navbar/Navbar'
const AboutUs = () => {
  return (
    <div>
      <Navbar/>
        <div className='bg-black text-white pt-3 pl-1 items-center justify-center min-w-full lg:p-10'>
            
            <div className='text-xs  text-red-600  text-center pt-1 lg:text-3xl'>
            <span>About Us</span>
            </div>
<div className='justify-center items-center p-6 lg:p-24 lg:ml-12 text-center'>
            <span className='text-2xl w-full font-extrabold text-center mt-10 ml-2 lg:text-6xl'>Our Philosophy is Simple...</span>
            <div className='pt-4 text-sm pl-7 w-72 lg:text-2xl lg:w-9/12 lg:pl-8 sm:ml-36 text-left'>
            {/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. </span> */}
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