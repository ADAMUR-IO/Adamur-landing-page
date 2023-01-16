import { Routes, Route } from 'react-router-dom';
import Loader from './component/loader-page/loader-page.component';
import Startup from './component/startup-care/startup-care.component';
import Section from './component/section-2-loader/section-2.component';
import './App.css';

function App() {
  return (
       <Routes>

        <Route index element={<Loader />} />
        <Route path='/startup' element={<Startup />} />
        <Route path='/section' element={<Section />} />

      
      </Routes>
  );
}

export default App;
