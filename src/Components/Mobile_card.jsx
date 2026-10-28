import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Mobile_card(){
    return(

    <>
    <div id='mobile_card'>

     <Swiper
     loop
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide ><img src="/images/banner/1.webp" alt="Banner 1"/>  </SwiperSlide>
        <SwiperSlide><img src="/images/banner/2.webp" alt="Banner 2"/>  </SwiperSlide>
        <SwiperSlide><img src="/images/banner/3.webp" alt="Banner 3"/>  </SwiperSlide>

        </Swiper>
    </div>
    
    </>
    )
}