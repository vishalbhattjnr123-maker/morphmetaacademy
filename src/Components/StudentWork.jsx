import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function StudentWork() {
  return (
    <>
      <Swiper
        loop
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" ">
            <img
              className="rounded-4" width="390" height="390"
              src="/images/studentwork/student-work--sq12.jpg"
              alt="palcement img1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img
              className="rounded-4" width="390" height="390"
              src="/images/studentwork/ffirls.jpg"
              alt="palcement img2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-4" width="390" height="390"
            src="/images/studentwork/hanuman.jpg"
            alt="palcement img3"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-4" width="390" height="390"
            src="/images/studentwork/hree.jpg"
            alt="palcement img4"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-4" width="390" height="390"
            src="/images/studentwork/mand-big.jpg"
            alt="palcement img5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-4" width="390" height="390"
            src="/images/studentwork/game4.jpg"
            alt="palcement img6"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-4" width="390" height="390"
            src="/images/studentwork/student-work--sq13.jpg"
            alt="palcement img7"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-4" width="390" height="390"
            src="/images/studentwork/dj.jpg"
            alt="palcement img8"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-4" width="390" height="390"
            src="/images/studentwork/ction.jpg"
            alt="palcement img9"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
