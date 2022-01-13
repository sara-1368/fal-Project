
import React ,{Fragment}  from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Main from './Component/mainSection/main'
import Fal from './Component/fal/Fal'
import './Component/header/Header.css'

import mainLogo from  './assets/image/logo.png'
import './App.css';

const Ashaar =()=><h3>ashaar</h3>;
const AboutUs = () => <h3>aboutUs</h3>;

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Fragment>
   <section className='menu-section'>
    <Link to="/"> <img src={mainLogo}/></Link>
        <Link to="/Fal">فال حافظ</Link>
        <Link to="/Ashaar"> گنجینه اشعار</Link>
        <Link to="/AboutUs"> درباره ما</Link>
    </section>
 <Routes>
     <Route exact path="/" element={<Main />}/>
      <Route path="/Fal" element={<Fal />}/>
        <Route path="/Ashaar" element={<Ashaar />}/>
     <Route path="/AboutUs" element={<AboutUs />}/>
 </Routes>
 </Fragment>
   </BrowserRouter>
    </div>
  );
}

export default App;
