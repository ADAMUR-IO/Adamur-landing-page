import React from 'react'
import { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8 } from '../images';
import { motion } from 'framer-motion'




const Hero = () => {
  const transition =  { type: 'spring', duration: 8 };
  
 
 
  return (
    <div className="lg:h-[66rem] md:h-[46rem] h-[30rem] flex flex-col justify-start">  

     <div className="flex flex-col p-2 md:p-8 md:text-left ">
      <div className='flex flex-col text-3xl md:text-5xl'>
     <motion.span 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={transition}
     className='font-bold'>Shape your software</motion.span>

     <motion.span 
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={transition}
     className='flex gap-2 font-bold'>engineering<span className='font-light'>career</span></motion.span>

     <motion.span
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={transition}
      className='text-3xl md:text-5xl font-light'>with us!</motion.span>
    <div className='blur-1 md:w-40 md:h-24 w-20 h-16'></div>

    <span className='text-lg flex flex-col px-1 py-2'>At Adamur we inspire, shape and develop industry grade software <br/>engineers,let your career in tech soar to greater heights!</span>

      </div>


      </div>
<div>
      <div className="flex -skew-y-12 items-center justify-center mt-2 gap-2 px-1 md:px-6">
      <div className="items-center justify-center md:p-1 rounded-full flex-col  skew-y-12 bg-red-600">
        <img src={ Col1 } alt="" className='w-80'/>
        <img src={ Col2 } alt="" className='w-80'/>
      </div>    
    <div className="items-center justify-center md:p-1 rounded-full flex-col bg-blue-900 skew-y-12">
      <img src={ Col3 } alt="" className='w-80'/>
      <img src={ Col4 } alt="" className='w-80'/>
    </div>  
    <div className="items-center justify-center md:p-1 flex-col rounded-full skew-y-12 bg-red-300">
      <img src={ Col5 } alt="" className='w-80'/>
      <img src={ Col6 } alt="" className='w-80'/>
      </div>
    <div className="items-center justify-center md:p-1 rounded-full flex-col skew-y-12 bg-slate-50 ">
    <img src={ Col7 } alt="" className='w-80'/>
      <img src={ Col8 } alt="" className='w-80'/>
</div>
</div>
</div>
    </div>
  );
};

export default Hero;