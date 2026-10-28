"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const courses = [
  {
    title: "Animation & VFX",
    desc: "Animation and VFX create captivating visuals, blending art and technology to bring stories and characters to life.",
    img: "/images/Animation-&-VFX-courses (1).jpg",
    link: "/course/top-3d-animation-course-vfx-course-with-job",
  },
  {
    title: "Degree In Animation",
    desc: "A Degree in Animation equips you with skills in storytelling, design, and technology for creating dynamic visuals.",
    img: "/images/Degree-in-Animation (1).jpg",
    link: "/course/Degree-in-Animation-Courses-and-Colleges-in-Chandigarh-India",
  },
  {
    title: "Video Editing",
    desc: "Master video editing essentials: enhance storytelling, apply effects, and create captivating content with industry-leading software.",
    img: "/images/Video-Editing-courses (1).jpg",
    link: "/course/top-video-editing-courses-and-classes-in-india",
  },
  {
    title: "Games Designing",
    desc: "Master game design principles, create engaging storylines, build immersive worlds, and develop interactive gameplay experiences.",
    img: "/images/Games-Design-courses (1).jpg",
    link: "/course/top-game-design-and-development-course-in-india",
  },
  {
    title: "Blender Pro",
    desc: "Master Blender with comprehensive training: modeling, sculpting, texturing, rendering, and animation for stunning 3D creations.",
    img: "/images/Blender-Pro-course (1).jpg",
    link: "/course/3d-animation-course-with-blender-in-chandigarh",
  },
  {
    title: "AR/VR & Metaverse",
    desc: "Learn animation, AR/VR, and Metaverse skills to craft captivating digital worlds and experiences for diverse audiences.",
    img: "/images/Animation-ARvR-&-Metaverse-courses (1).jpg",
    link: "/course/ar-vr-and-metaverse-course-at-morph-academy",
  },
  {
    title: "Design Pro",
    desc: "Design Pro course teaches advanced design skills, tools, and techniques for creating impactful visual solutions.",
    img: "/images/Design-Pro-courses (1).jpg",
    link: "/course/professional-graphic-design-courses-with-certificates",
  },
  {
    title: "Graphics & Video",
    desc: "Stunning visuals, dynamic animations, seamless editing, high-resolution graphics, immersive storytelling, professional video production.",
    img: "/images/Graphics-&-Video-courses (1).jpg",
    link: "/course/multimedia-graphic-and-video-design-program-for-job",
  },
  {
    title: "Photography",
    desc: "Master the art of capturing moments with technical skills and creative techniques in this comprehensive photography course.",
    img: "/images/Photography-course (1).jpg",
    link: "/course/best-photography-courses-and-schools-colleges-and-institutes-in-india",
  },
];

export default function RelatedCourse() {
  return (
    <section className="py-16 bg-dark">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
        Our Related Courses
      </h2>

      {/* Swiper */}
      <Swiper
        loop
        centeredSlides
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        navigation
        modules={[Navigation, Autoplay]}
        className="max-w-7xl mx-auto"
      >
        {courses.map((course, i) => (
          <SwiperSlide key={i}>
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              {/* Course Image */}
              <img
                src={course.img}
                alt={course.title}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

              {/* Course Info */}
              <div className="absolute bottom-0 p-6 flex flex-col justify-end h-full text-white">
                <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                <p className="text-sm opacity-90 mb-4 line-clamp-3">{course.desc}</p>
                <a
                  href={course.link}
                  className="inline-block w-max px-6 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:from-purple-500 hover:to-indigo-500 transition"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
