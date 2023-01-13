import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Startup from './components/common/startup/Startup';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App ()  {
  return (
      <>
   <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/startup' element={<Startup />} />
    </Routes>
    </Router>         
    </>
  )
}

export default App;