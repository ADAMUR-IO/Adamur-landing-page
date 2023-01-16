import React from 'react';
import Clara from '../../component/images/Clara Ujiie.png';
import './section-2-component.css';


const Section = () => {
  return (
    <div>
      <div className='xl: sm:cols-1 md:cols-2 lg:cols-2 flex '>
                <div className='xl:ml-32 xl:w-5/12 sm:h-72 mt-8 mb-8 w-40 ml-2 h-1/2 xl:h-1/2'>
                < img className='h-96 xl:w-full' src={Clara} alt='Inspiration message' />

                </div>
                <div className='bg-black text-center text-white w-80 xl:w-2/4 xl:h-320 '>
                              
                <div>
                  <p className=' font-bold text-sm text-left ml-4 xl:text-3xl xl:ml-10 xl:mt-10 xl:mb-4'>Preparing you for Industry delivery</p>
                </div>
                                <div className=' sm:cols-2 md:cols-2 lg:cols-2 ml-8 text-xs text-left mb-4 xl:text-base xl:ml-14 xl:mr-14xl:mb-14'>
                <span>If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                                </div>
                                <div> 
                                <a href='#'><span title='Good to have you join ADAMUR' className='link-join xl:text-xl xl:mb-8'>Join our next cohort</span></a>
                                </div>

                </div>


              </div>
    </div>
  );
}

export default Section;