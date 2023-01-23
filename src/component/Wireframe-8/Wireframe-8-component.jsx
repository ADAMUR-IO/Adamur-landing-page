import React from 'react'
import Train from '../images/train.png';

const  Wireframe8 = () => {
  return (
    <div>
      <div className='text-white bg-black min-h-screen xl:h-fit w-fit'>
        
        <div className='text-white items-center justify-between p-2 xl:p-6'>

        <div className='flex space-x-4 justify-center xl:mb-20'>
                    
                    <div className='flex justify-center mt-12'>
                    <div className='bg-red-800 w-14 h-14  rounded z-10 ml-3 mt-2 scale-124  gap-2 xl:w-32 xl:h-32'></div>
                                    <div className='bg-red-500 rounded h-14 w-14 z-50 xl:w-32 xl:h-32'></div>
                    </div>
                    
                            <span className=' mt-8 text-sm xl:text-2xl'>We bring well trained and delivery ready product engineers</span>
                                    </div>
                                    <div className='flex justify-between'>

                                    <div className='text-start xl:ml-56 xl:w-96 xl:mt-16 py-8'>
                                    <p className='pb-2 text-2xl xl:text-4xl'>Welcome on</p>
                                    <span className='text-2xl xl:text-4xl'>Board</span>
                                    <p className='text-sm pt-8 xl:pt-16 xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
                                    </div>
                                    <img className='Train w-24 mr-8 h-16 animate-ping mt-8' src={Train} alt="Train" />
                                    </div>
                                    
       
        </div>
        <div className='w-full text-start pl-6 pt-8 text-2xl'>
                                    <span><span className='font-bolder' >Bold</span>  <span className='xl:p-4 p-2'>*</span> <span className='text-red-600'>Thinkers</span> <span className=' xl:p-4 p-2'>*</span> Doers <span className='xl:p-4 p-2'>*</span> </span>
                                    </div>
                
    </div>
    </div>
  )
}

export default Wireframe8;
