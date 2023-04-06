import React from 'react'
import './loader-page.styles.css';
import Cool from '../images/cool.png';
import Logo from '../Logo/Logo.component';
import Section from '../section-2-loader/section-2.component';
import Team from '../team/Team'
import News from '../news/News'

import Footer from '../common/footer/Footer'
import Section4 from '../section4/Section4';



const Loader = () => {
    return (
      <div className='body-container'> {/* start of parent div */}
            <div className='loader-container'>
              <div className='text-m'>
                <span className='flex gap-2 text-center justify-center xl:justify-evenly'><strong >Bold</strong> <span className=''>*</span> <span className='text-c'>Thinkers</span> <span className=' '>*</span> Doers <span className=''>*</span> </span>

              </div>
              
              <div className='flex items-center justify-evenly'>
                <span className='inspire-1 w-1/2'>Inspiring the next gen tech talent</span>
                <br></br>
                {/* <div className='inspire-2'>
                <span >If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                </div> */}
                <div className='box-container1 animate-bounce '>
                < img  src={Cool} alt='Beautiful analytics to grow' />
                </div>
                </div>

              </div>
        <div>
         <Section />        
        <Logo />
        <Section4 /> 
        </div>

                        <div>
                        <Team />
                        </div>

                        <div className='footer-container'>{/* start of footer div */}
                              <div>
                              <h1 className='footer-title text-center justify-center '>Let's Talk * Ready to join our next cohort?</h1>
                              </div>
                              <div><News /></div>
<div><Footer /></div>
                        </div>{/* end of footer div */}


              {/* end of parent div */}
              </div> 
      );
    }

export default Loader;
