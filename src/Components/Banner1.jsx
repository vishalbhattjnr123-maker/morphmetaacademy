import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookIcon, Calendar1Icon, FastForwardIcon } from "lucide-react";

const slides = [
    {
    title: "VFX & Video Editing Training in Chandigarh",
    place: "Create Blockbuster Visual Effects",
    description:
      "Gain hands-on skills in CGI, green screen, and compositing to craft high-quality effects for movies and ads.",
    image: "/images/ai-gen-rative-coruse-and-training.jpg",
  },
  {
    title: "Animation Course in Chandigarh",
    place: "Master 2D & 3D Animation Skills",
    description:
      "Learn 2D & 3D animation, motion graphics, and industry tools to create stunning visuals for films, games, and digital media.",
    image: "/images/super-job-ready-course-and-training.jpg",
  },

  {
    title: "Photography Course in Chandigarh",
    place: "Capture Cinematic Masterpieces",
    description:
      "Master camera techniques, lighting, and editing to produce professional photos and cinematic videos.",
    image: "/images/Photography-and-film-making-course-and-training.jpg",
  },
  {
    title: "AR/VR Development Course in Chandigarh",
    place: "Step Into the Future of Technology",
    description:
      "Design and develop interactive AR/VR applications for gaming, education, and business solutions.",
    image: "/images/metaverse-ar-vr-designs-animation.jpg",
  },
  {
    title: "Degree And Job Oriented Courses",
    place: "Build Your Career with Industry Training",
    description:
      "Get practical skills, real projects, and placement support for a high-demand career in tech and design.",
    image: "/images/degree.jpg",
  },
  {
    title: "Graphic Designing Course in Chandigarh",
    place: "Design Stunning Visual Experiences",
    description:
      "Learn design principles, branding, and top tools to create impactful graphics and visual content.",
    image: "/images/6565.jpg",
  },
];

export default function CourseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

    // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, []);
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>


   <section className="relative w-full h-screen overflow-hidden hidden md:block">
  {/* Fixed Background with Parallax */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: `url(${slides[activeIndex].image})`,
      transform: `translateY(${offsetY * 0.3}px)`, // subtle parallax
    }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Info Box */}
  <div className="absolute inset-0 flex flex-col justify-center items-start text-left ms-10 z-20 px-6 md:px-12 max-w-3xl">
    <h3 className="text-xl font-semibold text-violet-400 mb-2">
      {slides[activeIndex].place}
    </h3>
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
      {slides[activeIndex].title}
    </h2>
    <p className="text-gray-200 text-lg md:text-xl mb-6">
      {slides[activeIndex].description}
    </p>
    <div className="flex gap-4">
      <a href="/contact-us">
        <button className="px-6 py-3 flex gap-3 bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
          <Calendar1Icon className="w-5 h-5" /> Free Demo
        </button>
      </a>
      <a href="/contact-us">
        <button className="px-6 py-3 flex gap-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
          <BookIcon className="w-5 h-5" /> Online Courses
        </button>
      </a>
    </div>
  </div>

  {/* Bottom Cards */}
  <div className="absolute bottom-10 hidden md:block w-full flex justify-center z-20 px-4">
    <motion.div className="flex items-center gap-4 md:gap-6">
      {slides.map((slide, idx) => {
        const isActive = idx === activeIndex;
        return (
          <motion.div
            key={idx}
            className={`relative rounded-xl overflow-hidden cursor-pointer border-3 ${
              isActive
                ? "border-gradient-to-r from-violet-500 to-blue-500"
                : "border-white/20 opacity-50 scale-90"
            }`}
            onClick={() => setActiveIndex(idx)}
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{
              scale: isActive ? 1.1 : 0.9,
              opacity: isActive ? 1 : 0.5,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-56 md:w-72 lg:w-80 h-40 md:h-52 lg:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent p-2 text-center">
              <h4 className="text-gray-100 font-semibold text-xs md:text-base">
                {slide.title}
              </h4>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>

  {/* Navigation Buttons */}
  <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 z-20">
    <button
      onClick={handlePrev}
      className="text-white bg-black/30 hover:bg-black/50 rounded-full p-3 shadow-lg"
    >
      <i className="fa-solid fa-arrow-left"></i>
    </button>
    <button
      onClick={handleNext}
      className="text-white bg-black/30 hover:bg-black/50 rounded-full p-3 shadow-lg"
    >
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</section>

<section className="relative w-full h-screen overflow-hidden block md:hidden">
  {/* Fixed Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: `url('/images/morph-banner.jpg')`, // replace with your image path
    }}
  ></div>

  {/* Overlay for dark tint */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>

  {/* Info Box */}
  <div className="absolute inset-0 flex flex-col justify-end items-center text-center z-20 px-6 pb-12">
    <h3 className="text-base font-semibold text-white mb-2">
      Learn Professional Animation in Chandigarh with Expert Training
    </h3>
    <h1 className="text-3xl font-extrabold mb-4 text-white leading-snug">
      Best Animation Course in Chandigarh
    </h1>
    <p className="text-gray-200 text-sm mb-6 max-w-md">
      Join the best animation course in Chandigarh. Get hands-on training in 2D, 3D, VFX, and multimedia with industry experts and boost your creative career.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <a href="/contact-us" className="flex-1 sm:flex-none">
        <button className="w-full px-6 py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
          <Calendar1Icon className="w-5 h-5" /> Free Demo
        </button>
      </a>
      <a href="/contact-us" className="flex-1 sm:flex-none">
        <button className="w-full px-6 py-3 flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
          <BookIcon className="w-5 h-5" /> Online Courses
        </button>
      </a>
    </div>
  </div>
</section>








</>
    
  );
}
