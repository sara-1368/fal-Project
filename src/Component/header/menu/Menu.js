import React ,{Fragment}  from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

const Home =()=><h3>Home</h3>;
const FalHafez =()=><h3>falHafez</h3>;
const Ashaar =()=><h3>ashaar</h3>;
const AboutUs = () => <h3>aboutUs</h3>;

const Menu=()=>{

   return(

    <BrowserRouter>
    <Fragment>
   <section>
    <Link to="/">صفحه اصلی </Link>
        <Link to="/FalHafez">فال حافظ</Link>
        <Link to="/Ashaar"> گنجینه اشعار</Link>
        <Link to="/AboutUs"> درباره ما</Link>
    </section>
 <Routes>
     <Route exact path="/" element={<Home />}/>
      <Route path="/FalHafez" element={<FalHafez />}/>
        <Route path="/Ashaar" element={<Ashaar />}/>
     <Route path="/AboutUs" element={<AboutUs />}/>
 </Routes>
 </Fragment>
   </BrowserRouter>
   )
}

export default Menu;