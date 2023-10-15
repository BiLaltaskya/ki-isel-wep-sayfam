
import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Kısa zamanda tam da hayaletiğim şekilde yaptığın site için teşekür ederim Kesinlikle  profesyonel ,yenilikçi,vizyonu geniş, samimi ve pratik bir arkadaşımız.",
    },
    {
      img: profilePic2,
      review:
        "Mükemmel  hayat enerjisiyle ve yeni şeyler öğrenme aşkıyla yanan ,şu güne kadar gördüğüm en azimli girişimcilerden olan Bilal kardeşime kariyerinde başarılar diliyorum...  ",

    },
    {
      img: profilePic3,
      review:
        "Bizlere yapımış olduğu sitenin güzeliğinden çok ilgili, düşünceli,yetenekli,yaratıcı olması ve yaptığı işe gerçekten değer vermesi sebebiyle kendisine hayran kalmamak elde değil.",
    },
    {
      img: profilePic4,
      review:
        "Herzaman her daim her sorumuza anında cevap vermesi her seferinde yardımcı olmasıda bizi etkileyen özelliği Bilal'in .Teşekürr ederiz başarılar hayatında..",
    },
  ]


  return (
    <div className="görüşler" id="Görüşler">
      <div className=" t-heading">
        <span>Müşteriler  </span>
        <span>istisnayi işleri </span>
        <span>benden alır...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur  t-blur2 " style={{ background: "skyblue" }}></div>

      </div>
      {/* slider*/}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )

        })}
      </Swiper>

    </div>

  )
}

export default Testimonial