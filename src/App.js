import React   from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Component/mainSection/main'
import Fal from  './Component/fal/Fal'
import Ashaar from './Component/ashaar/asshar'
import Ghazal from './Component/ashaar/ghazal/Ghazal'

import './App.css';
import './assets/font/Rezvan.ttf'

const AboutUs = () => <h3>aboutUs</h3>;

function App() {
  return (
    <div className="App">
  <BrowserRouter>

 <Routes>
 <Route exact path="/" element={<Main />}/>
      <Route path="/Fal" element={<Fal />}/>
        <Route path="/Ashaar" element={<Ashaar />}/>
     <Route path="/AboutUs" element={<AboutUs />}/>
     <Route path="/Ghazal" element={<Ghazal />}/>
 </Routes>

   </BrowserRouter>
    </div>
  );
}

export default App;
