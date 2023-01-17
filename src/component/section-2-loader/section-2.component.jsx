import React from 'react';
import Clara from '../../component/images/Clara Ujiie.png';



const Section = () => {
  return (
    <div>
      <div className='xl: sm:cols-1 md:cols-2 lg:cols-2 flex '>
                <div className=' xl:w-5/12 sm:h-72 mt-20 mb-12 w-32 ml-1'>
                < img className='h-72 xl:h-80 xl:w-3/4 xl:ml-24' src={Clara} alt='Inspiration message' />

                </div>
                <div className='bg-black text-center text-white w-full xl:w-full xl:h-320 xl:mr-3'>
                              
                <div>
                  <p className=' font-bold text-sm text-left ml-4 xl:text-3xl xl:ml-16 xl:mt-10 xl:mb-4'>Preparing you for Industry delivery</p>
                </div>
                                <div className=' sm:cols-2 md:cols-2 lg:cols-2 ml-8 text-xs text-left mb-4 xl:text-base xl:ml-20 xl:mr-36 xl:mb-14'>
                <span>If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                                </div>
                                <div> 
                                <a href='/#'><span title='Good to have you join ADAMUR' className='link-join xl:text-xl xl:mb-8'>Join our next cohort</span></a>
                                </div>

                </div>


              </div>
    </div>
  );
}

export default Section;