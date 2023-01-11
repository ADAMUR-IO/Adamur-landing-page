import React from 'react'
import Logo from '../images/logo.png';
import './hero.css'
import { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8 } from '../images';


const Hero = () => {
  return (
    <>
    <div className='hero'>
    <div className="blur hero-blur"></div>
    <div className="header-r">
      <ul className="header-menu">
        <li>About Us</li>
        <li>Programs</li>
        <li>Cohorts</li>
        <li>Startup care</li>
        <li>News</li>
      </ul>
    </div>
    <div className='header-l'>
      <img src= { Logo } alt="" className='logo'/>
      <div className="text">
      <span>shape your software engineering </span>
      <span>career with us!</span>
    <div className="blur hero-blur1"></div>
      <p>At Adamur we inspire, shape and develop industry grade software engineers, let your career in tech soar to greater heights!</p>
      </div>
    </div>
    <div className="img-container">
      <div className="img1-container">
        <img src={ Col1 } alt="" />
        <img src={ Col2 } alt="" />
      </div>    
    <div className="img2-container">
      <img src={ Col3 } alt="" />
      <img src={ Col4 } alt="" />
    </div>
    <div className="img3-container">
      <img src={ Col5 } alt="" />
      <img src={ Col6 } alt="" />
      </div>
    <div className="img4-container">
    <img src={ Col7 } alt="" />
      <img src={ Col8 } alt="" />
</div>
</div>
    </div>
    </>
  )
}

export default Hero