import React from 'react'
import Growth from '../images/values/growth.png'
import team from '../images/values/team.png'
import innovation from '../images/values/innovation.png'

const Values = () => {
  return (
    <div>
        <div className='text-center items-center min-h-screen'>
            {/* <div className=''></div> */}
<div className='font-extrabold text-lg p-6 text-rose-700 lg:p-10 lg:text-2xl'>Our Values<span></span></div>
<div className='text-sm w-11/12 pl-10 text-left lg:text-lg lg:w-9/12 lg:pl-72'>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae. </span>
</div>
<div className='flex space-x-5 justify-center p-10 transition-all lg:p-20 lg:space-x-12'>
    <div className='rounded-r-full rounded-l-full bg-gray-700 border-2 w-6 h-6'></div>
    <div className='rounded-r-full rounded-l-full bg-rose-700 border-2 w-6 h-6'></div>
    <div className='rounded-r-full rounded-l-full bg-black border-2 w-6 h-6'></div>
</div>
<div></div>
<div className=' relative p-8 lg:p-6 lg:ml-14 lg:scale-50'>
        <div className='items-center justify-evenly flex ml-32 mr-28 absolute lg:space-x-14 space-x-4' >
            
            <img className=' z-50 ' src={team} alt="Team work" />
            
            <img className=' z-50 '  src={Growth} alt=" Growth" />
            <img className=' z-50  origin-bottom-right'  src={innovation} alt="Innovation back" />
            
            <div className='bg-left absolute flex lg:space-x-32 space-x-6'>
            <div>
            <img className=' z-10  origin-bottom-left'  src={team} alt="Team work back" />
            </div>
            <div><img className=' z-10  '  src={innovation} alt="Innovation" /></div>
            </div>

            
        </div>
        </div>
        </div>

    </div>
  )
}

export default Values;
