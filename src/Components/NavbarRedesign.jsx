import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu as MenuIcon,
  X as CloseIcon,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  Layers,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";

export default function NavbarRedesign() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();

  // Scroll detection for sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Academy sub-links
  const academyLinks = [
    { name: "Who We Are", path: "/morph-academy-animation-institute-in-Amritsar/" },
    { name: "Facility", path: "/school-of-animation-and-visual-effects-morph-academy" },
    { name: "Scholarship", path: "/scholarships-on-vfx-and-animation-course-in-Amritsar" },
    { name: "Franchise", path: "/animation-institute-franchise-opportunity-in-Amritsar/" },
  ];

  // Course mega-menu categories & items
  const courseColumns = [
    {
      title: "Creative / Web",
      link: "/creative-web",
      items: [
        { name: "Graphics Designing", path: "/course/graphics-designing-institute-in-Amritsar/" },
        { name: "Web Designing", path: "/course/web-designing-course-in-Amritsar/" },
        { name: "Digital Marketing", path: "/course/top-digital-marketing-course-training-in-Amritsar/" },
        { name: "UI / UX Design", path: "/course/ui-ux-design-course-in-Amritsar-with-job-placements" },
        { name: "Fashion CAD", path: "/course/fashion-designing-with-cad-institute-in-Amritsar/" },
        { name: "Graphics & Video", path: "/course/multimedia-graphic-and-video-design-program-for-job" },
      ],
    },
    {
      title: "Animation Course",
      link: "/animation-course",
      items: [
        { name: "Multimedia Master", path: "/course/best-animation-and-multimedia-institute-in-india" },
        { name: "Animation & VFX", path: "/course/top-3d-animation-course-vfx-course-with-job" },
        { name: "Master in Visual Effects", path: "/course/visual-effects-courses-in-Amritsar/" },
        { name: "Degree In Animation", path: "/course/Degree-in-Animation-Courses-and-Colleges-in-Amritsar-India" },
        { name: "3D Animation Film Making", path: "/course/3D-Animation-Film-Making-Course-in-Amritsar-india" },
        { name: "ARCHI. Walkthrough", path: "/course/best-interior-architecture-designing-course-in-Amritsar/" },
      ],
    },
    {
      title: "Film Course",
      link: "/film-course",
      items: [
        { name: "Film Making & Direction", path: "/course/best-filmmaking-and-direction-schools-and-courses-in-india" },
        { name: "Photography", path: "/course/best-photography-courses-and-schools-colleges-and-institutes-in-india" },
        { name: "Cinematography", path: "/course/best-cinematography-videography-course-in-Amritsar/" },
        { name: "Video Editing", path: "/course/top-video-editing-courses-and-classes-in-india" },
        { name: "Post Production", path: "/course/video-editing-post-production-in-film-and-tv-colleges-in-india" },
        { name: "Music Production", path: "/course/music-production-course-in-Amritsar/" },
      ],
    },
    {
      title: "Gaming Course",
      link: "/gaming-cousre",
      items: [
        { name: "Games Designing", path: "/course/top-game-design-and-development-course-in-india" },
        { name: "Unity Game Design", path: "/course/master-game-development-with-our-unity-3d-course-and-academy" },
        { name: "Unreal Game Course", path: "/course/game-development-course-using-unreal-engine-certification-institute" },
        { name: "Game Art & Develop", path: "/course/game-development-courses-and-certifications-with-live-training" },
        { name: "NFT Game Development", path: "/course/nft-game-development-and-web3-gamefi-course-and-training" },
        { name: "Play To Earn NFT Game Development", path: "/course/play-to-earn-nft-game-development-course-and-training-institute" },
      ],
    },
    {
      title: "Metaverse & VR",
      link: "/metaverse-course",
      items: [
        { name: "Animation, AR/VR & Metaverse", path: "/course/ar-vr-and-metaverse-course-at-morph-academy" },
        { name: "Virtual Reality", path: "/course/virtual-reality-course-training-institutes-in-india" },
        { name: "AR/VR Technologies", path: "/course/ar-and-vr-technologies-training-in-Amritsar-india" },
        { name: "Metaverse and Web 3.0", path: "/course/best-metaverse-and-web-3.0-course-at-morph-academy" },
        { name: "Animation & Metaverse", path: "/course/animation-vfx-and-metaverse-course-and-classes-in-Amritsar" },
        { name: "AI Generative Art", path: "/course/top-ai-generative-art-training-in-Amritsar-india" },
      ],
    },
    {
      title: "Job Ready Course",
      link: "/job-course",
      items: [
        { name: "Maya Pro", path: "/course/maya-courses-and-classes-for-3d-animation" },
        { name: "Max Pro", path: "/course/autodesk-3ds-max-courses-and-certifications-at-Amritsar/" },
        { name: "Rotoscoping", path: "/course/rotoscoping-courses-and-certifications-in-Amritsar" },
        { name: "Cinema 4d Pro", path: "/course/top-cinema-4d-courses-and-classes-collages-in-Amritsar" },
        { name: "Blender Pro", path: "/course/3d-animation-course-with-blender-in-Amritsar" },
        { name: "Design Pro", path: "/course/professional-graphic-design-courses-with-certificates" },
      ],
    },
  ];

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          background: isSticky
            ? "linear-gradient(to right, rgba(107, 5, 5, 0.98) 0%, rgba(45, 2, 2, 0.98) 50%, rgba(16, 1, 1, 0.99) 100%)"
            : "linear-gradient(to right, rgba(123, 5, 5, 0.98) 0%, rgba(55, 3, 3, 0.98) 50%, rgba(16, 1, 1, 0.99) 100%)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: isSticky ? "0 4px 24px rgba(0, 0, 0, 0.65)" : "0 2px 16px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Top Announcement & Direct Contacts Ribbon (Desktop >= 1024px Only) */}
        {!isSticky && (
          <div
            className="hidden lg:block w-full border-b border-red-950/60 py-1.5 px-4 text-xs select-none"
            style={{
              background: "linear-gradient(90deg, #630202 0%, #8b0000 50%, #4a0000 100%)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "6px 16px",
              fontSize: "12px",
            }}
          >
            <div
              className="container max-w-7xl mx-auto flex items-center justify-between"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <div className="flex items-center gap-4" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fcd34d" }}>
                  <MapPin className="w-3.5 h-3.5" style={{ width: "14px", height: "14px" }} />
                  <span>SCO 105, 4th Floor, Ranjit Avenue, Amritsar</span>
                </span>
                <span className="text-red-300 hidden xl:inline" style={{ color: "rgba(255, 255, 255, 0.4)" }}>|</span>
                <span className="hidden xl:flex items-center gap-1.5 text-white/90" style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255, 255, 255, 0.9)" }}>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" style={{ width: "14px", height: "14px", color: "#fcd34d" }} />
                  <span>Admissions Open 2026-27: 3D Animation, VFX & Unreal Engine 5</span>
                </span>
              </div>

              <div className="flex items-center gap-5" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <a
                  href="tel:+919988001737"
                  className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-bold text-white text-decoration-none"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "#ffffff", textDecoration: "none" }}
                  title="Direct Call to Morph Meta Academy Admissions"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" style={{ width: "14px", height: "14px", color: "#fcd34d" }} />
                  <span>+91 99880 01737</span>
                </a>
                <a
                  href="https://wa.me/919501489999?text=Hello%20Morph%20Meta%20Academy%20Amritsar%2C%20I%20am%20interested%20in%20a%20course."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors font-semibold text-decoration-none"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "#a7f3d0", textDecoration: "none" }}
                  title="Chat with Morph Meta Academy Amritsar on WhatsApp"
                >
                  <svg style={{ width: "15px", height: "15px", fill: "#a7f3d0", display: "inline-block" }} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main Navbar Bar */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isSticky ? "h-16" : "h-16 md:h-[70px]"
            }`}
          >
            {/* 1. Brand Logo */}
            <Link
              to="/"
              className="flex items-center text-decoration-none group flex-shrink-0"
              style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
              aria-label="Morph Meta Academy Homepage"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src="/images/logonew.png"
                alt="Morph Academy"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "44px", width: "auto", display: "block" }}
              />
            </Link>

            {/* 2. Desktop Navigation Links (>= 1024px) */}
            <nav
              role="navigation"
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-100"
            >
              {/* Academy Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("academy")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === "academy"}
                  aria-haspopup="true"
                  onClick={() => setActiveDropdown(activeDropdown === "academy" ? null : "academy")}
                  className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer border-0 bg-transparent text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-lg px-2 ${
                    activeDropdown === "academy" ? "text-amber-300" : "text-slate-100 hover:text-amber-300"
                  }`}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: activeDropdown === "academy" ? "#fcd34d" : "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                  }}
                >
                  <span>Academy</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "academy" ? "rotate-180 text-amber-300" : "text-slate-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "academy" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-0 mt-2.5 rounded-2xl shadow-2xl z-50 text-left overflow-hidden bg-white"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        marginTop: "10px",
                        width: "260px",
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        borderRadius: "16px",
                        padding: "14px 10px",
                        boxShadow: "0 20px 45px rgba(0, 0, 0, 0.18)",
                        zIndex: 1000,
                      }}
                    >
                      <ul className="list-none p-0 m-0" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {academyLinks.map((link, idx) => (
                          <li key={idx} style={{ margin: "2px 0" }}>
                            {link.path.startsWith("http") ? (
                              <a
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:text-[#dc2626] hover:bg-slate-50 rounded-xl transition-all text-decoration-none"
                                style={{
                                  color: "#1e293b",
                                  fontSize: "14.5px",
                                  fontWeight: "600",
                                  padding: "9px 16px",
                                  borderRadius: "10px",
                                  display: "block",
                                  textDecoration: "none",
                                  transition: "all 0.15s ease",
                                }}
                              >
                                {link.name}
                              </a>
                            ) : (
                              <Link
                                to={link.path}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:text-[#dc2626] hover:bg-slate-50 rounded-xl transition-all text-decoration-none"
                                style={{
                                  color: "#1e293b",
                                  fontSize: "14.5px",
                                  fontWeight: "600",
                                  padding: "9px 16px",
                                  borderRadius: "10px",
                                  display: "block",
                                  textDecoration: "none",
                                  transition: "all 0.15s ease",
                                }}
                              >
                                {link.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Courses Mega-Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("courses")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === "courses"}
                  aria-haspopup="true"
                  onClick={() => setActiveDropdown(activeDropdown === "courses" ? null : "courses")}
                  className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer border-0 bg-transparent text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-lg px-2 ${
                    activeDropdown === "courses" ? "text-amber-300" : "text-slate-100 hover:text-amber-300"
                  }`}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: activeDropdown === "courses" ? "#fcd34d" : "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                  }}
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "courses" ? "rotate-180 text-amber-300" : "text-slate-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "courses" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      className="fixed inset-x-0 mx-auto rounded-2xl shadow-2xl z-50 text-left bg-white"
                      style={{
                        position: "fixed",
                        top: isSticky ? "68px" : "106px",
                        left: 0,
                        right: 0,
                        margin: "0 auto",
                        width: "min(1240px, calc(100vw - 32px))",
                        maxHeight: "82vh",
                        overflowY: "auto",
                        backgroundColor: "#ffffff",
                        borderRadius: "18px",
                        padding: "26px 32px",
                        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.22)",
                        zIndex: 1000,
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div
                        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6"
                        style={{
                          display: "grid",
                          gap: "24px",
                        }}
                      >
                        {courseColumns.map((col, idx) => (
                          <div key={idx} className="flex flex-col">
                            <Link
                              to={col.link}
                              onClick={() => setActiveDropdown(null)}
                              className="font-bold text-sm text-[#dc2626] hover:text-[#b91c1c] pb-2 mb-3 block text-decoration-none transition-colors border-b border-gray-100"
                              style={{
                                color: "#dc2626",
                                fontWeight: "700",
                                fontSize: "14.5px",
                                borderBottom: "1px solid #f1f5f9",
                                paddingBottom: "8px",
                                marginBottom: "12px",
                                textDecoration: "none",
                                display: "block",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {col.title}
                            </Link>

                            <ul className="space-y-1 list-none p-0 m-0" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                              {col.items.map((item, itemIdx) => (
                                <li key={itemIdx} style={{ margin: "2px 0" }}>
                                  <Link
                                    to={item.path}
                                    onClick={() => setActiveDropdown(null)}
                                    className="text-[13px] text-slate-700 hover:text-[#dc2626] block py-1 text-decoration-none transition-colors font-medium leading-snug"
                                    style={{
                                      color: "#334155",
                                      fontSize: "13px",
                                      fontWeight: "500",
                                      textDecoration: "none",
                                      display: "block",
                                      padding: "4px 0",
                                      lineHeight: "1.35",
                                      transition: "color 0.15s ease",
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Placement */}
              <Link
                to="/best-job-placement-academy-in-Amritsar"
                className="hover:text-amber-300 transition-colors text-decoration-none py-2"
                style={{ color: "#f1f5f9", textDecoration: "none" }}
              >
                Placement
              </Link>

              {/* Affiliations & Accreditations */}
              <Link
                to="/animation-and-multimedia-colleges-affiliations-and-accreditations"
                className="hover:text-amber-300 transition-colors text-decoration-none whitespace-nowrap py-2"
                style={{ color: "#f1f5f9", textDecoration: "none", whiteSpace: "nowrap" }}
              >
                Affiliations & Accreditations
              </Link>
            </nav>

            {/* 3. Desktop Actions (Admissions Phone + Contact CTA) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919988001737"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-amber-300 font-medium transition-colors text-decoration-none"
                style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#cbd5e1" }}
                title="Call Morph Meta Academy Amritsar Admissions"
              >
                <div
                  className="w-8 h-8 rounded-full bg-[#2b0404] border border-[#6b0808] flex items-center justify-center text-amber-400"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#2b0404",
                    border: "1px solid #6b0808",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f59e0b",
                  }}
                >
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-slate-400 leading-none" style={{ fontSize: "10px", color: "#94a3b8" }}>
                    Admissions
                  </span>
                  <span className="font-bold text-slate-100 text-xs" style={{ fontSize: "12px", color: "#f8fafc", fontWeight: "bold" }}>
                    +91 99880 01737
                  </span>
                </div>
              </a>

              <a
                href="#enquiry"
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer text-decoration-none transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  fontWeight: "bold",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(220, 38, 38, 0.4)",
                  border: "1px solid rgba(245, 184, 46, 0.3)",
                }}
              >
                <span>Contact Us</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>

            {/* 4. Mobile & Tablet Controls (< 1024px) */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3">
              {/* Quick Direct Call Button on Mobile */}
              <a
                href="tel:+919988001737"
                aria-label="Call Morph Academy Admissions"
                className="w-9 h-9 rounded-full bg-[#2b0404] border border-[#6b0808] flex items-center justify-center text-amber-400 hover:text-white transition-colors text-decoration-none shadow-sm flex-shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#2b0404",
                  border: "1px solid #6b0808",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f59e0b",
                  textDecoration: "none",
                }}
              >
                <Phone className="w-4 h-4 text-amber-400" />
              </a>

              {/* Quick WhatsApp Button on Mobile */}
              <a
                href="https://wa.me/919501489999?text=Hello%20Morph%20Meta%20Academy%20Amritsar%2C%20I%20am%20interested%20in%20a%20course."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-700/90 border border-emerald-500/60 flex items-center justify-center text-white transition-colors text-decoration-none shadow-sm flex-shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#047857",
                  border: "1px solid rgba(16, 185, 129, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <svg style={{ width: "17px", height: "17px", fill: "#ffffff" }} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Hamburger / Close Icon Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                className="w-10 h-10 rounded-xl bg-[#2b0404] border border-[#6b0808] text-amber-300 hover:text-white flex items-center justify-center cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors flex-shrink-0"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "#2b0404",
                  border: "1px solid #6b0808",
                  color: "#fcd34d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {mobileOpen ? (
                  <CloseIcon className="w-5 h-5 text-amber-300" />
                ) : (
                  <MenuIcon className="w-5 h-5 text-amber-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 5. Mobile & Tablet Navigation Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-[#120102]/98 backdrop-blur-2xl flex flex-col overflow-y-auto border-t border-[#6b0808] shadow-2xl"
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9998,
              backgroundColor: "rgba(18, 1, 2, 0.98)",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              borderTop: "1px solid #6b0808",
            }}
          >
            <div className="flex-1 px-4 py-5 space-y-4 max-w-lg mx-auto w-full">
              {/* Quick Contact Card inside Mobile Menu */}
              <div
                className="p-3.5 rounded-xl bg-[#240303] border border-[#6b0808] shadow-md flex items-center justify-between gap-3"
                style={{
                  backgroundColor: "#240303",
                  border: "1px solid #6b0808",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                    Amritsar Admissions
                  </span>
                  <a
                    href="tel:+919988001737"
                    className="text-white font-bold text-sm block mt-0.5 text-decoration-none"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    +91 99880 01737
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/919501489999?text=Hello%20Morph%20Meta%20Academy%20Amritsar%2C%20I%20am%20interested%20in%20a%20course."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-decoration-none text-white bg-emerald-700 border border-emerald-500/60 shadow-sm flex items-center gap-1.5"
                    style={{
                      backgroundColor: "#047857",
                      color: "#ffffff",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="#enquiry"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-decoration-none text-white bg-gradient-to-r from-red-600 to-rose-700 shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #dc2626 0%, #be123c 100%)",
                      color: "#ffffff",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Enquire
                  </a>
                </div>
              </div>

              {/* Vertical Navigation Links */}
              <div className="space-y-1.5 text-base font-semibold">
                {/* 1. Home Link */}
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 rounded-xl text-slate-100 hover:text-amber-300 hover:bg-[#250303] transition-colors text-decoration-none"
                  style={{
                    color: "#f8fafc",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    borderRadius: "10px",
                  }}
                >
                  <span>Home</span>
                </Link>

                {/* 2. Courses Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileSubmenu(mobileSubmenu === "courses" ? null : "courses")}
                    className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-slate-100 font-semibold cursor-pointer border-0 bg-transparent text-left hover:bg-[#250303] transition-colors"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "#f8fafc",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span>Courses</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600/30 text-amber-300 font-bold border border-red-500/40">
                        All Programs
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileSubmenu === "courses" ? "rotate-180 text-amber-300" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {mobileSubmenu === "courses" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3.5 space-y-4 my-2 bg-white rounded-2xl shadow-lg border border-gray-100"
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "16px",
                        padding: "16px 14px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        border: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      {courseColumns.map((col, idx) => (
                        <div key={idx} className="space-y-1">
                          <Link
                            to={col.link}
                            onClick={() => setMobileOpen(false)}
                            className="font-bold text-xs uppercase tracking-wider text-[#dc2626] block py-1 border-b border-gray-100 text-decoration-none"
                            style={{
                              color: "#dc2626",
                              fontSize: "12px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              borderBottom: "1px solid #f1f5f9",
                              paddingBottom: "4px",
                              marginBottom: "6px",
                              textDecoration: "none",
                              display: "block",
                            }}
                          >
                            {col.title}
                          </Link>

                          <div className="space-y-1 pl-1">
                            {col.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                className="block text-xs text-slate-700 hover:text-[#dc2626] py-1 text-decoration-none transition-colors"
                                style={{
                                  color: "#334155",
                                  fontSize: "13px",
                                  textDecoration: "none",
                                  display: "block",
                                  padding: "3px 0",
                                }}
                              >
                                • {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* 3. Academy Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileSubmenu(mobileSubmenu === "academy" ? null : "academy")}
                    className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-slate-100 font-semibold cursor-pointer border-0 bg-transparent text-left hover:bg-[#250303] transition-colors"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "#f8fafc",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span>Academy</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileSubmenu === "academy" ? "rotate-180 text-amber-300" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {mobileSubmenu === "academy" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3.5 space-y-1 my-2 bg-white rounded-2xl shadow-lg border border-gray-100"
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "16px",
                        padding: "14px 10px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        border: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      {academyLinks.map((link, idx) =>
                        link.path.startsWith("http") ? (
                          <a
                            key={idx}
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm font-semibold text-slate-800 hover:text-[#dc2626] py-1.5 px-3 rounded-xl hover:bg-slate-50 text-decoration-none"
                            style={{
                              color: "#1e293b",
                              fontSize: "13.5px",
                              fontWeight: "600",
                              textDecoration: "none",
                              padding: "6px 10px",
                              display: "block",
                            }}
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={link.path}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm font-semibold text-slate-800 hover:text-[#dc2626] py-1.5 px-3 rounded-xl hover:bg-slate-50 text-decoration-none"
                            style={{
                              color: "#1e293b",
                              fontSize: "13.5px",
                              fontWeight: "600",
                              textDecoration: "none",
                              padding: "6px 10px",
                              display: "block",
                            }}
                          >
                            {link.name}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </div>

                {/* 4. Placement Link */}
                <Link
                  to="/best-job-placement-academy-in-Amritsar"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 rounded-xl text-slate-100 hover:text-amber-300 hover:bg-[#250303] transition-colors text-decoration-none"
                  style={{
                    color: "#f8fafc",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    borderRadius: "10px",
                  }}
                >
                  <span>Placement</span>
                </Link>

                {/* 5. Affiliations & Accreditations Link */}
                <Link
                  to="/animation-and-multimedia-colleges-affiliations-and-accreditations"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 rounded-xl text-slate-100 hover:text-amber-300 hover:bg-[#250303] transition-colors text-decoration-none"
                  style={{
                    color: "#f8fafc",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    borderRadius: "10px",
                  }}
                >
                  <span>Affiliations & Accreditations</span>
                </Link>

                {/* 6. Contact Us Link */}
                <Link
                  to="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 rounded-xl text-amber-300 hover:text-white hover:bg-[#250303] transition-colors text-decoration-none"
                  style={{
                    color: "#fcd34d",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    borderRadius: "10px",
                  }}
                >
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Bottom Mobile Actions & Info */}
              <div
                className="pt-4 border-t border-[#6b0808] space-y-3"
                style={{ borderTop: "1px solid #6b0808", paddingTop: "16px", marginTop: "16px" }}
              >
                <a
                  href="#enquiry"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 rounded-xl font-bold text-center block text-sm text-decoration-none text-white shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #dc2626 0%, #8b0000 100%)",
                    border: "1px solid rgba(245, 184, 46, 0.4)",
                    color: "#ffffff",
                    padding: "12px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "block",
                    textDecoration: "none",
                    boxShadow: "0 4px 18px rgba(220, 38, 38, 0.4)",
                  }}
                >
                  ✨ Book a Free Demo Class
                </a>

                <div
                  className="flex items-center justify-center gap-2 text-xs text-slate-400"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    color: "#94a3b8",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>SCO 105, 4th Floor, Ranjit Avenue, Amritsar</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
