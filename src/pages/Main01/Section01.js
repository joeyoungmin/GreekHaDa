
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles.css';
// import required modules
import { Autoplay } from 'swiper/modules';
// data
import data01 from './data/data01';
import { useState } from 'react';

export default function Section01() {
  let [swiperData] =useState(data01)
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {swiperData.map((a,i)=>{
          return(
          <SwiperSlide className='imageBox'>
         
            <ul className='BoxBOx'>
            <div className='image-box'><img src={data01[i].image}/></div>
                <li className='TextBox'>
                    <h2>{data01[i].title2}</h2>
                    <p>{data01[i].title}</p>
                </li>
            </ul>
          
          </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}