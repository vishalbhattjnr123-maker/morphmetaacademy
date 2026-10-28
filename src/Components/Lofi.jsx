import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




// import required modules
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

export default function Lofi() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay
        navigation={false}
       
        modules={[EffectFade, Pagination , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <DotLottieReact
      src="https://lottie.host/28196bf0-8827-4d8a-b622-2534bf9390cf/a5uML8CP8S.lottie"
      loop
      autoplay
    />
        </SwiperSlide>
        <SwiperSlide>
        <DotLottieReact
      src="https://lottie.host/0d0c9c06-6c3f-40ed-8aac-c676c6b0558a/LWJQJCWRbF.lottie"
      loop
      autoplay
    />
        </SwiperSlide>
        <SwiperSlide>
        <DotLottieReact
      src="https://lottie.host/0a1555a3-9065-4480-90f7-1b38bcc0a329/kb7zIhtnOM.lottie"
      loop
      autoplay
    />
        </SwiperSlide>
        <SwiperSlide>
        <DotLottieReact
      src="https://lottie.host/db7599f3-82f7-46bb-a79b-cffbdaee88b8/64RdSqcaJg.lottie"
      loop
      autoplay
    />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
