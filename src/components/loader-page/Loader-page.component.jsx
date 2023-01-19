import React from 'react'
import './loader-page.styles.css';
import Cool from '../images/cool.png';



const Loader = () => {
    return (
      <div className='body-container'> 
            <div className='loader-container'>
              <div className='text-m'>
                <span><strong >Bold</strong>  <span className='xl:p-4'>*</span> <span className='text-c'>Thinkers</span> <span className=' xl:p-4'>*</span> Doers <span className='xl:p-4'>*</span> </span>

              </div>
              
              <div className='box-container'>
                <span className='inspire-1'>Inspiring the next gen tech talent</span>
                <br></br>
                <div className='inspire-2'>
                <span >If it's uncontained, is it still content? We dance between unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                </div>
                </div>
                <div className='box-container1 '>
                < img  src={Cool} alt='Beautiful analytics to grow' />
              <div className="loader-blur"></div>
                </div>

              </div>
        <div>
        </div>

              </div> 
      );
    }

export default Loader;