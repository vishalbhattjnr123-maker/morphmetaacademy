import MetaSeo from "../Components/MetaSEO";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img10 from "/images/amam7.png";
import img11 from "/images/amam8.png";
import img12 from "/images/amam12.png";



export default function Amritsar() {
  const seo = {
    "title" : "Best Animation Courses for Students After 10th",
    "description" : "Explore the best animation courses for students after 10th! Kickstart your creative career with expert training in 2D & 3D animation, design, and visual effects. Join now and unleash your imagination!",
    "keyword" : "Best Animation Courses, Animation Courses After 10th, Animation for Students, Animation and Design Programs, Career in Animation, Animation Training for Beginners, Animation Classes for Teens, Animation Career After 10th"
};
  return (
    <>
        <MetaSeo meta={seo} />



        <div className="container-fluid">
             <section id="main_logo" className="banner z-0 position-relative">
        <div id="pop" className="">
          <Swiper
            loop
            spaceBetween={50}
            autoplay={true}
            navigation={true}
            pagination={{
              clickable: false,
            }}
            modules={[EffectFade, Navigation, Autoplay]}
            className="mySwiper zuri_padding"
          >
            <SwiperSlide>
              <div className="banner-slide-box  position-relative">
                <img
                  className="pop_img shadow-lg"
                  src={img12}
                  fetchpriority="low"
                  alt="Morph Meta Academy"
                />
                <div className="main d-flex align-items-center">
                  <div className="bannerr pb-5 w-50">
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-slide-box position-relative">
                <img
                  className="pop_img shadow-lg"
                  src={img10}
                  fetchpriority="low"
                  alt="Morph Meta Academy"
                />
              
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-slide-box position-relative">
                <img
                  className="pop_img shadow-lg"
                  src={img11}
                  fetchpriority="low"
                  alt="Morph Meta Academy"
                />
                <div className="main d-flex align-items-center">
                  {/* <div className="bannerr w-50">
                    <p class="text2 py-1 new1font1">
                      “Design the Future, today!”
                    </p>
                    <br />
                    <h2 class="new1font lh-sm pb-2">
                      {" "}
                      Game Designs, Graphic Design & Video Editing Courses
                    </h2>
                    <p className="text-white pt-1 down_fs lh-1 pb-4">
                      {" "}
                      Dive into an immersive training program covering Game
                      Design, Metaverse, AI Gen, Virtual Reality & Blockchain.
                      Your innovative career starts now.
                    </p>
                    <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Free Demo</strong>
                        </button>
                      </a>
                    </div>
                  
                    <div className="mt-5">
                      <a
                        className="Btn10"
                        aria-label="contact"
                        href="/contact"
                      ></a>
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

</div>

    </>
  );
}
