import React from 'react';
import './Logo.component.css';
import Haba from '../images/haba-logo.png';
import Boop from '../images/boop-logo.png';


const Logo = () => {

  return (
    <div>
      <div className='section-3-container'>
      <div className="logo-blur"></div>
                        <div>
                          <span className='chohort-portf'>Meet Our Cohorts Portfolio</span>
                            <br />
                          {/* <span className='bold-t'>Some of the startups our cohort are working with</span> */}
                          <h4 className='bold-text p-2 text-center xl:text-3xl'>Some of the startups our cohort are working with</h4>

                        </div>
              
                            <div className='logo-haba flex md:cols-2 lg:cols-2 justify-between-5 justify-center'>
                              <img src={Haba} alt="Haba logo" />
                              <img src={Boop} alt="Boop-logo" />
                            </div>
                      </div>{/* end of section-3-container div */}
    </div>
  )
}

export default Logo;



