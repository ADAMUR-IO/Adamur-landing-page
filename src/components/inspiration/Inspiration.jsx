import React from 'react'
import Cool from '../images/cool.png';
import './inspiration.css'

const Inspiration = () => {
  return (
            <div className='loader-container'>
                <div className="bold">
                <span>Bold *</span><span>Thinkers *</span><span>Doers *</span>             
                </div>
              <div className='box-container'>
                <span className='inspire'>Inspiring the next gen tech talent</span>
                <div className='inspire-2'>
                <span >If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>

                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                </div>
                </div>
                <div className='box-container1'>
                < img src={Cool} alt='Beautiful analytics to grow' className='cool'/>
                </div>
    <div className="blur hero-blur"></div>
              </div>
              
  )
}

export default Inspiration