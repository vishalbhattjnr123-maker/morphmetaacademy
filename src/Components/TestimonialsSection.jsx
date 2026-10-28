import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, Quote, ExternalLink, CheckCircle, ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react";

// Official Google "G" Vector Icon
const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const GOOGLE_PROFILE_LINK = "https://share.google/ItChOVSp9BBU9C7G9";

const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: "Harmanpreet Singh",
    initial: "H",
    avatarBg: "#2563EB",
    course: "3D Animation & VFX Master",
    rating: 5,
    date: "1 month ago",
    text: "Staunch Morph Meta Academy in Amritsar is truly the best place if you want to build a career in 3D animation and Hollywood VFX. The practical training on high-end RTX workstations, software like Maya and Blender, and personal mentoring helped me build a studio-ready demo reel. Highly recommended!",
    verified: true,
  },
  {
    id: 2,
    name: "Navneet Kaur",
    initial: "N",
    avatarBg: "#DC2626",
    course: "Graphic & UI/UX Design",
    rating: 5,
    date: "3 weeks ago",
    text: "Amazing institute with genuine guidance! The teachers explain every concept from scratch, from typography to interactive Figma prototypes and brand guidelines. The campus environment at Ranjit Avenue is very professional, supportive, and motivating.",
    verified: true,
  },
  {
    id: 3,
    name: "Gurkirat Singh",
    initial: "G",
    avatarBg: "#059669",
    course: "Game Design & Unreal Engine 5",
    rating: 5,
    date: "2 months ago",
    text: "Finding an institute in Amritsar that actually teaches real-time Unreal Engine 5 and 3D game environment art was tough until I joined Morph Meta Academy. The hands-on project feedback and real game mechanics pipeline are truly industry standard.",
    verified: true,
  },
  {
    id: 4,
    name: "Simranjit Sharma",
    initial: "S",
    avatarBg: "#D97706",
    course: "Film Making & Video Editing",
    rating: 5,
    date: "1 month ago",
    text: "I enrolled for the professional filmmaking and video editing course. The studio setup, lighting rigs, cinema cameras, and Premiere Pro / DaVinci Resolve training are 100% practical. Undoubtedly the best multimedia academy in Amritsar.",
    verified: true,
  },
  {
    id: 5,
    name: "Rohan Mehra",
    initial: "R",
    avatarBg: "#8B0000",
    course: "Commercial Photography & Media",
    rating: 5,
    date: "4 months ago",
    text: "The practical photo walks, studio lighting sessions, and commercial editing projects helped me build my freelance portfolio within 3 months. Supportive mentors who are always accessible for doubt-clearing and career mentoring.",
    verified: true,
  },
  {
    id: 6,
    name: "Manpreet Kaur",
    initial: "M",
    avatarBg: "#7C3AED",
    course: "VFX Compositing & Rotoscopy",
    rating: 5,
    date: "2 weeks ago",
    text: "Joining Staunch Morph Meta Academy has been the turning point of my creative career. The faculty gives individual attention to every student and conducts live project mock sessions. 5/5 stars for infrastructure, studio lab, and placement support!",
    verified: true,
  },
  {
    id: 7,
    name: "Rahul Shetty",
    initial: "R",
    avatarBg: "#0891B2",
    course: "Animation & Visual Effects",
    rating: 5,
    date: "5 months ago",
    text: "Morph Academy is fantastic for hands-on learning! The instructors are not only skilled but also genuinely supportive. If you want to learn with the latest technology in creative digital media, this is definitely the place to be.",
    verified: true,
  },
  {
    id: 8,
    name: "Neha Sharma",
    initial: "N",
    avatarBg: "#DB2777",
    course: "Web & UI/UX Design",
    rating: 5,
    date: "3 months ago",
    text: "I loved my experience at Morph Academy. The curriculum is focused on real-world skills, live clients, and portfolio building. The staff are always ready to help you succeed. Highly recommended for anyone serious about digital design!",
    verified: true,
  },
  {
    id: 9,
    name: "Manish Kumar",
    initial: "M",
    avatarBg: "#4338CA",
    course: "3D Modeling & Game Art",
    rating: 5,
    date: "6 months ago",
    text: "The best part about Morph Meta Academy is the practical approach. We worked on real animation projects and used high-end software like Blender, Maya, and ZBrush. I even secured freelance projects right after my course completion!",
    verified: true,
  },
];

const VIDEO_STORIES = [
  { id: "cIz2i5r9cW0", title: "Student Journey in 3D Animation & Showreel Production" },
  { id: "NvSfFgBRDfM", title: "Hollywood VFX Production & Practical Studio Experience" },
  { id: "Wf-8XEr1jzU", title: "From Beginner to Creative Industry Professional" },
];

