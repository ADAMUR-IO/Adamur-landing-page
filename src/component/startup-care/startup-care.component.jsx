import React from 'react'
import Component2 from '../../component/images/Component 2.png';
import Component5 from '../../component/images/Component 5.png';
import Component6 from '../../component/images/Component 6.png';
import Client from '../../component/client-directory/client-directory.component';
import Logo from '../Logo/Logo.component';

import './startup-care.styles.css';

function Startup() {
  return (
    <div>
    <p className=' text-red-600 text-center'>Scaling Development</p>
    <p className='text-center scale text-black'>Helping you Scale your Web2 & 3 Development</p>
  {/* start of child div container */}
  <div class=" flex md:cols-2 lg:cols-2 justify-between-2 justify-center mt-3 xl:mt-10">
    <div className='md:flex  lg:flex align-center gap-2 xl:gap-16 cols-1 grid justify-between ' >
    <img className='image' src={Component2} alt="image1" />
    <img className='image' src={Component6} alt="image1" />
    <img className='image' src={Component5} alt="image1" />
    </div>
    </div>
    
{/* end of child div container */}
<p className='inspire mt-20 xl:mb-40 mb-10'><strong >Bold</strong>  <span className='xl:p-4'>*</span> <span className='text-c'>Thinkers</span> <span className=' xl:p-4'>*</span> Doers <span className='xl:p-4'>*</span> </p>


<div>
    <Client />
    <Logo />
</div>
    </div>
      


  )
}

export default Startup;