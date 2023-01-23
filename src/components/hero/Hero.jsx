import './hero.css';
import { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8 } from '../images';



const Hero = () => {
 
  return (
    <div className='hero'>  
    <div className='header-l min-h-screen sm:justify-baseline  pl-4'>
      <div className="text max-w-[1200px] mt-[44px] w-full  mx-auto lg:ml-24 flex flex-col justify-start">
      <p className='text-5xl font-bold'>shape your software<br/>engineering <span className='text-5xl font-light' >Career <br/> with us!</span></p>
     
    <div className="blur hero-blur1"></div>
      <p>At Adamur we inspire, shape and develop industry grade software <br/>engineers,let your career in tech soar to greater heights!</p>
      </div>

      <div className="formation justify-cente sm:align-middle pl-2 mt-[4px] flex lg:cols-2 md:col-span-1 md:cols-2 gap-2  md:mr-4 lg:ml-24 m  pt-1">
      <div className="img1-container">
        <img src={ Col1 } alt="" />
        <img src={ Col2 } alt="" />
      </div>    
    <div className="img2-container ">
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
  </div>
  );
};

export default Hero;