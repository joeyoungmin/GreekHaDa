import './App.css';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Main from './pages/Main';
import Main01 from './pages/Main01';
import Main02 from './pages/Main02';
import Brand01 from './pages/Main01/Brand01';
import Brand02 from './pages/Main01/Brand02';
import Menu from './pages/Main01/Menu';
import Nutrition from './pages/Main01/Nutrition';
import Allergy from './pages/Main01/Allergy';
import InquiryReceived from './pages/Main01/Inquiry_received';
import Community from './pages/Main01/Community';
import Franchise00 from './pages/Main01/Franchise00';
import Franchise01 from './pages/Main01/Franchise01';
import Franchise02 from './pages/Main01/Franchise02';
import Community00 from './pages/Main01/Community00';
function App() {
  let [show, setShow] = useState(true);
  return (
    <div className="App">
      {show === false ? null : <Main  show={setShow}/>}
      <Routes>
        <Route path='/Brand01' element={<Brand01 />}></Route>
        <Route path='/Brand02' element={<Brand02 />}></Route>
        <Route path='Menu' element={<Menu />}></Route>
        <Route path='Nutrition' element={<Nutrition />}></Route>
        <Route path='Allergy' element={<Allergy />}></Route>
        <Route path='cm2' element={<InquiryReceived />}></Route>
        <Route path='cm3' element={<Community />}></Route>
        <Route path='cm4' element={<Franchise00 />}></Route>
        <Route path='cm5' element={<Franchise01 />}></Route>
        <Route path='cm6' element={<Franchise02 />}></Route>
        <Route path='cm1' element={<Community00 />}></Route>
      </Routes>
      <Routes> 
      <Route path="/brand" element={<Main01 />}>
      </Route>
      <Route path="/franchise" element={<Main02 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
