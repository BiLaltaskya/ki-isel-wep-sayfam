import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Siderbar from "../../img/sidebar1.png";
import Ecommerce from "../../img/ecommerce1.png";
import HOC from "../../img/hoc1.png";
import MusicApp from "../../img/musicapp1.png";
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading*/}
      <span style={{ color: darkMode ? 'white' : '' }}>Son projelerim</span>
      <span>Portfolio</span>

      {/*slider*/}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Siderbar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio