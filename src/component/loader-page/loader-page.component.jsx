import React from 'react'
import './loader-page.styles.css';
import Clara from '../../component/images/Clara Ujiie.png';

const Loader = () => {
    return (
            <div className='loader-container'>
              <div className='text'>
                <span><span><strong>Bold</strong></span> * <span className='text-c'>Thinkers</span> * Doers *</span>

              </div>
              
              <div className='box-container'>
                <span><strong className='inspire'>Inspiring the next gen tech talent</strong></span>
                <br></br>
                <span>If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                </div>
                <div className='box-container1'>
                  < img src={Clara} alt='Inspiration message' />
                </div>
              </div>
      );
    }

export default Loader;
