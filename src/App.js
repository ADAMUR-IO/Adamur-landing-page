import React from 'react';
import Home from './components/home/Home';
import Pages from './components/pages/Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnrollForm from './assets/enroll/Enroll'
import Programs from './programs/Programs';
import Updates from '../src/components/updates/Updates'
import Cohort from './components/cohort/Cohort';
import Privacy from './assets/privacy/Privacy';



function App ()  {
  return (
      <>
   <Router>
    <Routes>
     <Route path='/' element={<Home />} />
    <Route path='/pages' element={<Pages />} />
    <Route path='/programs' element={<Programs />} />
    <Route path='/updates' element={<Updates />} />  
    <Route path='/cohort' element={<Cohort />} />    
    <Route path='/enroll-form' element={<EnrollForm />}  /> 
    <Route path='/privacy' element={<Privacy />}  />  

    </Routes>
    </Router>         
    </>
  )
}

export default App;