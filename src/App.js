import React from 'react';
import Home from './components/home/Home';
import Pages from './components/pages/Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnrollForm from './assets/enroll/Enroll'


function App ()  {
  return (
      <>
   <Router>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pages' element={<Pages />} />
    <Route path='/enroll-form' element={<EnrollForm />}  />
    </Routes>
    </Router>         
    </>
  )
}

export default App;