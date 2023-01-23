import { Routes, Route } from 'react-router-dom';
import Loader from './component/loader-page/loader-page.component';
import Startup from './component/startup-care/startup-care.component';
import AboutUs from './component/AboutUs/AboutUs.component';
import './App.css';
import Section from './component/Section-2/Section-2.component';
import Wireframe8 from './component/Wireframe-8/Wireframe-8-component';

function App() {
  return (
       <Routes>

        <Route index element={<Loader />} />
        <Route path='/startup' element={<Startup />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/section' element={<Section />} />
        <Route path='/frame8' element={<Wireframe8 />} />


      
      </Routes>
  );
}

export default App;
