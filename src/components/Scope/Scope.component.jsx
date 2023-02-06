import React from 'react'

const Scope = () => {
  return (
    <div className='flex justify-center text-white p-2 text-lg space-x-2 lg:space-x-24 lg:p-16'>
      
        <div className='bg-zinc-800 text-center w-32 p-5 lg:w-72 lg:h-44 lg:p-14 sm:w-44'>
        <span className='f-bolder text-xl '>100+</span>
      <div><span>Projects done</span></div>
      </div>
        <div className='bg-zinc-800 text-center w-32 p-5 lg:w-72 lg:h-44 lg:p-14 sm:w-44'>
        <span className='f-bolder text-xl'>20+</span>
      <div><span>Patners</span></div>
      </div>
    
        <div className='bg-zinc-800 text-center w-32 p-5 mr-4 lg:w-72 lg:h-44 lg:p-14 sm:w-44'>
      <span className='f-bolder text-xl'>100+</span>
      <div className='inline-start'><span>Satisfied clients</span></div>
      </div>

    </div>
  )
}

export default Scope;
