import React from 'react'
import Stars from '../images/stars.png'
import BackGround from '../images/client.png'


const Cards = () => {
  return (

   <div className="cards flex items-center justify-center">
   <div style={{backgroundImage: `url(${BackGround})`}} className="client w-full pb-8 bg-gray-700  text-white">
      <h5 className='text-red-500 text-center md:text-2xl md:mt-12 mb-4'>Are our clients happy?</h5>
      <h2 className='text-3xl ml-4 w-92 mx-auto leading-normal font-bold text-center '>
       TESTIMONIAL FROM SATISFIED CLIENTS
      </h2>

          {/* cards */}
      <div className="flex flex-wrap justify-center">
        <div className='flex-col bg-gray-600 rounded-lg shadow-md w-full m-6 sm:w-52'>
        <img src="" alt="" className='h-20 m-6 mx-auto' />
        <h4 className='uppercase text-center font-bold'>Jackson</h4>
        <p className='text-center px-2'>
          
        </p>
        <img src= { Stars } alt="" className='mx-auto p-4' />
        </div>

        <div className='flex-col bg-gray-600 rounded-lg shadow-md w-full m-6 sm:w-52'>
        <img src="" alt="" className='h-20 m-6 mx-auto' />
        <h4 className='uppercase text-center font-bold'>Wendy</h4>
        <p className='text-center px-2'>
           
        </p>
        <img src= { Stars } alt="" className='mx-auto p-4' />
        </div>

        <div className='flex-col bg-gray-600 rounded-lg shadow-md w-full m-6 sm:w-52'>
        <img src="" alt="" className='h-20 m-6 mx-auto' />
        <h4 className='uppercase text-center font-bold'>vincent</h4>
        <p className='text-center px-2'>
          
        </p>
        <img src= { Stars } alt="" className='mx-auto p-4' />
        </div>

   </div>
</div>
</div>
     
  )
}

export default Cards