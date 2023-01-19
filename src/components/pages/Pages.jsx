import React from 'react'
import Navigation from '../navigation/Navigation'
import Startups from '../startup/Startups'
import Client from '../client-directory/client-directory.component'
import Startup from '../startup-care/startup-care.component'

const Pages = () => {
  return (
    <>
    <Navigation />
     <Startups />
     <Startup /> 
     <Client />
    </>
  )
}

export default Pages
