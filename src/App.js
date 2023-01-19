import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Startup from './components/common/startup/Startup';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Enroll from './components/enroll/Enroll';
import News from './components/news/News';
import Cards from './components/cards/Cards';


function App ()  {
  return (
      <>
   {/* <Footer/>   */}
   <Cards/>
   {/* <Enroll/>
   <News/> */}
    </>
  )
}

export default App;