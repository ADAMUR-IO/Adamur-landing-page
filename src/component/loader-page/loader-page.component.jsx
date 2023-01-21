import React from 'react'
import './loader-page.styles.css';
import Cool from '../../component/images/cool.png';
import Logo from '../Logo/Logo.component';
import Section from '../section-2-loader/section-2.component';
import Cohort from '../../component/cohort-directory/cohort-directory.component';
import Desktop from '../../component/images/Desktop - 1.png';

import Footer from '../common/footer/Footer'



const Loader = () => {
    return (
      <div className='body-container'> {/* start of parent div */}
            <div className='loader-container'>
              <div className='text-m'>
                <span><strong >Bold</strong>  <span className='xl:p-4'>*</span> <span className='text-c'>Thinkers</span> <span className=' xl:p-4'>*</span> Doers <span className='xl:p-4'>*</span> </span>

              </div>
              
              <div className='box-container'>
                <span className='inspire-1'>Inspiring the next gen tech talent</span>
                <br></br>
                <div className='inspire-2'>
                <span >If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                </div>
                </div>
                <div className='box-container1 animate-bounce '>
                < img  src={Cool} alt='Beautiful analytics to grow' />
                </div>
              </div>
        <div>
        <Section />        
        <Logo />
        </div>

                      
                        <div className='section-4-container'> {/* start of section-4-container div */}
                        <div className='section-4-container-0'>
                        <div className='section-4-container-1'>
                              <div className='section-4-container-2'>
                        <div className='text-delivery-1'>
                  <p>Product design, UX & UI</p>
                </div>
                            </div>
                        <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                        <div className='section-4-container-2-link'>
                        <div> 
                                <a href='/#'><span title='Good to have you join ADAMUR' className='link-join xl:text-xl xl:mb-8'>Apply for our next cohort</span></a>
                                </div>
                          </div>
                        </div>
                        </div>
                        <div className='section-4-box-container'>
                          < img src={Desktop} alt='Beautiful analytics to grow' />
                        </div>
                        
                        </div>{/* end of section-4-container div */}
                        <div>
                        <Cohort />
                        </div>

                        <div className='footer-container'>{/* start of footer div */}
                              <div>
                              <h1 className='footer-title'>Let's Talk * Ready to join our next cohort?</h1>
                              </div>
<div><Footer /></div>
                        </div>{/* end of footer div */}


              {/* end of parent div */}
              </div> 
      );
    }

export default Loader;
