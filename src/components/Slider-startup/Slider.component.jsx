import React from 'react';
import StartupParent from '../Startupparent/Startup-parent'
import Navbar from '../navbar/Navbar'
import Wireframe8 from '../Wireframe8/Wireframe-8-component'
import { Routes, Route } from 'react-router-dom'


const Slider = () => {
  

  return (
    <>
    <div>
    <Navbar />
    </div>
  <Routes>
    <Route  index='/parent' target='' element={<StartupParent />} />
    <Route path='/frame' element={<Wireframe8 />} />

  </Routes>
  
    
    </>
  );
}
export default Slider;

