import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ExternalLink, Sparkles } from "lucide-react";

const INDUSTRY_METRICS = [
  {
    id: 1,
    metric: "₹45,000 Cr",
    accentColor: "#0284c7",
    description: "India's AVGC-XR sector (Animation, VFX, Gaming & XR) projected market size by 2025.",
    source: "FICCI-EY Report 2023",
  },
  {
    id: 2,
    metric: "$587 B",
    accentColor: "#16a34a",
    description: "Global Animation & VFX market projected value by 2030, creating millions of creative jobs worldwide.",
    source: "Grand View Research",
  },
  {
    id: 3,
    metric: "7,00,000+",
    accentColor: "#7c3aed",
    description: "Gaming-related employment opportunities generated across India in 2024.",
    source: "NASSCOM Gaming Report",
  },
  {
    id: 4,
    metric: "₹2.5–15 LPA",
    accentColor: "#0891b2",
    description: "Animator salary range in India — ₹2.5–4.5 LPA for freshers, ₹8–15 LPA with 3–5 years of experience.",
    source: "AVGC-XR Taskforce Report 2023",
  },
  {
    id: 5,
    metric: "5.9 M",
    accentColor: "#ea580c",
    description: "Digital marketing job openings projected globally by 2026.",
    source: "LinkedIn Jobs on the Rise",
  },
  {
    id: 6,
    metric: "2 Lakh",
    accentColor: "#2563eb",
    description: "Skilled AVGC-XR professionals India needs to produce annually by 2025.",
    source: "MIB India",
  },
];

export default function IndustryDataSection() {
  return (
    <section
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #3d0303 0%, #200101 50%, #100101 100%)",
      }}
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-bold tracking-widest uppercase mb-4 shadow-md">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>INDUSTRY DATA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            The Creative Career Opportunity in <span className="text-[#FA9160]">India</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            India's creative media and digital production landscape is experiencing unprecedented growth. Verified market research highlights soaring demand for trained animators, VFX compositors, and game artists.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_METRICS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group relative p-8 rounded-3xl bg-[#240303]/95 border border-[#6b0808]/80 hover:border-red-500 hover:bg-[#320404] transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Top Colored Accent Glow Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${item.accentColor} 0%, transparent 100%)`,
                }}
              />

              {/* Subtle radial glow inside card */}
              <div
                className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-15 group-hover:opacity-25 transition-opacity blur-2xl pointer-events-none"
                style={{ backgroundColor: item.accentColor }}
              />

              <div>
                {/* Big Metric Display */}
                <div
                  className="text-4xl lg:text-5xl font-black tracking-tight mb-4 transition-transform duration-300 group-hover:scale-102"
                  style={{ color: item.accentColor }}
                >
                  {item.metric}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer: Source & Link */}
              <div className="pt-4 border-t border-[#4a0505] flex items-center justify-between text-xs text-amber-300/80">
                <span className="font-medium text-amber-300/80">{item.source}</span>
                <span className="inline-flex items-center gap-1 text-slate-400 group-hover:text-amber-400 transition-colors cursor-pointer">
                  <span>Source</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