export default function TestimonialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #3d0303 0%, #200101 50%, #100101 100%)",
      }}
      id="google-reviews"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
            <GoogleIcon className="w-4 h-4" />
            <span>Official Google Reviews & Ratings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Creators Across Punjab: <span className="text-[#FA9160]">4.9/5 Rating</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Read verified feedback from our students on Google Maps who transformed their creative passions into high-paying studio careers at <strong className="text-white">Staunch Morph Meta Academy, Amritsar</strong>.
          </p>
        </div>

        {/* Google Official Rating Summary Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#240303]/95 border border-[#6b0808]/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Google Logo & Rating */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#380505] border border-[#6b0808] p-3 flex items-center justify-center shadow-md shrink-0">
              <GoogleIcon className="w-10 h-10" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-100 mt-1">
                Staunch Morph Meta Academy, Amritsar • <span className="text-emerald-400 font-bold">Excellent</span>
              </p>
              <p className="text-xs text-amber-300/80">
                Verified Google Business Profile • SCO 105, B-Block, Ranjit Avenue
              </p>
            </div>
          </div>

          {/* Right: Action Buttons to Google */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
            <a
              href={GOOGLE_PROFILE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-bold text-xs sm:text-sm hover:from-red-500 hover:to-amber-500 transition-all shadow-md text-decoration-none"
              style={{ textDecoration: "none" }}
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Read All Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={GOOGLE_PROFILE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2e0404] border border-[#6b0808] text-white hover:text-amber-300 hover:border-red-400 font-semibold text-xs sm:text-sm transition-all shadow-sm text-decoration-none"
              style={{ textDecoration: "none" }}
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Write a Google Review</span>
            </a>
          </div>
        </div>

        {/* Slider Controls Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Verified Student Google Reviews <span className="text-amber-300/80 hidden sm:inline">(Auto-sliding smoothly • Pause on hover)</span>
            </p>
          </div>

          {/* Manual Arrow Navigation */}
          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              aria-label="Previous Google Review"
              className="google-slider-prev w-10 h-10 rounded-full bg-[#240303] border border-[#6b0808] hover:border-red-400 hover:bg-[#380505] text-white hover:text-amber-300 flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Google Review"
              className="google-slider-next w-10 h-10 rounded-full bg-[#240303] border border-[#6b0808] hover:border-red-400 hover:bg-[#380505] text-white hover:text-amber-300 flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Smooth Slow Auto-Playing Google Reviews Slider */}
        <div className="google-reviews-slider mb-16">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".google-slider-prev",
              nextEl: ".google-slider-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-14"
          >
            {GOOGLE_REVIEWS.map((rev) => (
              <SwiperSlide key={rev.id} className="h-auto">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 shadow-xl flex flex-col justify-between group hover:border-red-500 hover:bg-[#340505] hover:-translate-y-1 transition-all duration-300 relative select-none">
                  {/* Top Google Badge & Verification */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md shrink-0"
                          style={{ backgroundColor: rev.avatarBg }}
                        >
                          {rev.initial}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-sm sm:text-base leading-tight group-hover:text-amber-300 transition-colors">
                            {rev.name}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-400 fill-blue-500/20" />
                            <span className="text-[11px] text-slate-300">Verified Google User</span>
                            <span className="text-[#6b0808]">•</span>
                            <span className="text-[11px] text-amber-300/80">{rev.date}</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-[#380505] border border-[#6b0808] p-1 flex items-center justify-center shadow-sm shrink-0" title="Google Verified Review">
                        <GoogleIcon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Star Row */}
                    <div className="flex items-center gap-1 mb-3 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-semibold text-amber-300 ml-1.5">5.0</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 italic">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Course Tag & Google Link */}
                  <div className="pt-3.5 border-t border-[#4a0505] flex items-center justify-between">
                    <span className="text-[11px] text-amber-300 font-semibold truncate max-w-[200px]">
                      🎓 {rev.course}
                    </span>
                    <a
                      href={GOOGLE_PROFILE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-slate-300 hover:text-amber-300 flex items-center gap-1 text-decoration-none transition-colors"
                    >
                      <span>Google</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Video Stories Subsection */}
        <div className="mt-4 pt-14 border-t border-[#5a0505]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold uppercase mb-3 shadow-md">
              <Play className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>Video Testimonials</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Watch Student Success Stories
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Hear firsthand from students about their journey, software learning, and portfolio creation at Morph Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_STORIES.map((vid, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-[#6b0808] bg-[#1a0202] shadow-xl group hover:border-red-500 transition-all"
              >
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-4 bg-[#240303] text-center border-t border-[#4a0505]">
                  <p className="text-xs font-semibold text-slate-200 line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {vid.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner: Invite User to Leave a Google Review */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#240303] border border-[#6b0808] text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Are You an Alumni or Current Student of Morph Meta Academy?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Share your genuine learning experience on Google Maps to guide future creators in Amritsar!
            </p>
          </div>
          <a
            href={GOOGLE_PROFILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm transition-all shadow-md hover:scale-105 shrink-0 text-decoration-none"
            style={{ textDecoration: "none" }}
          >
            <GoogleIcon className="w-4 h-4" />
            <span>Write a Google Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Swiper Pagination and Navigation Custom CSS */}
      <style>{`
        .google-reviews-slider .swiper-pagination-bullet {
          background: rgba(245, 184, 46, 0.35) !important;
          opacity: 1 !important;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .google-reviews-slider .swiper-pagination-bullet-active {
          background: #F9B713 !important;
          width: 26px !important;
          border-radius: 9999px !important;
          box-shadow: 0 0 10px rgba(249, 183, 19, 0.5) !important;
        }
        .google-reviews-slider .swiper-slide {
          height: auto;
          display: flex;
        }
      `}</style>
    </section>
  );
}
