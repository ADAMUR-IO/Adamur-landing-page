import React from 'react'
import Image1 from '../images/1.png'
import Image2 from '../images/2.png'
import Image3 from '../images/3.png'
import './startup-care.styles.css';

function Startup() {
  return (
    <div className='care text-center'>
    <p className=' text-red-600 text-center'>Scaling Development</p>
    <p className='text-center scale text-black'>Helping you Scale your Web2 & 3 Development</p>
  <div class=" flex md:cols-2 lg:cols-2 justify-between-2 justify-center mt-3 xl:mt-10">
    <div className='md:flex  lg:flex align-center gap-2 xl:gap-16 cols-1 grid justify-between ' >
    <img className='image' src={Image1} alt="" />
    <img className='image' src={Image2} alt="" />
    <img className='image' src={Image3} alt="" />
    </div>
    </div>
    
<p className='inspire mt-20 xl:mb-40 mb-10'><strong >Bold</strong>  <span className='xl:p-4'>*</span> <span className='text-c'>Thinkers</span> <span className=' xl:p-4'>*</span> Doers <span className='xl:p-4'>*</span> </p>


<div>
</div>
    </div>
      


  )
}

export default Startup;
