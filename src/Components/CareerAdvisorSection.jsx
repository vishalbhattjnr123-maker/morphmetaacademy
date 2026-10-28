import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Sparkles, ArrowRight, CheckCircle2, ChevronRight, Award, Clock } from "lucide-react";

const CAREER_OPTIONS = [
  {
    id: "animation",
    title: "3D Animation & Hollywood VFX",
    tagline: "Character modelling, dynamic simulations & CGI effects",
    icon: "🎬",
    recommended: {
      course: "3D Animation & Visual Effects (VFX) Master",
      duration: "1 Year / 2 Years Degree",
      slug: "/animation-course",
      tools: ["Autodesk Maya", "Blender", "ZBrush", "Foundry Nuke", "Houdini"],
      jobRoles: ["3D Modeler", "Character Animator", "VFX Compositor", "Lighting Artist"],
      startingSalary: "₹3.5L - ₹8.5L / year",
    },
  },
  {
    id: "film",
    title: "Filmmaking, Direction & Video Editing",
    tagline: "Cinema camera rigs, storytelling, sound design & DaVinci grading",
    icon: "🎥",
    recommended: {
      course: "Film Making, Direction & Video Editing Diploma",
      duration: "6 Months / 1 Year",
      slug: "/film-course",
      tools: ["Cinema Rigs", "Premiere Pro", "DaVinci Resolve", "After Effects"],
      jobRoles: ["Film Director", "Cinematographer", "Post-Production Editor", "Colorist"],
      startingSalary: "₹3.0L - ₹7.0L / year",
    },
  },
  {
    id: "game",
    title: "Game Design & Unreal Engine 5",
    tagline: "Real-time game environments, gameplay mechanics & VR worlds",
    icon: "🎮",
    recommended: {
      course: "Game Design & Unreal Engine 5 Real-Time Master",
      duration: "1 Year / 18 Months",
      slug: "/gaming-cousre",
      tools: ["Unreal Engine 5", "Unity 3D", "Substance Painter", "Blender"],
      jobRoles: ["Unreal Level Designer", "Game Artist", "3D Environment Artist", "Unity Dev"],
      startingSalary: "₹4.0L - ₹10.0L / year",
    },
  },
  {
    id: "design",
    title: "Graphic Design, Branding & UI/UX",
    tagline: "Commercial branding, packaging, Figma prototypes & web apps",
    icon: "🎨",
    recommended: {
      course: "Graphic Design & UI/UX Design Professional Diploma",
      duration: "6 Months / 1 Year",
      slug: "/creative-web",
      tools: ["Photoshop", "Illustrator", "Figma", "Adobe InDesign"],
      jobRoles: ["Brand Designer", "UI/UX Designer", "Product Designer", "Visual Artist"],
      startingSalary: "₹3.0L - ₹6.5L / year",
    },
  },
];

const ELIGIBILITY_OPTIONS = [
  { id: "10th", label: "After 10th (Foundation Diploma)" },
  { id: "12th", label: "After 12th (Degree / Pro Diploma)" },
  { id: "grad", label: "College / Graduate (Job Track)" },
  { id: "pro", label: "Working Professional (Upskill)" },
];

export default function CareerAdvisorSection() {
  const [selectedCareer, setSelectedCareer] = useState(CAREER_OPTIONS[0]);
  const [selectedElig, setSelectedElig] = useState("12th");

  return (
    <section
      className="py-20 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #450303 0%, #250202 50%, #120101 100%)",
      }}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-3 shadow-md">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Career Roadmap Advisor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Find Your Ideal <span className="text-[#FA9160]">Creative Career Path</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Not sure which course is right for you? Select your creative passion and educational background to instantly discover your recommended training roadmap in Amritsar.
          </p>
        </div>

        {/* Interactive 2-Column Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Selection Options (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {/* Step 1: Creative Passion */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#380505] border border-[#6b0808] text-amber-400 text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  Select Your Primary Creative Interest:
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {CAREER_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedCareer(opt)}
                    className={`p-4 rounded-xl text-left border transition-all duration-300 flex items-start gap-3.5 cursor-pointer ${
                      selectedCareer.id === opt.id
                        ? "bg-[#380505] border-red-500 shadow-xl ring-1 ring-red-400"
                        : "bg-[#240303]/90 border-[#6b0808]/80 hover:border-red-400 hover:bg-[#2d0404]"
                    }`}
                  >
                    <span className="text-2xl shrink-0 p-1.5 rounded-lg bg-[#180202] border border-[#6b0808]">
                      {opt.icon}
                    </span>
                    <div>
                      <h4
                        className={`text-sm font-bold ${
                          selectedCareer.id === opt.id ? "text-amber-300" : "text-white"
                        }`}
                      >
                        {opt.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                        {opt.tagline}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Educational Level */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#380505] border border-[#6b0808] text-amber-400 text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  Your Current Education / Experience:
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {ELIGIBILITY_OPTIONS.map((elig) => (
                  <button
                    key={elig.id}
                    type="button"
                    onClick={() => setSelectedElig(elig.id)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                      selectedElig === elig.id
                        ? "bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white border-transparent font-bold shadow-md scale-105"
                        : "bg-[#240303] border-[#6b0808] text-slate-200 hover:border-red-400 hover:text-white"
                    }`}
                  >
                    {elig.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tailored Career Recommendation Card (5 Cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCareer.id + selectedElig}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="h-full p-6 sm:p-8 rounded-3xl bg-[#200202] border-2 border-amber-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent Watermark */}
                <div className="absolute top-4 right-4 text-6xl opacity-10 pointer-events-none select-none">
                  {selectedCareer.icon}
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#380505] border border-[#6b0808] text-[#F9B713] text-[11px] font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Recommended Program</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-white leading-snug mb-3">
                    {selectedCareer.recommended.course}
                  </h4>

                  <div className="flex items-center gap-4 text-xs text-amber-300 font-medium mb-6">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedCareer.recommended.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      100% Placement Mentorship
                    </span>
                  </div>

                  {/* Software Stack */}
                  <div className="mb-5">
                    <p className="text-[11px] uppercase tracking-wider text-amber-400/90 font-bold mb-2">
                      Tools & Software Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCareer.recommended.tools.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-[#2d0505] border border-[#6b0808] text-xs text-slate-200 font-medium shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hiring Profiles */}
                  <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-wider text-amber-400/90 font-bold mb-2">
                      Industry Career Profiles:
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                      {selectedCareer.recommended.jobRoles.map((role, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#4a0505] flex flex-col sm:flex-row gap-3">
                  <Link
                    to={selectedCareer.recommended.slug}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#2d0505] hover:bg-[#3d0606] border border-[#6b0808] text-white hover:text-amber-300 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </Link>

                  <a
                    href="#enquiry"
                    className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 py-3 px-5 rounded-xl text-white font-bold text-xs uppercase tracking-wider text-center shadow-md hover:shadow-lg cursor-pointer transition-all"
                  >
                    Book Free Demo
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
