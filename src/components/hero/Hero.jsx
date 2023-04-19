import './hero.css';
import { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8 } from '../images';
import { motion } from 'framer-motion'




const Hero = () => {
  const transition =  { type: 'spring', duration: 5 };
  
 
 
  return (
    <div className="hero items-center justify-center">  

<div className="your md:pl-8 md:pt-12 md:mt-2 md:mb-2 w-full sm:w-2/3 flex flex-col space-y-4">
     <motion.span 
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={transition}
     className='md:text-6xl text-4xl font-bold'>Shape your software</motion.span>
     <motion.span 
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 3000 }}
      transition={transition}
     className='flex gap-2 text-4xl md:text-6xl font-bold'>engineering<span className='text-3xl md:text-6xl font-light'>career</span></motion.span>
     <motion.span
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400 }}
      transition={transition}
      className='text-3xl md:text-5xl font-light'>with us!</motion.span>
    <div></div>
      <motion.span 
       initial={{ opacity: 0, y: -300 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: 3000 }}
       transition={transition}
      className='-mt-4 ml-2'>At Adamur we inspire, shape and develop industry grade software <br/>engineers,let your career in tech soar to greater heights!</motion.span>
      </div>
<motion.div
 initial={{ opacity: 0, x: 100 }}
 animate={{ opacity: 1, x: 0 }}
 transition={transition}
>
      <div className="flex -skew-y-12 items-center justify-center mt-2 gap-2 px-2 md:px-8">
      <div className="items-center justify-center md:p-1 rounded-full flex-col  skew-y-12 bg-red-600">
        <img src={ Col1 } alt="" />
        <img src={ Col2 } alt="" />
      </div>    
    <div className="items-center justify-center md:p-1 rounded-full flex-col bg-blue-900 skew-y-12">
      <img src={ Col3 } alt="" />
      <img src={ Col4 } alt="" />
    </div>  
    <div className="items-center justify-center md:p-1 flex-col rounded-full skew-y-12 bg-red-300">
      <img src={ Col5 } alt="" />
      <img src={ Col6 } alt="" />
      </div>
    <div className="items-center justify-center md:p-1 rounded-full flex-col skew-y-12 bg-slate-50 ">
    <img src={ Col7 } alt="" />
      <img src={ Col8 } alt="" />
</div>
</div>
</motion.div>
    </div>
  );
};

export default Hero;