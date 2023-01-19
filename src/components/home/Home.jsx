import React from 'react'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Loader from '../loader-page/Loader-page.component'
import Section from '../section-2-loader/section-2.component'
import Logo from '../Logo/Logo.component'
import Team from '../team/Team'
import Section4 from '../section4/Section4'
import Footer from '../common/footer/Footer'
import News from '../news/News'
// import Inspiration from '../inspiration/Inspiration'
// import Industry from '../industry/Industry'
// import Enroll from '../../assets/enroll/Enroll'
const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <Loader />
    <Section />
    <Logo />
    <Team />
    <Section4 />
    <News />
    <Footer />

    {/* <Inspiration /> */}
    {/* <Industry /> */}
    {/* <Enroll /> */}


    </>
  )
}

export default Home