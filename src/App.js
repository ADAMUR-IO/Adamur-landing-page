import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Pages from './components/pages/Pages'
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from './components/common/footer/Footer'


function App ()  {
  return (
      <>
   <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pages' element={<Pages />} />
    </Routes>
     {/* <Footer /> */}
    </Router>         
    </>
  )
}

export default App;