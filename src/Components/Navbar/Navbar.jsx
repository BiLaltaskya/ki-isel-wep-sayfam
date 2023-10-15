import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Bilal</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li>Anasayfa</li>
                        </Link>
                        <Link spy={true} to='Hizmetlerim' smooth={true}>
                            <li>Hizmetlerim</li>
                        </Link>

                        <Link spy={true} to='Deneyim' smooth={true}>
                            <li>Deneyim</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Görüşler' smooth={true}>
                            <li>Görüşler</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to="footer" smooth={true}>
                    <button className="button n-button">
                        İletişim
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar