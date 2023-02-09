import React from 'react'
import Slider from '../Slider-startup/Slider.component'
import Startup from '../startup-care/startup-care.component'
import Startups from '../startup/Startups'

import Cards from '../cards/Cards'
import Logo from '../Logo/Logo.component'
import Footer from '../common/footer/Footer'

const Pages = () => {
  return (
    <>
     <Slider />
     <Startups />
     <Startup /> 
     <Cards />
     <Logo />
     <Footer />

    </>
  )
}

export default Pages
