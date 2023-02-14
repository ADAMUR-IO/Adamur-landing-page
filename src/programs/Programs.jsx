import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './programs.css'
import FormButton from '../assets/button/Button'
import Footer from '../components/common/footer/Footer'
import News from '../components/news/News'
import One from '../components/images/prgrms/one.png'
import Two from '../components/images/prgrms/two.png'
import Three from '../components/images/prgrms/three.png'
import Four from '../components/images/prgrms/four.png'
import Five from '../components/images/prgrms/six.png'

const Programs = () => {
  return (
    <>
    <Navbar />
    <div className='programs'>
      <span>The destination for tech leaders who seek to change the world </span>
      <p>Cohort 3.0 Application ongoing...</p>
      <div style={{marginLeft: '10rem', height: '10rem'}}>
      <FormButton />
      </div>
      <div className="circles">
        <div className="one">
          <img src={One} alt="" />
          <p></p>
        </div>
        <div className="two">
          <p></p>
          <img src={Two} alt="" />
        </div>
        <div className="three">
          <img src={Three} alt="" />
          <p></p>
        </div>
        <div className="four">
          <p></p>
          <img src={Four} alt="" />
        </div>
        <div className="five">
          <img src={Five} alt="" />
          <p></p>
        </div>
      </div>
      <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'centre'}}className='adamur'>
        <span className='who'>
        Who is ADAMUR For??
        </span>
        <ul className='list'>
          <li>You want to be part of a team</li>
          <li>Feel stuck in tutorial PURGATORY </li>
          <li>Looking for an affordable tech path</li>
          <li>Struggling to make progress</li>
          <li>Passionate COMMITTED to put in the time and effort</li>
          <li>Looking to become a techpreneur</li>
          <li>Changing career</li>
        </ul>
      </div>
    </div>
    <News />
    <Footer />
    </>
  )
}

export default Programs
