import './hero.css';
import { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8 } from '../images';



const Hero = () => {
  return (
    <>
    <div className='hero'>
    <div className='header-l'>
      <div className="text">
      <span>shape your software engineering </span>
      <span>career with us!</span>
      <p>At Adamur we inspire, shape and develop industry grade software engineers, let your career in tech soar to greater heights!  
    <div className="blur hero-blur1"></div>
      </p>
      
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
  );
};

export default Hero;