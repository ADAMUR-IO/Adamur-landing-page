import React from 'react'
import './loader-page.styles.css';
import Cool from '../../component/images/cool.png';
import Clara from '../../component/images/Clara Ujiie.png';
import Haba from '../../component/images/haba-logo.png';
import Boop from '../../component/images/boop-logo.png';
import Green from '../../component/images/Rectangle.png';




const Loader = () => {
    return (
      <div className='body-container'> {/* start of parent div */}
            <div className='loader-container'>
              <div className='text'>
                <span><span className='bold-t'>Bold</span> * <span className='text-c'>Thinkers</span> * Doers *</span>

              </div>
              
              <div className='box-container'>
                <span className='inspire'>Inspiring the next gen tech talent</span>
                <br></br>
                <div className='inspire-2'>
                <span >If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                </div>
                </div>
                <div className='box-container1'>
                < img src={Cool} alt='Beautiful analytics to grow' />
                </div>
              </div>
              <div className='section-2-container'>{/* start of section-2-container div */}
                <div className='section-2-container-0'>
                < img src={Clara} alt='Inspiration message' />

                </div>
                <div className='section-2-container-1'>
                              
                <div className='text-delivery'>
                  <p>Preparing you for Industry delivery</p>
                </div>
                                <div className='delivery'>
                <span>If it's uncontained, is it still content? We dance betwewn unfiltered & refined between  Morocco & Luxambourg, transscending traditon to capture calture. Founded in 2020, Lights specializes in videos, live events & immensive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations.</span>
                <br></br>
                <br></br>
                <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                                </div>
                                <div> 
                                <a href='#'><span title='Good to have you join ADAMUR' className='link-join'>Join our next cohort</span></a>
                                </div>

                </div>


              </div>{/* end of section-2-container div */}

                      <div className='section-3-container'>{/* start of section-3-container div */}
                        <div>
                          <span className='chohort-portfolio'>Meet Our Cohorts Portfolio</span>
                            <br />
                          <span className='bold-t'>Some of the startups our cohort are working with</span>
                        </div>
                          <div className='portfolio-logo'>
                            <div className='logo-haba'>
                              <img src={Haba} alt="Haba logo" />
                              <img src={Boop} alt="Boop-logo" />
                            </div>
                          </div>
                      </div>{/* end of section-3-container div */}
                        <div className='section-4-container'> {/* start of section-4-container div */}
                        <div className='section-4-container-0'>
                        <div className='section-4-container-1'>
                              <div className='section-4-container-2'>
                        <div className='text-delivery-1'>
                  <p>Product design, UX & UI</p>
                </div>
                            </div>
                        <span>With each project, we strengthen the brand identity of organizations & causes-swapping skills with explore, our agency dedicated to digital branding. Light is insired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all. Showereel Inspired by convention didn't think so.</span>
                        <div className='section-4-container-2-link'>
                                 <div className='link-join'> 
                                  <span onClick={''} title='Lets go join ADAMUR'>Apply for our next cohort</span>
                                 </div>
                          </div>
                        </div>
                        </div>
                        <div className='section-4-box-container'>
                          < img src={Green} alt='Beautiful analytics to grow' />
                        </div>
                        
                        </div>{/* end of section-4-container div */}

                        <div className='footer-container'>{/* start of footer div */}
                              <div>
                              <h1 className='footer-title'>Let's Talk * Ready to join our next cohort?</h1>
                              </div>
                        <footer className='footer-container-0'>
                          <div className='footer-container-1'>
                            <div className='adamur-logo'>
                              <img src={''} alt="Adamur-logo" />
                              <span className='adamur-text'>a<span className='text-c'>d</span>amur</span>
                              <br />
                              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ultricies integer blandit faucibus mattis erat. Pulvinar pharetra nullam in.</span>
                              <br />
                              <div className='footer-icon'>
                              <img src={''} alt="instagram" />
                              <img src={''} alt="youtube" />
                              <img src={''} alt="facebook" />
                              <img src={''} alt="twiter" />

                              </div>
                            </div>
                          </div>
                          <div className='footer-container-2'></div>

                        </footer>

                        </div>{/* end of footer div */}


              {/* end of parent div */}
              </div> 
      );
    }

export default Loader;
