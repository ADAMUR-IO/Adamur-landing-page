import React from 'react'
import Desktop from '../images/Desktop - 1.png';
import './section4.css'


const Section4 = () => {
  return (
    <div>
                    <div className='section-4-container'> 
                        <div className='section-4-container-0'>
                        <div className='section-4-container-1 flex flex-col items-center justify-center pt-2'>
                              <div className='section-4-container-2'>
                        <div className='text-delivery-1'>
                  <p>Product design, UX & UI</p>
                </div>
                            </div>
                        <span>
                          {/* With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so. */}
                        </span>
                        <div className='section-4-container-2-link'>
                        <div> 
                                <a href="https://forms.gle/kHYC6wT26tRu9bF7A"><span title='Good to have you join ADAMUR' className='link-join xl:text-xl ' style={{padding: '6px'}}>Apply for our next cohort</span></a>
                                </div>
                          </div>
                        </div>
                        </div>
                        <div className='section-4-box-container'>
                          < img src={Desktop} alt='Beautiful analytics to grow' />
                        </div>
                        
                        </div>

                        <div className='footer-container text-center justify-center'>
                              <h1 className='footer-title'>Let's Talk * Ready to join our next cohort?</h1>
                              </div>

    </div>
  )
}

export default Section4