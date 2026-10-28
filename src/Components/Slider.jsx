import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {  Autoplay, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div id='newsection'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[ Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded-5' src="/images/banner/2.webp" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img className='rounded-5' src="/images/banner/1.webp" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img className='rounded-5' src="/images/banner/3.webp" alt="Banner 1" /></SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}
