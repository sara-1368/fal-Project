import React from 'react';
import Header from '../../Component/header/Header';
import image from '../../assets/image/img.png'
import './main.css'

const Main =()=>{
    return(
       
    <div>
    
         <div className='main-section'>
       
             <div className='right-section'>
               
                   </div>
             <div className='left-section'>
             <img   className='main-img' src={image} alt='dd'/>
             </div>
         </div>
     
    </div>
    )
}

export default Main;