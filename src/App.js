import { Routes, Route } from 'react-router-dom';
import Loader from './component/loader-page/loader-page.component';
import Startup from './component/startup-care/startup-care.component';
import AboutUs from './component/AboutUs/AboutUs.component';
import './App.css';

function App() {
  return (
       <Routes>

        <Route index element={<Loader />} />
        <Route path='/startup' element={<Startup />} />
        <Route path='/aboutus' element={<AboutUs />} />


      
      </Routes>
  );
}

export default App;
