import React from 'react'
import Dot from '../images/dot.png'
import { Puzzle1, Puzzle2, Puzzle3, Puzzle4 } from './Section-2';
import './section-2.css'

function Section() {
  return (

    <div className=' bg-black min-h-screen xl:h-fit'>
        
        <div className='text-white items-center justify-between p-2 xl:p-6'>

        <div className='flex space-x-4 justify-center xl:mb-20'>
                    
                    <div className='flex justify-center mt-12'>
                    <div className='bg-red-800 w-16 h-16  rounded z-10 ml-3 mt-2 scale-124  gap-2 xl:w-32 xl:h-32'></div>
                                    <div className='bg-red-500 rounded h-16 w-16 z-50 xl:w-32 xl:h-32'></div>
                    </div>
                    
                            <span className=' mt-8 font-medium text-sm xl:text-2xl'>We bring well trained and delivery ready product engineers</span>
                                    </div>
        <img className='ml-60 w-24 xl:w-56 xl:float-right xl:mr-4 ' src={Dot} alt="dots" />

                                    <div className='text-start xl:text-xl xl:ml-56 xl:w-96 xl:mt-16'>
                                    <p className='pb-6'>At Adamur we make work easier by</p>
                                    <span className='text-3xl xl:text-4xl'>Team work</span>
                                    <p className='pt-8 xl:pt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
                                    </div>
                                    <div className=' w-28 space-x-0 ml-32 gap-10 xl:w-40 xl:float-right xl:mr-80 '>
                                        <div className='container form-image'>
                                        <img  src={Puzzle1} alt="second" />
                                        <img src={Puzzle2} alt="third" />
                                        
                                        
                                        <img  src={Puzzle3} alt="first" />
                                        <img  src={Puzzle4} alt="forth" />
                                        </div>
                                        <p className='text-sm xl:text-lg'>Nothing great is made alone</p>
                                    </div>
                                    
                                    
                    
                                    <img className='mt-8 w-24 xl:ml-64 xl:mt-56 xl:w-56' src={Dot} alt="dots" />   
        </div>
                
    </div>
  )
}

export default Section;
