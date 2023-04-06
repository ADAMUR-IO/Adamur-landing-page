import React, { useState } from 'react'
import './team.css';
import { teamData } from '../team/teamData'
import  leftArrow  from '../images/leftArrow/leftArrow.png';
import rightArrow  from '../images/rightArrow/rightArrow.png';
import {motion} from 'framer-motion';


const Team = () => {
  const transition =  { type: 'spring', duration: 4 };
  const  [selected, setSelected] = useState(0);
  const tLength = teamData.length;
  return (
    <div className="team-container">
    <span className='md:cols-2 lg:cols-2 text-black text-center font-bold mt-5 text-3xl'>What our cohort says</span>

     <div className="image-container">
     <div className="left-t mb-24">
     <span className="">
          <span>{teamData[selected].name}</span>{" "}
                - {teamData[selected].status}
            </span>
            <motion.span 
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            >{teamData[selected].review}
            </motion.span>
            
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
            src={teamData[selected].image} alt="" />
      <div className="arrows">
    <img  onClick={() => {selected === 0 ? setSelected(tLength - 1 ):
                    setSelected((prev) => prev -1 );
                }}
                src={leftArrow} alt=""
       />
    <img onClick={() => {selected === tLength - 1 ? setSelected(0)
                    : setSelected((prev) => prev + 1 );
                }}
                
                 src={rightArrow} alt="" />                
            </div>
  </div>
  </div>
  
  </div>
  )
}

export default Team;

