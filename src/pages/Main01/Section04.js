import '../../App.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import '../../styles2.css';
import {Autoplay} from 'swiper/modules'
export default function Section04() {
    let store = ['부산명지점','부산주례점','대연본점','서울신림점','서울대입구점','부산해운대점','부산사직점','부산정관점','부산대점','명지대점','경남대점','진주혁신도시점','대구범어점','거제아주점','통영무전점','양산덕계점','양산물금점']
    return(
        <>
        <div className="section04_container">
        <h2>INSTAGRAM</h2>
        <div className='swiper_wrap'>
        <div className='swiperHead'></div>
        <Swiper
        className="instaSwiper"
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
    
        modules={Autoplay}
        >
        {store.map((a,i)=>{
            return(
                <SwiperSlide className="instaSwiperSlide"><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
            )
        })}
        </Swiper>
        </div>
        </div>
        </>
    )
}