import React from 'react'
import './industry.css'
import { motion } from 'framer-motion';


const Industry = () => {
  const transition =  { type: 'spring', duration: 3 };
  return (
    
        <div className='section-2-container'>
<div className='section-2-container-0'>
    <span>We help you</span>
<div className='s-box'>
<div className="dots">
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>

</div>
<div className='border'>
    <motion.span
    initial={{ right: '0.5rem'}}
    whileInView={{ right: '2rem' }}
    transition={transition}
    className='span'>think outside the box </motion.span>
</div>
</div>

    </div>
<div className='section-2-container-1'>
                
    <div className='text-delivery'>
    <p>Preparing you for Industry delivery</p>
    </div>
     <div className='delivery'>
    <span>If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>

    <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
    <a href='adamur.io' className='link-join'><span title='Good to have you join ADAMUR'>Join our next cohort</span></a>

    <div> 
    </div>
    </div>
    </div>
    </div>

  )
}

export default Industry