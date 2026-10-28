import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Building2, Sparkles, MonitorCheck, Film, ShieldCheck, CheckCircle2 } from "lucide-react";

const STATS = [
  {
    icon: Award,
    number: "25+",
    suffix: "Years",
    title: "Creative Legacy",
    desc: "Pioneering animation, VFX & multimedia education in North India since 2000.",
  },
  {
    icon: Users,
    number: "10,000+",
    suffix: "Alumni",
    title: "Careers Launched",
    desc: "Graduates working in leading animation studios, gaming houses & production agencies.",
  },
  {
    icon: Building2,
    number: "50+",
    suffix: "Studios",
    title: "Recruiting Network",
    desc: "Active placement network with top Indian and international studio partners.",
  },
  {
    icon: MonitorCheck,
    number: "100%",
    suffix: "Practical",
    title: "Studio Lab Training",
    desc: "High-end RTX workstations, cinema camera rigs, dual-screen editing suites & VR bays.",
  },
];

const SOFTWARE_TOOLS = [
  { name: "Autodesk Maya", cat: "3D Animation", color: "#0696D7" },
  { name: "Unreal Engine 5", cat: "Next-Gen Gaming", color: "#0E1128" },
  { name: "Blender 4.0", cat: "3D & CGI", color: "#EA7600" },
  { name: "DaVinci Resolve", cat: "Color & Post", color: "#D7373F" },
  { name: "Foundry Nuke", cat: "Hollywood VFX", color: "#F9BE00" },
  { name: "Pixologic ZBrush", cat: "Digital Sculpting", color: "#2B2B2B" },
  { name: "Adobe Premiere Pro", cat: "Video Editing", color: "#9999FF" },
  { name: "Adobe After Effects", cat: "Motion Graphics", color: "#9999FF" },
  { name: "Figma", cat: "UI/UX Design", color: "#F24E1E" },
  { name: "Substance 3D", cat: "Game Texturing", color: "#FF4040" },
  { name: "Adobe Photoshop", cat: "Concept Art", color: "#31A8FF" },
  { name: "Unity 3D", cat: "Real-Time Dev", color: "#222C37" },
  { name: "Adobe Illustrator", cat: "Vector Branding", color: "#FF9A00" },
  { name: "Houdini FX", cat: "Dynamic Sim", color: "#FF5E00" },
];

export default function StatsTickerSection() {
  return (
    <section
      className="relative text-slate-100 border-y border-[#5a0505] py-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #450303 0%, #280202 50%, #120101 100%)",
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Top Trust Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-3 shadow-md">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>ISO 9001:2015 Certified • North India's Leading Institute</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Proven Industry Impact & <span className="text-[#F9B713]">Studio Excellence</span>
          </h2>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#240303]/90 border border-[#6b0808]/80 hover:border-red-500 hover:bg-[#340505] transition-all duration-300 hover:-translate-y-1 shadow-xl group relative overflow-hidden"
              >
                {/* Subtle corner light */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-500/15 rounded-full blur-xl group-hover:bg-red-500/25 transition-all" />

                <div className="w-12 h-12 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-amber-400 via-rose-300 to-red-400 bg-clip-text text-transparent tracking-tight">
                    {stat.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {stat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Infinite Software Marquee */}
      <div className="relative w-full overflow-hidden border-t border-[#5a0505] pt-8 pb-4 bg-[#140101]/95">
        {/* Subtle Edge Fade Masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-36 z-10"
          style={{ background: "linear-gradient(to right, #140101 15%, transparent 100%)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-36 z-10"
          style={{ background: "linear-gradient(to left, #140101 15%, transparent 100%)" }}
        />

        <div className="container max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs uppercase tracking-widest text-amber-400/90 font-bold">
            Master Official Studio Pipelines & Software Suites
          </p>
        </div>

        {/* Seamless Continuous Dual-Track Marquee (Zero Gap, Smooth & Steady) */}
        <div className="software-marquee-container">
          {/* Track 1 */}
          <div className="software-marquee-inner">
            {[...SOFTWARE_TOOLS, ...SOFTWARE_TOOLS].map((tool, idx) => (
              <div
                key={`track1-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#240303] border border-[#6b0808] hover:border-red-400 hover:shadow-lg transition-all group shrink-0"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: tool.color || "#dc2626" }}
                />
                <span className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors whitespace-nowrap">
                  {tool.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 px-1.5 py-0.5 rounded bg-[#380505] border border-[#6b0808] whitespace-nowrap">
                  {tool.cat}
                </span>
              </div>
            ))}
          </div>

          {/* Track 2 (Exact Duplicate for Continuous Loop) */}
          <div className="software-marquee-inner" aria-hidden="true">
            {[...SOFTWARE_TOOLS, ...SOFTWARE_TOOLS].map((tool, idx) => (
              <div
                key={`track2-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#240303] border border-[#6b0808] hover:border-red-400 hover:shadow-lg transition-all group shrink-0"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: tool.color || "#dc2626" }}
                />
                <span className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors whitespace-nowrap">
                  {tool.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 px-1.5 py-0.5 rounded bg-[#380505] border border-[#6b0808] whitespace-nowrap">
                  {tool.cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .software-marquee-container {
            display: flex;
            width: 100%;
            overflow: hidden;
            user-select: none;
          }
          .software-marquee-inner {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            gap: 1rem;
            padding-right: 1rem;
            animation: softwareMarqueeScroll 65s linear infinite;
            will-change: transform;
          }
          .software-marquee-container:hover .software-marquee-inner {
            animation-play-state: paused;
          }
          @keyframes softwareMarqueeScroll {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-100%, 0, 0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
