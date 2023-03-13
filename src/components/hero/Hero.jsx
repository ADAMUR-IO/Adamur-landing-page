import './hero.css';
import { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8 } from '../images';



const Hero = () => {
 
  return (
    <div className="h-[70rem] items-center justify-center">  

<div className="md:font-normal ml-16 pt-12 md:mt-2 md:mb-2 w-full flex-col space-y-4">
      <span className='text-5xl font-bold'>shape your software<br/>engineering <span className='text-5xl font-light' >Career <br/> with us!</span></span>
     
    <div></div>
      <span className='-mt-4'>At Adamur we inspire, shape and develop industry grade software <br/>engineers,let your career in tech soar to greater heights!</span>
      </div>

      <div className=" flex absolute -skew-y-12 text-center m-2 justify-center  space-x-2 mb-16 ">
      <div className="text-center justify-center p-1 rounded-full flex-col  skew-y-12 bg-red-600">
        <img src={ Col1 } alt="" />
        <img src={ Col2 } alt="" />
      </div>    
    <div className="text-center justify-center p-1 rounded-full flex-col bg-blue-900 skew-y-12">
      <img src={ Col3 } alt="" />
      <img src={ Col4 } alt="" />
    </div>  
    <div className="text-center justify-center p-1 flex-col rounded-full skew-y-12 bg-red-300">
      <img src={ Col5 } alt="" />
      <img src={ Col6 } alt="" />
      </div>
    <div className="text-center justify-center p-1 rounded-full flex-col skew-y-12 bg-slate-50 ">
    <img src={ Col7 } alt="" />
      <img src={ Col8 } alt="" />
</div>
</div>
    </div>
  );
};

export default Hero;