import React from "react";
import './Ghazal.css'
import ghazalImage from '../../../assets/image/ghazal.png'


const Ghazal = ()=>{
    return(
        <div className="ghazal-section">
            <div className="ghazal-image">
               <img src={ghazalImage} />
            </div>
            <div className="ghazal-boxes">
        <div className="ghazal-left-bg">
            <div className="ghazal-content">
                <div>
                  
                </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
        <div className="ghazal-right-bg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </div>
        </div>
     
        </div>
    )
}
export default Ghazal;