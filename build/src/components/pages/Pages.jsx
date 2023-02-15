import React from 'react'
import Startups from '../startup/Startups'
import Startup from '../startup-care/startup-care.component'
import Cards from '../cards/Cards'
import Logo from '../Logo/Logo.component'
import Footer from '../common/footer/Footer'

const Pages = () => {
  return (
    <>
     <Startups />
     <Startup /> 
     <Cards />
     <Logo />
     <Footer />

    </>
  )
}

export default Pages
