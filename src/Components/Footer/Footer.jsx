import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Githup from '@iconscout/react-unicons/icons/uil-github'

 import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className="footer">
    <img src={Wave} alt="" style={{width: '100%'}}/>
    <div className="f-content">
         <span>bilaltaskaya@gmail.com</span>
         <div className="f-icons">
            <a href="https://www.instagram.com/bilal_tskaya/">
             <Insta color='white' size='3rem'/>
             </a>
             <Facebook color='white' size ='3rem'/>
             <a href="https://github.com/BiLaltaskya">
             <Githup color='white' size='3rem'/>
             </a>
         </div>
    </div>
    </div>
  )
}

export default Footer