
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import '../../styles1.css';
import {Autoplay} from 'swiper/modules';
import interior from "./data/interior";
import { useState } from "react";


export default function Section03() {
    let [Interior] = useState(interior)
   let store = ['부산명지점','부산주례점','대연본점','서울신림점','서울대입구점','부산해운대점','부산사직점','부산정관점','부산대점','명지대점','경남대점','진주혁신도시점','대구범어점','거제아주점','통영무전점','양산덕계점','양산물금점']
    return(
        <>
        <div className="section03_container">
        <h2>STORE</h2>
        <Swiper
        className="storeSwiper"
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        modules={[Autoplay]}
        >
        {Interior.map((a,i)=>{
            return(
                <SwiperSlide className="storeSwiperSlide"> <img src={Interior[i].name} /></SwiperSlide>
            )
        })}
        </Swiper>
        </div>
        <Swiper
        className="storeSwiper storeSwiper2"
        slidesPerView={10}
        spaceBetween={5}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          pagination={{
            clickable: true,
          }}
        >
            <div className="store_name">asd</div>
        {store.map((a,i)=>{
            return(
                <SwiperSlide className="storeSwiperSlide2">{store[i]}</SwiperSlide>
            )
        })}
        </Swiper>
        </>
    )
}