import React from 'react'
import Hero from '../hero/Hero'
import Loader from '../loader-page/loader-page.component'
import Navbar from '../navbar/Navbar'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Loader />
    
       </>
  )
}

export default Home