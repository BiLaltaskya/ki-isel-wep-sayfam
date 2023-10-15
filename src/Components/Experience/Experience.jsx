import React from 'react'
import './Experience.css'
import { themeContext } from "../../Context";
import { useContext } from "react"; 

const Experience =()  => {

  const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="deneyim" id='Deneyim'>
     <div className="achievement">
        <div className="circle"> 2+</div>
        <span>Yıl</span>
        <span>Deneyim</span>
        </div>  
        <div className="achievement">
            <div className="circle">8+</div>
            <span>Tamamlanmış</span>
            <span> Projeler</span>
            </div> 
         <div className="achievement">
            <div className="circle">2+</div>

            <span>Çalıştığım</span>
            <span>Şirketler</span>

         </div>
    </div>
  )
}

export default Experience