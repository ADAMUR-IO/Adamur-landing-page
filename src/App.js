import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Startup from './components/common/startup/Startup';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Enroll from './components/enroll/Enroll';
import News from './components/news/News';
import Cards from './components/cards/Cards';
import Hero from './components/hero/Hero';


function App ()  {
  return (
      <>
      
   {/* <Footer/>   */}
   <Navbar/>
   {/* <Cards/> */}
   {/* <Enroll/>
   <News/> */}
   {/* <Hero/> */}
    </>
  )
}

export default App;