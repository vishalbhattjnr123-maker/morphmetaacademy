import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
export default function AnimatioCard() {
  return (
    <>
      <Swiper
        loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row justify-content-around mb-3">
            <div className="col-12 ">
              <div className=" ">
                <img
                  className=" p-1  rounded-4   "
                  src="/images/animation-work-student3 (1).jpg"
                  alt="palcement img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row justify-content-around mb-3">
            <div className="col-12 ">
              <div className=" ">
                <img
                  className=" p-1  rounded-5   "
                  src="/images/animation-work-student1ae (1).jpg"
                  alt="palcement img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row justify-content-around mb-3">
            <div className="col-12 ">
              <div className=" ">
                <img
                  className=" p-1  rounded-4   "
                  src="/images/animation-work-student61.jpg"
                  alt="palcement img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row justify-content-around mb-3">
            <div className="col-12 ">
              <div className="">
                <img
                  className="p-1  rounded-4"
                  src="/images/animation-work-student9.jpg"
                  alt="palcement img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
