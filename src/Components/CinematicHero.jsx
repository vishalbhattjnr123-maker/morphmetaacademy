import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Play, X, Phone } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    tag: "3D ANIMATION & CGI MASTERCLASS",
    heading: "3D Animation, VFX & Metaverse Courses",
    supporting: "Turn Your Creativity Into a Professional Career",
    image: "/images/vfx1.jpg",
    primaryCta: {
      text: "Explore Courses",
      link: "/animation-course",
    },
    secondaryCta: {
      text: "Call Now",
      link: "tel:+919988001737",
    },
    badge: "Industry Studio Curriculum • Maya & Blender Labs",
    tabLabel: "3D Animation & VFX",
  },
  {
    id: 2,
    tag: "HOLLYWOOD VFX & 3D ANIMATION",
    heading: "Master Visual Effects & 3D Animation",
    supporting: "Professional Character Modeling, Dynamic Simulation & Compositing Labs",
    image: "/images/VFX-course-in-aniimaiton.jpg",
    position: "center right",
    primaryCta: {
      text: "Explore VFX Courses",
      link: "/animation-course",
    },
    secondaryCta: {
      text: "Call Now",
      link: "tel:+919988001737",
    },
    badge: "High-End RTX Studio Labs • Houdini & Nuke",
    tabLabel: "Hollywood VFX",
  },
  {
    id: 3,
    tag: "AR/VR & METAVERSE REALITIES",
    heading: "Future-Ready AR/VR & Metaverse Design",
    supporting: "Build Real-Time Spatial Computing, Web 3.0 & Interactive Virtual Worlds",
    image: "/images/portray-virtual-reality-experience-designed-blue-monday.jpg",
    primaryCta: {
      text: "Explore Metaverse",
      link: "/metaverse-course",
    },
    secondaryCta: {
      text: "Call Now",
      link: "tel:+919988001737",
    },
    badge: "Oculus & Meta Quest Labs • Spatial Design",
    tabLabel: "AR/VR & XR",
  },
  {
    id: 4,
    tag: "CINEMATOGRAPHY & POST-PRODUCTION",
    heading: "Master Film Making & Cinematography",
    supporting: "Hands-on Direction, Cinema Camera Rigs, Sound Design & Video Editing",
    image: "/images/Photography-and-film-making-course-and-training.jpg",
    position: "center right",
    primaryCta: {
      text: "Explore Film Courses",
      link: "/film-course",
    },
    secondaryCta: {
      text: "Call Now",
      link: "tel:+919988001737",
    },
    badge: "Cinema Rig Setups • DaVinci & Premiere Pro",
    tabLabel: "Filmmaking",
  },
  {
    id: 5,
    tag: "DYNAMIC FX & GAME ART",
    heading: "Next-Gen Game Design & Dynamic Simulation",
    supporting: "Build High-Impact AAA Games, Dynamic FX & Real-Time Virtual Worlds",
    image: "/assets/images/dynamic-shot-capturing-gamer-action-with-focus-screen.jpg",
    position: "center",
    primaryCta: {
      text: "Explore Game Design",
      link: "/gaming-cousre",
    },
    secondaryCta: {
      text: "Call Now",
      link: "tel:+919988001737",
    },
    badge: "Unreal Engine 5 & Houdini Dynamics",
    tabLabel: "Game Art & FX",
  },
];

