import React, { useState } from 'react'
import './team.css';
import { teamData } from './teamData';
import { leftArrow, rightArrow } from '../images';
import {motion} from 'framer-motion';


const Team = () => {
  const transition =  { type: 'spring', duration: 3 };
  const  [selected, setSelected] = useState(0);
  const tLength = teamData.length;
  return (
  
    <div className="team-container">
     <p className='first'>What our cohort says</p>
     <div className="image-container">
     <div className="left-t">
            <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            >{teamData[selected].review}
            </motion.span>
            <span>
          <span>{teamData[selected].name}</span>{" "}
                - {teamData[selected].status}
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
            src={teamData[selected].image} alt="" />
      <div className="arrows">
    <img  onClick={() => {selected=== 0 ? setSelected(tLength - 1 ):
                    setSelected((prev) => prev -1 );
                }}
      src={leftArrow} alt="" />
    <img onClick={() => {selected === tLength - 1 ? setSelected(0)
                    : setSelected((prev) => prev + 1 );
                }}
                src={rightArrow} alt="" />                
            </div>
  </div>
  </div>
  <span className='link'> 
  <a href="https://habaapp.com/#contact us" target="blank">
     Haba App
     </a>
      </span>
  </div>
  )
}

export default Team;