import React from 'react'
import './startups.css'
import { startupData } from './startupData';
import Icon from '../images/icon/icons8_idea.png'
import Navbar from '../navbar/Navbar'


const Startups = () => {
  return (
    <>
<Navbar />
    <div className="strtup">

    <div className='startup1'>
    <span className='what'>Let us take care of your startup tech needs!</span>
    <p>We let you focus on building the business while we help you create an effective product that has the vision and impact you want it to have.</p> 

    <div className="cards">
<div className='card-1'><sup>01/</sup><sub>3</sub></div>
<div className='card-b'></div>
<div className='card-c'></div>
</div>
 </div>
        <section className='startup2'>
          <div className="top">
<div className='card-2'></div>
<div className='card-3'></div>
  <p>We bring well trained and delivery ready product engineers</p>
          <span>Adamur startup care helps you scale your development</span>
          </div>
  <div className='container grid5 mtop relative'>
        {startupData.map((items, index) => (
            <div className='grow box text-center'key={index}>
              <img src={ Icon } alt='' className='icon'/>
                <h4>{items.title}</h4>
                <label>{items.review}</label>
    </div>
        ))}
    </div>
          <div>

          </div>

        </section>
        </div>
        </>
  )
}

export default Startups;



