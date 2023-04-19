import React, { useState } from 'react'
import { teamData } from '../team/teamData'
import {motion} from 'framer-motion';
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti'


const Team = () => {
  const transition =  { type: 'spring', duration: 4 };
  const  [selected, setSelected] = useState(0);
  const tLength = teamData.length;
  return (
    <div className="flex flex-col items-center justify-center md:gap-4 bg-gray-200 md:h-[35rem] h-120 m-1">
    <span className='md:cols-2 lg:cols-2 text-black text-center font-bold mt-5 text-3xl'>What our cohort says</span>

     <div className="flex flex-col items-center md:justify-evenly bg-black md:w-[58rem] h-96 mb-4 pb-2  rounded-lg">
      <div className='flex flex-col md:flex-row items-center md:gap-28 justify-center'>
     <div className="flex flex-col items-center justify-center md:gap-5 text-white w-96 px-4 md:pl-4">
     <span className="font-bold">
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

      <div className="md:-mt-24">
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
            <motion.img className='w-56 md:w-72 md:h-84'
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={teamData[selected].image} alt="" />
     
  </div>
  </div>
  <div className="flex cursor-pointer text-4xl items-center justify-center text-white gap-2 ">
    <TiArrowLeftOutline className='hover:text-[red]'
     onClick={() => {selected === 0 ? setSelected(tLength - 1 ):
                    setSelected((prev) => prev -1 );
                }}
       />
    <TiArrowRightOutline className='hover:text-[red]'
     onClick={() => {selected === tLength - 1 ? setSelected(0)
                    : setSelected((prev) => prev + 1 );
                }}
                
                />                
            </div>
  </div>
  
  </div>
  )
}

export default Team;

