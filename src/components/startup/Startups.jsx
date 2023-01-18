import React from 'react'
import './startups.css'
import { startupData } from './startupData';
import Icon from '../images/icon/icons8_idea.png'


const Startups = () => {
  return (
    <div className="startup">
    <div className='startup1'>
        <span className='what'>Let us take care of your startup tech needs!</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus, ut egestas in sed enim eleifend convallis vitae.</p> 
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
  <div className='container grid5 mtop'>
        {startupData.map((items, index) => (
            <div className='box'key={index}>
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
  )
}

export default Startups;



