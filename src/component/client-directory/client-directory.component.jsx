import React, { useState } from 'react';
import './client-directory.styles.css';
import Star from '../../component/images/star.png';
import { clientData } from './clientData';
import leftArrow from '../images/Arrow/leftArrow.png';
import rightArrow from '../images/Arrow/rightArrow.png';
import {motion} from 'framer-motion';

const Client = () => {

  const transition =  { type: 'spring', duration: 3 };
  const  [selected, setSelected] = useState(0);
  const tLength = clientData.length;
  return (
    <div className="team-container">
     <div className='md:cols-2 lg:cols-2 text-white text-center font-bold '>TESTIMONIAL FROM SATISFIED CLIENTS</div>
     <div className="image-container">
     <div className="left-t">
            <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            >{clientData[selected].review}
            </motion.span>
            <span>
          <span>{clientData[selected].name}</span>{" "}
                - {clientData[selected].status}
            </span>
            </div>
            <div>

<div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
                  <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                     <img src={Star} alt="star" />
                     <img src={Star} alt="star" />
                   <img src={Star} alt="star" />
                 </div>
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
            src={clientData[selected].image} alt="" />
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
  </div>

  );
  
}

export default Client;

// export default Client;
// return (

//   <div className='directory  bg-black h-72 items-center'>
//     <div className='md:cols-2 lg:cols-2 text-white text-center font-bold '>TESTIMONIAL FROM SATISFIED CLIENTS</div>
//   <div className='directory-item-container flex md:cols-2 lg:cols-2 justify-between-2 justify-start gap-52 ml-5 bg-gradient-to-br Class
//   Properties
//   border-solid-1 
//   mt-4 mb-6'>
//     <div className='body flex md:cols-2 lg:cols-2 z-10'>
//     <div className='body-2'>
//     <div>
//       <img className='background-image' src={Component2} alt="cohort" />
//     </div>
//     <div className='client-description'>
//       <h2>Client 1</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
//       <div>
//               <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
//                 <img src={Star} alt="star" />
//                   <img src={Star} alt="star" />
//                   <img src={Star} alt="star" />
//                   <img src={Star} alt="star" />
//                 <img src={Star} alt="star" />
//               </div>
          
//       </div>
      
//       </div>
//       </div>
//        </div>

//        <div className='body flex md:cols-2 lg:cols-2 z-10'>
//       <div className='body-2'>
//     <div>
//       <img className='background-image' src={Component2} alt="cohort" />
//     </div>
//     <div className='client-description'>
//       <h2>Client 2</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
//       <div>
//               <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
//                   <img src={Star} alt="star" />
//                   <img src={Star} alt="star" />
//                   <img src={Star} alt="star" />
//                 <img src={Star} alt="star" />
//                <img src={Star} alt="star" />
//               </div>
//       </div>
    
//       </div>
//       </div>
//       </div>

//       <div className='body flex md:cols-2 lg:cols-2 z-10'>
//       <div className='body-2'>
//     <div>
//       <img className='background-image' src={Component2} alt="cohort" />
//     </div>
//     <div className='client-description'>
//       <h2>Client 3</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
//       <div>
//                           <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                           <img src={Star} alt="star" />
//                         </div>
                        
//       </div>
      
//       </div>
//       </div>


      
//     </div>
//     <div className='body flex md:cols-2 lg:cols-2 z-10'>
//       <div className='body-2'>
//     <div>
//       <img className='background-image' src={Component2} alt="cohort" />
//     </div>
//     <div className='client-description'>
//       <h2>Client 4</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
//       <div>
//                           <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                           <img src={Star} alt="star" />
//                         </div>
                        
//       </div>
      
//       </div>
//       </div>


      
//     </div>
//     <div className='body flex md:cols-2 lg:cols-2 z-10'>
//       <div className='body-2'>
//     <div>
//       <img className='background-image' src={Component2} alt="cohort" />
//     </div>
//     <div className='client-description'>
//       <h2>Client 5</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
//       <div>
//                           <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                             <img src={Star} alt="star" />
//                           <img src={Star} alt="star" />
//                         </div>
                        
//       </div>
      
//       </div>
//       </div>


      
//     </div>
    
//   </div>

//   </div>


// );