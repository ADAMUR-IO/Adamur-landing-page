import React from 'react'
import Hero from '../hero/Hero'
// import Loader from '../loader-page/loader-page.component'
import Navbar from '../navbar/Navbar'
import Team from '../team/Team'
import Logo from '../Logo/Logo.component'
import Footer from '../common/footer/Footer'
import News from '../news/News'



const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Logo />
    <Team />
    <News />
    <Footer />
    {/* <Loader /> */}
    
       </>
  )
}

export default Home