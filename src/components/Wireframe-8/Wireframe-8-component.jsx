import React from 'react'
import Train from '../images/train.png';
import './wireframe-8.css'

const  Wireframe8 = () => {
  return (
    <div>
      <div className='text-white bg-black min-h-screen xl:h-fit w-fit xl:w-screen'>
        
        <div className='text-white items-center justify-between p-2 xl:p-6'>

        <div className='flex space-x-4 justify-center'>
                    
                    <div className='flex justify-center mt-2'>
                    <div className='bg-red-800 w-14 h-14  rounded z-20 ml-1 mt-2 scale-124  gap-2 xl:w-28 xl:h-28'></div>
                                    <div className='bg-red-500 rounded h-14 w-14 z-50 xl:w-28 xl:h-28'></div>
                    </div>
                    
                            <span className=' mt-2 text-sm xl:text-2xl'>We bring well trained and delivery ready product engineers</span>
                                    </div>
                                    <div className='flex justify-between'>

                                    <div className='text-start xl:ml-36 xl:w-96 xl:mt-16 py-8 xl:py-1'>
                                    <p className='pb-2 text-2xl xl:text-5xl'>Welcome on</p>
                                    <span className='text-2xl xl:text-5xl'>Board</span>
                                    <p className='text-sm pt-8 xl:pt-16 xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.</p>
                                    </div>
                                    <div>
 <img src={Train} alt="Train" className='move-right md:mt-8 lg: mt-32' />
</div>
                                    </div>
                                    
       
        </div>
        <div className='w-full text-start pl-6 pt-8 text-2xl xl:text-7xl xl:pl-32 xl:mb-8'>
                                    <span><span className='font-bolder'>Bold</span>  <span className='xl:p-6 p-2'>*</span> <span className='text-red-600'>Thinkers</span> <span className=' xl:p-6 p-2'>*</span> Doers <span className='xl:p-6 p-2'>*</span> </span>
                                    </div>
                
    </div>
    </div>
  )
}

export default Wireframe8;