export default function CinematicHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showreelModalOpen, setShowreelModalOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const AUTOPLAY_DURATION = 3000; // 3 seconds

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay and progress bar
  useEffect(() => {
    if (isPaused || showreelModalOpen) return;

    const intervalStep = 50;
    const increment = (intervalStep / AUTOPLAY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          nextSlide();
          return 0;
        }
        return old + increment;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) nextSlide();
      else prevSlide();
    }
  };

  const slide = HERO_SLIDES[current];

  return (
    <section
      aria-label="Cinematic Featured Courses Slider"
      className="relative w-full overflow-hidden bg-[#080808] select-none"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "85vh",
        height: "92vh",
        maxHeight: "960px",
        overflow: "hidden",
        backgroundColor: "#080808",
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover object-center"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: slide.position || "center",
              display: "block",
              filter: "brightness(1.04) contrast(1.04)",
            }}
            loading={current === 0 ? "eager" : "lazy"}
          />

          {/* Subtle Balanced Gradient: Leaves 85%+ of the image clearly visible while keeping text ultra-legible */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.3) 45%, rgba(0,0,0,0.06) 100%)",
              zIndex: 2,
            }}
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, #620303 0%, rgba(16, 1, 1, 0.7) 12%, transparent 30%)",
              zIndex: 3,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Slide Content */}
      <div
        className="relative container max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-28 sm:pb-32 flex flex-col justify-center text-left"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          paddingTop: "100px",
          paddingBottom: "120px",
        }}
      >
        <div style={{ maxWidth: "780px" }}>

          {/* Heading */}
          <motion.h1
            key={`heading-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4"
            style={{
              color: "#ffffff",
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "16px",
              textShadow: "0 4px 20px rgba(0,0,0,0.8)",
            }}
          >
            {slide.heading}
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            key={`text-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-4 max-w-2xl"
            style={{
              color: "#e2e8f0",
              fontSize: "clamp(16px, 2.2vw, 22px)",
              lineHeight: 1.5,
              marginBottom: "16px",
              maxWidth: "680px",
            }}
          >
            {slide.supporting}
          </motion.p>

          {/* Badge & Placement Spec */}
          <motion.div
            key={`badge-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="text-xs sm:text-sm text-gold-400 font-semibold tracking-wide mb-7 flex flex-wrap items-center gap-2"
            style={{
              color: "#F5B82E",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#F5B82E",
                display: "inline-block",
                boxShadow: "0 0 8px #F5B82E",
              }}
            />
            <span>{slide.badge}</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="text-gray-300 hidden sm:inline font-medium">100% Placement Mentorship</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4"
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}
          >
            {slide.primaryCta.link.startsWith("#") ? (
              <a
                href={slide.primaryCta.link}
                className="btn-gold inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold shadow-xl cursor-pointer text-decoration-none"
                style={{
                  background: "linear-gradient(135deg, #FFC107 0%, #F5B82E 100%)",
                  color: "#080808",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 6px 20px rgba(245, 184, 46, 0.35)",
                }}
              >
                <span>{slide.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={slide.primaryCta.link}
                className="btn-gold inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold shadow-xl text-decoration-none"
                style={{
                  background: "linear-gradient(135deg, #FFC107 0%, #F5B82E 100%)",
                  color: "#080808",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 6px 20px rgba(245, 184, 46, 0.35)",
                }}
              >
                <span>{slide.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            {slide.secondaryCta && (
              <a
                href={slide.secondaryCta.link}
                title="Call Morph Academy Amritsar Helpline"
                className="btn-burgundy inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold backdrop-blur-md text-decoration-none cursor-pointer hover:scale-105 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #8B0000 0%, #4B0000 100%)",
                  color: "#ffffff",
                  border: "1px solid rgba(245, 184, 46, 0.4)",
                  padding: "14px 24px",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 15px rgba(139, 0, 0, 0.4)",
                }}
              >
                <Phone className="w-4 h-4 text-amber-300" style={{ width: "16px", height: "16px", color: "#FCD34D" }} />
                <span>{slide.secondaryCta.text}</span>
              </a>
            )}

            {/* Watch Showreel Button */}
            <button
              type="button"
              onClick={() => setShowreelModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm font-semibold bg-black/60 hover:bg-burgundy-900/80 border border-gold-400/30 hover:border-gold-400 text-gold-400 hover:text-white transition-all cursor-pointer backdrop-blur-md shadow-lg"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "13px 22px",
                borderRadius: "9999px",
                backgroundColor: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(245, 184, 46, 0.4)",
                color: "#F5B82E",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245, 184, 46, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Play className="w-3 h-3 text-gold-400 fill-gold-400" />
              </div>
              <span>Watch Showreel</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 30,
        }}
      >
        <div
          className="h-full bg-gradient-to-r from-gold-500 to-amber-300 transition-all duration-75 ease-linear"
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #FFC107 0%, #F5B82E 100%)",
          }}
        />
      </div>

      {/* Slide Controls (Prev / Next Arrows) */}
      <div
        className="absolute right-6 md:right-12 bottom-8 z-30 flex items-center gap-3"
        style={{
          position: "absolute",
          right: "32px",
          bottom: "32px",
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-11 h-11 rounded-full bg-[#240303]/90 hover:bg-[#4a0505] border border-[#6b0808] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(36, 3, 3, 0.9)",
            border: "1px solid rgba(107, 8, 8, 0.9)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
          }}
        >
          <ChevronLeft className="w-5 h-5 text-amber-400" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-11 h-11 rounded-full bg-[#240303]/90 hover:bg-[#4a0505] border border-[#6b0808] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(36, 3, 3, 0.9)",
            border: "1px solid rgba(107, 8, 8, 0.9)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
          }}
        >
          <ChevronRight className="w-5 h-5 text-amber-400" />
        </button>
      </div>

      {/* Pagination Indicators (Interactive Slide Tabs on Desktop, Dots on Mobile) */}
      <div
        className="absolute left-6 md:left-12 bottom-8 z-30 flex items-center gap-2"
        style={{
          position: "absolute",
          left: "32px",
          bottom: "32px",
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {HERO_SLIDES.map((s, idx) => (
          <button
            type="button"
            key={s.id}
            onClick={() => {
              setCurrent(idx);
              setProgress(0);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className="group transition-all"
            style={{
              padding: current === idx ? "7px 16px" : "6px 12px",
              borderRadius: "9999px",
              backgroundColor: current === idx ? "#6b0808" : "rgba(24, 2, 2, 0.85)",
              border: current === idx ? "1px solid #ef4444" : "1px solid rgba(107, 8, 8, 0.7)",
              color: current === idx ? "#ffffff" : "#cbd5e1",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              fontWeight: 700,
              boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: current === idx ? "#F5B82E" : "#94a3b8",
                display: "inline-block",
              }}
            />
            <span className="hidden md:inline">
              0{idx + 1} {s.tabLabel}
            </span>
            <span className="md:hidden">0{idx + 1}</span>
          </button>
        ))}
      </div>

      {/* Showreel Video Modal */}
      <AnimatePresence>
        {showreelModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              backgroundColor: "rgba(0,0,0,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setShowreelModalOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-[#140205] border border-gold-400/40 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#0e0204]"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px",
                  borderBottom: "1px solid rgba(245, 184, 46, 0.2)",
                  backgroundColor: "#0e0204",
                }}
              >
                <div className="flex items-center gap-2" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Play className="w-4 h-4 text-gold-400 fill-gold-400" />
                  <span className="font-bold text-white text-sm">Morph Meta Academy • Student Production Showreel</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowreelModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-burgundy-900 text-gray-300 hover:text-white flex items-center justify-center border border-gold-400/30 cursor-pointer"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#38000a",
                    border: "1px solid rgba(245, 184, 46, 0.3)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src="https://www.youtube.com/embed/cIz2i5r9cW0?autoplay=1"
                  title="Morph Meta Academy Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
