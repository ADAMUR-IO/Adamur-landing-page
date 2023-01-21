import React from 'react'
import Photo from '../images/pic.png'
import Stars from '../images/stars.png'
import BackGround from '../images/client.png'


const Cards = () => {
  return (

   
   <div style={{backgroundImage: `url(${BackGround})`}} className="client w-full min-h-screen bg-gray-700  text-white">
      <h5 className='text-white text-center md:text-2xl md:mt-12 mb-4'>What our clients say</h5>
      <h2 className='text-3xl ml-4 w-92 mx-auto leading-normal font-bold text-center '>
        What they have to say
      </h2>

          {/* cards */}
      <div className="flex flex-wrap justify-center">
        <div className='flex-col bg-gray-600 rounded-lg shadow-md w-full m-6 sm:w-52'>
        <img src= { Photo } alt="" className='h-20 m-6 mx-auto' />
        <h4 className='uppercase text-center font-bold'>Jackson</h4>
        <p className='text-center px-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae 
          voluptatibus quo repudiandae incidunt delectus similique minus debitis, 
        </p>
        <img src= { Stars } alt="" className='mx-auto p-4' />
        </div>

        <div className='flex-col bg-gray-600 rounded-lg shadow-md w-full m-6 sm:w-52'>
        <img src= { Photo } alt="" className='h-20 m-6 mx-auto' />
        <h4 className='uppercase text-center font-bold'>Wendy</h4>
        <p className='text-center px-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae 
          voluptatibus quo repudiandae incidunt delectus similique minus debitis, 
        </p>
        <img src= { Stars } alt="" className='mx-auto p-4' />
        </div>

        <div className='flex-col bg-gray-600 rounded-lg shadow-md w-full m-6 sm:w-52'>
        <img src= { Photo } alt="" className='h-20 m-6 mx-auto' />
        <h4 className='uppercase text-center font-bold'>vincent</h4>
        <p className='text-center px-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae 
          voluptatibus quo repudiandae incidunt delectus similique minus debitis, 
        </p>
        <img src= { Stars } alt="" className='mx-auto p-4'  />
        </div>

   </div>
</div>

     
  )
}

export default Cards