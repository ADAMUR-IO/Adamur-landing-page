import React from 'react';
import Clara from '../images/Clara Ujiie.png';
import './section-2-loader.css';


const Section = () => {
  return (
    <div className="overflow-x-hidden right-0">
    <div className='flex flex-col md:flex w-screen items-center justify-center '>
      <div className='section2 w-screen flex items-center justify-center'>
                <div className='items-center justify-center flex flex-col '>
                  <h1 className=' text-center mt-2' >We help You</h1>
                < img className='w-[28rem] clara  ' src={Clara} alt='Inspiration message' />

                </div>
                <div className='bg-black text-center text-white lg:w-[52rem] right-0'>
                              
                <div>
                  <span className='font-bold text-lg text-center lg:text-5xl lg:ml-16 lg:mt-10 lg:mb-4'>Preparing you for Industry delivery</span>
                </div>
                                <div className=' sm:cols-2 md:cols-2 lg:cols-2 ml-6 text-xs text-left mb-4 xl:text-base '>
                {/* <span>If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transcending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span> */}
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                                </div>
                                <div> 
                                <a href='/https://forms.gle/kHYC6wT26tRu9bF7A'><span title='Good to have you join ADAMUR' className='link-join xl:text-xl mb-8 xl:mb-16 mr-10 text-xl' style={{padding:'6px'}}>Join our next cohort</span></a>
                                </div>

                </div>


              </div>
    </div>
    </div>
  );
}

export default Section;