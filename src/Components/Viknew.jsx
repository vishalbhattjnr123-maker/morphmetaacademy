import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

const images = [
  "3d-game-deisghns-studio-serivces.jpg",
  "super-animation-modeling-studio-in-india.jpg",
  "metaverse-services-in-india.jpg",
  "VFX-course-training.jpg",
  "3d-charactor-modlling-soltuin.jpg",
  "3d-animation-studio-chandigarh.jpg",
  "Spider-man-design-services-development-company-in-india.jpg",
  "graphics-deisgns-ui-ux-designs-services-company-in-india.jpg"
];

const Viknew = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) swiperInstance.destroy(true, true);

    const swiper = new Swiper(".swiper-container", {
      modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
      slidesPerView: getSlidesPerView(),
      loop: true,
      centeredSlides: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      },
    });

    setSwiperInstance(swiper);

    const handleResize = () => {
      swiper.params.slidesPerView = getSlidesPerView();
      swiper.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      swiper.destroy();
    };
  }, []);

  function getSlidesPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 3;
    return 5;
  }

  return (
  <section className=" overflow-hidden">
  <div className="container  mx-auto px-4">
   

    <div className="swiper-container relative overflow-hidden px-2">
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div key={index} className="swiper-slide flex justify-center px-2">
            <div className="overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-blue/50">
              <img
                src={`/images/section/${image}`}
                alt={`Studio work ${index + 1}`}
                className="w-full h-60 md:h-72 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="swiper-pagination mt-6"></div>

      {/* Navigation buttons */}
      <div className="swiper-button-prev text-white"></div>
      <div className="swiper-button-next text-white"></div>
    </div>
  </div>
</section>

  );
};

export default Viknew;
