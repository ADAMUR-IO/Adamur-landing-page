import React from 'react';
import Home from './components/home/Home';
import Pages from './components/pages/Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programs from './programs/Programs';
import Updates from '../src/components/updates/Updates'
import Cohort from './components/cohort/Cohort';
import Privacy from './assets/privacy/Privacy';
import Lenis from '@studio-freight/lenis'



function App ()  {
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  return (
      <>
   <Router>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pages' element={<Pages />} />
    <Route path='/programs' element={<Programs />} />
    <Route path='/updates' element={<Updates />} />  
    <Route path='/cohort' element={<Cohort />} />    
    <Route path='/privacy' element={<Privacy />}  />  
    </Routes>
    </Router>         
    </>
  )
}

export default App;