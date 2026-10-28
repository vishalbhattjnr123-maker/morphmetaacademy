import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, ArrowRight, Building2, Sparkles, TrendingUp } from "lucide-react";

const RECRUITER_LOGOS = [
  { name: "Tata Elxsi", logo: "/images/tataElxsi1695273501366.webp" },
  { name: "DNEG", logo: "/images/dneg1693289872365.webp" },
  { name: "Wackytoon", logo: "/images/wackytoon1693289836774.webp" },
  { name: "Pixeltek", logo: "/images/pixeltek1695274283689.webp" },
  { name: "Liminal Studios", logo: "/images/liminalStudios1695274344862.webp" },
  { name: "Probability Gaming", logo: "/images/probabilityGaming1695274085932.webp" },
  { name: "Ananta Games", logo: "/images/anantaGames1695274053573.webp" },
  { name: "Firefly Studios", logo: "/images/fireflyStudios1695273234837.webp" },
  { name: "HammerPlay", logo: "/images/hammerPlay1693290074962.webp" },
  { name: "GameOn", logo: "/images/gameon1695274314060.webp" },
  { name: "Exigent Game Art", logo: "/images/exigentGameArt1695274119718.webp" },
  { name: "BluOcean", logo: "/images/bluOcean1695274027985.webp" },
];

const PLACEMENT_PILLARS = [
  {
    title: "Industry Showreel Building",
    desc: "Mentors guide students in curating capstone demo reels aligned with studio hiring rubrics."
  },
  {
    title: "Mock Technical Interviews",
    desc: "Rigorous preparation through studio test simulations, creative briefs, and feedback sessions."
  },
  {
    title: "Direct Studio Introductions",
    desc: "Active networking with gaming studios, VFX production facilities, and advertising agencies."
  },
  {
    title: "Lifelong Alumni Mentorship",
    desc: "Access to ongoing career guidance, freelance leads, and senior alumni networking across India."
  }
];

export default function PlacementRecruitersSection() {
  return (
    <section
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #450303 0%, #250202 50%, #120101 100%)",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Career Pathways & Studio Connections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Placement Mentorship & <span className="text-[#FA9160]">Industry Reach</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Morph Academy provides dedicated placement assistance designed to turn creative technical skills into sustainable careers across animation studios, game companies, and media houses.
          </p>
        </div>

        {/* Placement Panoramic Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-2xl md:rounded-3xl overflow-hidden border border-[#6b0808] shadow-2xl bg-[#140101]"
        >
          <img
            src="/images/banner-placement.png"
            alt="Morph Academy Placement - Learn. Earn. Grow"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </motion.div>

        {/* 4 Placement Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PLACEMENT_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 hover:border-red-500 hover:bg-[#340505] shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400 mb-4 font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-amber-400">{pillar.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Studio Logos Grid */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#1c0202] border border-[#6b0808] shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Studios & Companies Where Our Alumni Excel</h3>
            <p className="text-xs text-slate-300 max-w-2xl mx-auto">
              Our students and alumni have earned opportunities with esteemed creative houses, gaming studios, and digital agencies across the industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
            {RECRUITER_LOGOS.map((studio, idx) => (
              <div
                key={idx}
                className="h-24 p-3 rounded-xl bg-white border border-[#6b0808]/50 hover:border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-105 group shadow-md"
                title={studio.name}
              >
                <img
                  src={studio.logo}
                  alt={`${studio.name} Logo`}
                  className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/best-job-placement-academy-in-Amritsar"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2a0404] border border-[#6b0808] text-white hover:text-amber-300 hover:border-red-400 shadow-md transition-all"
            >
              <span>Explore Complete Placement Details</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
