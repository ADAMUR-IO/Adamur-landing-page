import React from 'react'
import Component2 from '../../component/images/Component 2.png';
import Component5 from '../../component/images/Component 5.png';
import Component6 from '../../component/images/Component 6.png';

import './startup-care.styles.css';

function Startup() {
  return (
    <div>
      {/* start of parent div container */}
      <div class="container">
  <div class="content">
    <p className='purple-text'>Scaling Development</p>
    <p className='scale'>Helping you Scale your Web2 & 3 Development</p>
  </div>
  {/* start of child div container */}
  <div class="container-0">
  <div class="content-0">
  <div class="container-1">
    <div >
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
<p className='inspire'><strong>Bold</strong> * <span className='red-text'>Thinkers</span> * Doers *</p>

</div>
{/* end of parent div container */}
    </div>
  )
}

export default Startup;