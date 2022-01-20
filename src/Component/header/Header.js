import React  from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

import mainLogo from  '../../assets/image/logo.png'



const Header=()=>{

   return(

   <section className='menu-section'>
       <Link to="/"> <img src={mainLogo}/></Link>
        <Link  to="/Fal">فال حافظ</Link>
        <Link to="/Ashaar"> گنجینه اشعار</Link>
        <Link to="/AboutUs"> درباره ما</Link>
    </section>
 
   )
}

export default Header;