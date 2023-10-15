import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (

        <div className="hizmetlerim" id='Hizmetlerim'>
            {/* left side*/}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Hizmetlerim</span>
                <span>-----    :) -----</span>
                <spane>Veri tabanı hazırlama sunma ,wep tasarım
                    <br />
                    Grafiker olarak photoshop ,wordpress kullanımı ile Bilgi sahibiyim.
                </spane>
                <a href={Resume} download>
                    <button className="button s-button">CV indir</button>
                </a>
                <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
            </div>
            {/*right side*/}
            <div className="cards">
                <div style={{ left: "14rem" }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Tasarım'}
                        detail={"Photoshop,  Wordpress ,Exel ,Accsess"}
                    />
                </div>

                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html , Css , C++ , Php ,c# "}
                    />
                </div>
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Kullanıcı deneyimi tasarımı, bir kullanıcının bir şirketle, onun hizmetleriyle ve ürünleriyle etkileşimde bulunacağı deneyimi tanımlama sürecidir. "}
                    />
                </div>
                <div className="blur1, s-blur2" style={{ background: "var(--purple" }}></div>
            </div>
        </div>
    )
}


export default Services