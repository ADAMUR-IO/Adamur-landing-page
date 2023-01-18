import React from 'react'
import './enroll.css'

const Enroll = () => {
  return (
    <div className='enroll'>
        <div className="bold">
        <span>Bold *</span>
        <span>Thinkers *</span>
        <span>Doers *</span>
        </div>
        <div className="enroll-text">
            <span>Join us for an Extensive Experience</span>
        </div>
        
        <form action="" className='form'>
           <div className="first">
           <label>
                First Name
            <input type="text" />
            </label>
            
           </div>
           <div className="second">
           <label>
            Last Name
            <input type="text" />
            </label>
           </div>
           
            <label>
            <input type="email" />
            </label>
           
        </form>
    </div>
  )
}

export default Enroll