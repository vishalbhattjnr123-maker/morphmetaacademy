"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const placements = [
  [
    "/images/image-90-29-min1693297496891.webp",
    "/images/image-87-291693220537418.webp",
    "/images/wackytoon1693289836774.webp",
    "/images/image-88-291693220655367.webp",
    "/images/liminalStudios1695274344862.webp",
    "/images/probabilityGaming1695274085932.webp",
    "/images/anantaGames1695274053573.webp",
    "/images/tataElxsi1695273501366.webp",
    "/images/image-97-291693309694125.webp",
    "/images/pixeltek1695274283689.webp",
    "/images/agencyEleven1001695273346482.webp",
    "/images/image-92-29-min1693309537590.png",
  ],
  [
    "/images/yfx1693289943101.webp",
    "/images/image-95-291693309649571.webp",
    "/images/uniplayDigital1693294937119.webp",
    "/images/fireflyStudios1695273234837.webp",
    "/images/dneg1693289872365.webp",
    "/images/hammerPlay1693290074962.webp",
    "/images/polycrab1695273390726.webp",
    "/images/crazyLadAnimationStudio1693290183426.webp",
    "/images/gameon1695274314060.webp",
    "/images/exigentGameArt1695274119718.webp",
    "/images/bluOcean1695274027985.webp",
    "/images/blueBerryFunPvtLtd1693290268442.webp",
  ],
];

export default function Placement_card() {
  return (

      <div >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-xl">
            Our Placement Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          <h2 className="text-lg md:text-1xl text-yellow-400 mt-3">
            Morph Academy connects students with top companies in Animation, VFX, Gaming, and Multimedia. Explore our esteemed placement partners below.
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          loop
          centeredSlides
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {placements.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {slide.map((src, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
                  >
                    <img
                      src={src}
                      alt="placement logo"
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  
  );
}
