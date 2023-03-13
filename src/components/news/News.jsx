import React from 'react'

function News() {
  return (
    <div class='items-center justify-center bg-black '>
        <h5 className='text-white text-4xl font-semibold text-center '>Join our Career Newsletters</h5>
        <h3 className='text-white  text-center  mt-16 lg:mt-4 md:mt-4 lg:mb-2 md:mb-2'>Be the first to know what happens at Adamur</h3>

        <div className='  text-center mt-4 gap-20 md:flex lg:flex align-center justify-center items-center pb-4'>
          <input class="placeholder-shown:border-white py-2 px-16 mt-12 h-12 rounded outline-red-500 shadow-sm " placeholder="you@example.com" />
           <button className='bg-red-500 py-2 px-4 rounded mt-12 w-56 h-12 text-center '><h2 className=' text-center text-white '>Subscribe</h2></button>
          </div>   
      
    </div>
  )
}

export default News