import React, { useState } from 'react';
import './cohort-directory.styles.css';
import { clientData } from './cohortData';
import leftArrow from '../images/leftArrow/leftArrow.png';
import rightArrow from '../images/rightArrow/rightArrow.png';
import {motion} from 'framer-motion';

const Cohort = () => {

  const transition =  { type: 'spring', duration: 3 };
  const  [selected, setSelected] = useState(0);
  const tLength = clientData.length;
  return (
    <div className="team-container">
     <div className='md:cols-2 lg:cols-2 text-black text-center font-bold mt-40 text-3xl'>What our cohort says</div>
     <div className="main-description flex  mt-12 bg-black item-center xl:ml-40 xl:mr-40 mr-56 ml-2 rounded-md text-center ">
     <div className="description xl:item-center xl:w-56 flex  mt-8 inline-start xl:justify-center xl:ml-4 text-white xl:text-lg text-sm text-center">
            <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            >{clientData[selected].review}
            </motion.span>
            <span>
          <span className='font-extrabold text-center justify-center text-lg flex'>{clientData[selected].name}</span>{" "}
                 {clientData[selected].status}
            </span>
            </div>
      <div className="right-t">
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            ></motion.div>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            ></motion.div>
            <motion.img 
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={clientData[selected].image} alt="images" />

       <div className="arrows">
                <img
                onClick={() => {
                    selected=== 0 ? setSelected(tLength - 1 ):
                    setSelected((prev) => prev -1 );
                }}
                src={leftArrow} alt="" />
                <img 
                onClick={() => {
                    selected === tLength - 1 ? setSelected(0)
                    : setSelected((prev) => prev + 1 );
                }}
                src={rightArrow} alt="arrow" />                
            </div>
  </div>
  </div>
  <div>
</div>
  </div>

  );
  
}

export default Cohort;

