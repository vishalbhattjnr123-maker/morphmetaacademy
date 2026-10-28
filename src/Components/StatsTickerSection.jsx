import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Building2,
  Sparkles,
  MonitorCheck,
  ShieldCheck,
  CheckCircle2,
  Phone,
  User,
  GraduationCap,
  Send,
  MessageCircle,
  AlertCircle
} from "lucide-react";

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "3D Animation & VFX Master",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    const params = {
      name: formData.name,
      phone: formData.phone,
      course: formData.course,
      message: `[Mobile Quick Demo Request] Student interested in ${formData.course}`,
    };

    if (window.emailjs) {
      window.emailjs
        .send("service_v6m01tl", "template_pz1gqmh", params)
        .then(() => {
          setStatus("success");
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          setStatus("success");
        });
    } else {
      setTimeout(() => {
        setStatus("success");
      }, 500);
    }
  };

  return (
    <section
      id="quick-demo-section"
      className="relative text-slate-100 border-y border-[#5a0505] py-12 md:py-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #450303 0%, #280202 50%, #120101 100%)",
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Top Trust Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-3 shadow-md">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>ISO 9001:2015 Certified • North India's Leading Institute</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Proven Industry Impact & <span className="text-[#F9B713]">Studio Excellence</span>
          </h2>
        </div>

        {/* ======================================================== */}
        {/* MOBILE-ONLY QUICK ENQUIRY / DEMO FORM (SIRF PHONE KE LIYE) */}
        {/* ======================================================== */}
        <div className="block md:hidden mb-8">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#2e0404] via-[#1c0202] to-[#120101] border-2 border-amber-500/40 p-5 shadow-2xl overflow-hidden">
            {/* Ambient decorative glows */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-red-600/20 rounded-full blur-xl pointer-events-none" />

            {status === "success" ? (
              <div className="text-center py-5 space-y-3 relative z-10">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-white">
                  Thank You, {formData.name}! 🎉
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed px-1">
                  Your free demo request for{" "}
                  <span className="text-amber-400 font-semibold">{formData.course}</span>{" "}
                  has been received. Our Amritsar advisor will call you shortly on{" "}
                  <span className="text-white font-semibold">{formData.phone}</span>.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/919988001737?text=${encodeURIComponent(
                      `Hi Morph Meta Academy Amritsar, I submitted a demo request for ${formData.course}. My name is ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp Now
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        phone: "",
                        course: "3D Animation & VFX Master",
                      });
                    }}
                    className="text-[11px] text-slate-400 hover:text-white underline pt-1"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
                <div className="text-center pb-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Free Demo Class & Fee Details</span>
                  </div>
                  <h3 className="text-lg font-black text-white tracking-tight">
                    Book Free Studio Demo
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    Amritsar Campus • 100% Practical Training
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-2.5 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Student Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your Full Name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#140101] border border-[#5a0808] focus:border-amber-400 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Mobile Number Field */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="10-digit Mobile Number"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#140101] border border-[#5a0808] focus:border-amber-400 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Course Select */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Select Course *
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      name="course"
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-[#140101] border border-[#5a0808] focus:border-amber-400 focus:outline-none text-white text-xs appearance-none transition-colors"
                    >
                      <option value="3D Animation & VFX Master">3D Animation & VFX Master</option>
                      <option value="Game Design & Unreal Engine 5">Game Design & Unreal Engine 5</option>
                      <option value="Graphic, Web & UI/UX Design">Graphic, Web & UI/UX Design</option>
                      <option value="Video Editing & Motion Graphics">Video Editing & Motion Graphics</option>
                      <option value="Filmmaking & Cinematography">Filmmaking & Cinematography</option>
                      <option value="Fashion & Interior Design">Fashion & Interior Design</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 hover:from-amber-300 hover:to-red-500 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Book Free Demo & Get Fees</span>
                    </>
                  )}
                </button>

                {/* Direct Call Quick Link */}
                <div className="pt-1 flex items-center justify-center gap-1.5 text-center">
                  <span className="text-[11px] text-slate-400">Prefer direct call?</span>
                  <a
                    href="tel:+919988001737"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 underline"
                  >
                    <Phone className="w-3 h-3 text-amber-400" />
                    +91 99880 01737
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE STATS: SLEEK 2x2 GRID (COMPACT FOR PHONE) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 gap-3 mb-8 md:hidden">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={`mob-stat-${idx}`}
                className="p-3.5 rounded-xl bg-[#240303]/90 border border-[#6b0808]/80 shadow-md text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400 mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl font-black bg-gradient-to-r from-amber-400 via-rose-300 to-red-400 bg-clip-text text-transparent leading-none mb-1">
                  {stat.number}
                </div>
                <h4 className="text-xs font-bold text-white leading-tight mb-0.5">
                  {stat.title}
                </h4>
                <p className="text-[10px] text-slate-400 leading-snug line-clamp-2">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* DESKTOP STATS: 4-COLUMN CARDS (UNCHANGED FOR DESKTOP) */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
