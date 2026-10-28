import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow , Navigation , Autoplay  } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div id='slider3'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        loop={true}
        autoplay={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow , Navigation , Autoplay ]}
        className="mySwiper title_message"
      >
          <SwiperSlide>

          <img className='rounded-3' alt="Morph Meta Academy" src="/images/redd.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        
          <img className='rounded-3' alt="Morph Meta Academy" src="/images/hulk.jpg" />
        </SwiperSlide>
      
        <SwiperSlide>
        
          <img className='rounded-3' alt="Morph Meta Academy" src="/images/study.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        
          <img className='rounded-3' alt="Morph Meta Academy" src="/images/wing.jpg" />
        </SwiperSlide>
       
      </Swiper>
      </div>
    </>
  );
}
