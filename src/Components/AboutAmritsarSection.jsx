import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Building2, Monitor, Award, Video } from "lucide-react";

export default function AboutAmritsarSection() {
  const campusImages = [
    {
      src: "/images/office2.jpg",
      title: "Amritsar Campus Reception & Counseling Lounge",
      tag: "Campus Reception",
      icon: Building2,
    },
    {
      src: "/images/office3.JPG",
      title: "Advanced 3D Animation & VFX Computer Lab",
      tag: "Animation Lab",
      icon: Monitor,
    },
    {
      src: "/images/office1.jpg",
      title: "Awards & Recognitions Gallery Wall",
      tag: "Awards Wall",
      icon: Award,
    },
    {
      src: "/images/office4.jpg",
      title: "Live Chroma Green Screen & Photography Studio",
      tag: "Chroma Studio",
      icon: Video,
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const whyMorphCards = [
    {
      title: "Multimedia & 3D Animation",
      desc: "Pioneering professional Animation, VFX, Game Design & Metaverse training in Amritsar with high-end RTX studio labs and real-world project pipelines.",
    },
    {
      title: "University-Affiliated",
      desc: "Every degree, diploma, and certificate syllabus is co-crafted with recognized universities and accredited by premier creative industry leaders.",
    },
    {
      title: "Personalized Mentorship",
      desc: "From day one, expert mentors assess your creative strengths and guide you 1-on-1 to build high-impact portfolios and showreels.",
    },
    {
      title: "100% Placement Record",
      desc: "Backed by 25+ years of industry trust, our dedicated placement cell connects Amritsar students with leading animation studios and IT giants.",
    },
  ];

  const currentImage = campusImages[activeImageIndex];

  return (
    <section
      id="about"
      className="py-20 md:py-24 text-slate-100 relative overflow-hidden border-t border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #180102 0%, #0d0102 50%, #150203 100%)",
      }}
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5B82E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Description, Why Morph Cards */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-3">
                <span className="text-[#FF2D7A]">About Us:</span> The Journey Behind Our Success
              </h2>
              <h3 className="text-lg sm:text-xl text-[#F5B82E] font-semibold tracking-wide">
                Bring Your Vision to Life with Expertise and Dedication
              </h3>
            </div>

            {/* Paragraphs focused on Morph Meta Academy Amritsar */}
            <div className="space-y-4 text-slate-300 text-base md:text-[17px] leading-relaxed">
              <p>
                <strong className="text-white font-bold">Morph Meta Academy Amritsar</strong>{" "}
                is Punjab’s premier institute for 3D Animation, Hollywood-Standard VFX, Game Design, Web & Graphic Arts, and immersive AR/VR & Metaverse technologies. Backed by a celebrated 25+ years legacy of excellence in creative technology, our Amritsar campus at Ranjit Avenue brings world-class studio training directly to aspiring artists and designers.
              </p>
              <p>
                All our Degree, Diploma, and Professional Certification courses are affiliated with recognized universities and aligned with international studio standards. We mentor every student 1-on-1, nurturing individual creative talents and providing dedicated 100% placement assistance to build fulfilling careers with top studios worldwide.
              </p>
            </div>

            {/* Why Morph Meta Academy Amritsar Heading */}
            <div className="pt-4">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F5B82E] text-center mb-6">
                Why Morph Meta Academy Amritsar?
              </h4>

              {/* 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 text-center">
                {whyMorphCards.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-5 md:p-6 rounded-2xl bg-[#120204]/90 border border-[#F5B82E]/80 shadow-lg hover:border-[#F5B82E] hover:bg-[#1a0306] transition-all"
                  >
                    <h5 className="text-base sm:text-lg font-bold text-[#F5B82E] mb-2.5">
                      {item.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-white leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/morph-academy-animation-institute-in-Amritsar/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF2D7A] via-rose-600 to-[#F5B82E] hover:opacity-95 shadow-lg shadow-pink-950/50 transition-all text-decoration-none"
              >
                <span>Read Full Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919988001737"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#1a0204] border border-[#6b0808] text-white hover:bg-[#250306] hover:border-[#F5B82E]/60 transition-all shadow-md text-decoration-none"
              >
                <span>Call Admissions: +91 99880 01737</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Amritsar Campus Real Photos Showcase */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Outer decorative amber-pink glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#FF2D7A]/25 via-[#F5B82E]/20 to-transparent blur-xl opacity-75 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#5a0505] shadow-2xl bg-[#140203]">
                {/* Top Badge: Campus Location */}
                <div
                  className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-md text-white"
                  style={{
                    backgroundColor: "rgba(24, 2, 6, 0.85)",
                    border: "1px solid rgba(245, 184, 46, 0.4)",
                  }}
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Morph Meta Academy • Amritsar</span>
                </div>

                {/* Animated Image Display */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage.src}
                    src={currentImage.src}
                    alt={currentImage.title}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-[380px] sm:h-[420px] object-cover block"
                    loading="lazy"
                  />
                </AnimatePresence>

                {/* Bottom Caption Overlay */}
                <div
                  className="absolute bottom-0 inset-x-0 p-3.5 z-20 text-xs font-semibold text-white flex items-center justify-between"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                  }}
                >
                  <span className="truncate pr-2">{currentImage.title}</span>
                  <span className="flex items-center gap-1 text-amber-300 flex-shrink-0 text-[11px]">
                    <Sparkles className="w-3 h-3" />
                    Ranjit Avenue
                  </span>
                </div>
              </div>

              {/* Campus Photo Selector Thumbnails */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {campusImages.map((img, idx) => {
                  const Icon = img.icon;
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative rounded-xl overflow-hidden p-1 text-center transition-all cursor-pointer border ${
                        isActive
                          ? "border-[#F5B82E] bg-[#2a0408] shadow-md ring-2 ring-[#F5B82E]/50"
                          : "border-slate-800 bg-[#120204]/70 hover:border-slate-600 opacity-75 hover:opacity-100"
                      }`}
                      style={{ outline: "none" }}
                    >
                      <div className="w-full h-12 rounded-lg overflow-hidden mb-1">
                        <img
                          src={img.src}
                          alt={img.tag}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-white truncate">
                        <Icon className="w-2.5 h-2.5 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{img.tag}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
