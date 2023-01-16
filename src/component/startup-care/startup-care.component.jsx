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
      {/* start of parent div container */}
      <div class="container">
  <div class="content">
    <p className='purple-text text-red-600 text-center'>Scaling Development</p>
    <p className='scale text-black'>Helping you Scale your Web2 & 3 Development</p>
  </div>
  {/* start of child div container */}
  <div class="container-0">
  <div class="content-0">
  <div class="container-1 flex md:cols-2 lg:cols-2 justify-between-2 justify-start ml-10">
    <div className='md:flex lg:flex align-center gap-2 cols-1 grid justify-between ' >
    <img className='image' src={Component2} alt="image1" />
    <img className='image' src={Component6} alt="image1" />
    <img className='image' src={Component5} alt="image1" />
    </div>

  <div class="content-1">
    
  </div>
</div>
    
  </div>
</div>
{/* end of child div container */}
<p className='inspire md:cols-2 lg:cols-2 ml-1 text-lg'><strong>Bold</strong> * <span className='red-text md:cols-2 lg:cols-2 text-rose-600'>Thinkers</span> * Doers *</p>

</div>
{/* end of parent div container */}
    <Client />
    <Logo />
    </div>
      


  )
}

export default Startup;