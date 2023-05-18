import React from 'react'
import Growth from '../images/values/growth.png'
import team from '../images/values/team.png'
import innovation from '../images/values/innovation.png'

const Values = () => {
  return (
    <div>
        <div className='text-center items-center justify-center min-h-screen'>
<div className='font-extrabold text-lg p-6 text-rose-700 lg:p-10 lg:text-2xl'>Our Values<span></span></div>
<div className='text-sm w-11/12 pl-10 text-left lg:text-lg lg:w-9/12 lg:pl-72'>
    {/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. </span> */}
</div>
<div className='flex space-x-5 justify-center p-10 transition-all lg:p-20 lg:space-x-12'>
    <div className='rounded-r-full rounded-l-full bg-gray-700 border-2 w-6 h-6'></div>
    <div className='rounded-r-full rounded-l-full bg-rose-700 border-2 w-6 h-6'></div>
    <div className='rounded-r-full rounded-l-full bg-black border-2 w-6 h-6'></div>
</div>
<div className=' relative p-8 lg:ml-14 sm:ml-24 sm:mr-28  lg:scale-50 '>
        <div className='items-center justify-evenly flex ml-28 mr-32 absolute lg:space-x-14 space-x-6' >
            
            <img className=' z-30 ' src={team} alt="Team work" />
            
            <img className=' z-30 '  src={Growth} alt=" Growth" />
            <img className=' z-30 '  src={innovation} alt="Innovation back" />
            
            <div className='bg-left absolute flex sm:gap-x-8 lg:gap-x-36'>
            <div>
            <img src={team} alt="Team work back" />
            </div>
            <div><img  src={innovation} alt="Innovation" /></div>
            </div>

        </div>
        </div>
        </div>

    </div>
  )
}

export default Values;