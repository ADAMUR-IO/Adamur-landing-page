import React from 'react';
import Clara from '../images/Clara Ujiie.png';
import './section-2-loader.css';


const Section = () => {
  return (
    <div>
      <div className=' sm:cols-1 md:cols-2 lg:cols-2 lg:flex xl:flex justify-center'>
                <div className=' xl:w-5/12 sm:h-72  mb-12  ml-1'>
                  <h1 className='xl:text-base text-center mt-2 xl:ml-32 h-10 xl:mt-8' >We help You</h1>
                < img className='think item-center xl:h-96  xl:w-screen  xl:ml-24 w-3/4 ml-12 xl:mt-8' src={Clara} alt='Inspiration message' />

                </div>
                <div className='bg-black text-center text-white w-3/4 ml-11 xl:w-2/4 xl:ml-20 xl:h-screen z-20 h-fit'>
                              
                <div>
                  <p className=' font-bold text-lg text-left ml-4 xl:text-5xl xl:ml-16 xl:mt-10 xl:mb-4'>Preparing you for Industry delivery</p>
                </div>
                                <div className=' sm:cols-2 md:cols-2 lg:cols-2 ml-6 text-xs text-left mb-4 xl:text-base xl:ml-20 xl:mr-36 xl:mb-14 mr-10'>
                <span>If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                                </div>
                                <div> 
                                <a href='/#'><span title='Good to have you join ADAMUR' className='link-join xl:text-xl mb-8 xl:mb-16 mr-10 text-xl'>Join our next cohort</span></a>
                                </div>

                </div>


              </div>
    </div>
  );
}

export default Section;