import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowRight, Sparkles, X, Layers, Cpu, Award } from "lucide-react";

const STUDENT_PROJECTS = [
  {
    id: 1,
    title: "Cinematic Character Sculpt & Rig",
    category: "3d",
    categoryLabel: "3D Animation",
    student: "Amritsar 3D Batch Alumni",
    image: "/images/studentwork/hanuman.jpg",
    tools: "Autodesk Maya & ZBrush",
    desc: "Detailed anatomical digital sculpting, high-resolution texturing, and dynamic muscle rigging for cinematic production.",
  },
  {
    id: 2,
    title: "Sci-Fi Game Environment & Real-Time Lighting",
    category: "game",
    categoryLabel: "Game Art",
    student: "Game Design Batch",
    image: "/images/studentwork/game4.jpg",
    tools: "Unreal Engine 5 & Blender",
    desc: "Real-time interactive environment with Lumen global illumination, modular asset modelling, and Nanite geometry.",
  },
  {
    id: 3,
    title: "Stylized Digital Artwork & Compositing",
    category: "digital",
    categoryLabel: "Digital Arts",
    student: "Visual Arts Alumni",
    image: "/images/studentwork/ffirls.jpg",
    tools: "Photoshop & Blender",
    desc: "Concept character design, digital painting, and stylized lighting composition for commercial media.",
  },
  {
    id: 4,
    title: "Dynamic Action Choreography Scene",
    category: "3d",
    categoryLabel: "3D Animation",
    student: "Advanced Animation Project",
    image: "/images/studentwork/ction.jpg",
    tools: "Maya & Motion Capture Cleanup",
    desc: "High-energy martial arts character motion, cinematic camera pacing, and secondary physics simulations.",
  },
  {
    id: 5,
    title: "Hard-Surface Mechanical Vehicle Asset",
    category: "3d",
    categoryLabel: "3D Modeling",
    student: "Studio Production Batch",
    image: "/images/studentwork/student-work--sq12.jpg",
    tools: "3ds Max & Substance 3D",
    desc: "Precision hard-surface subdivision modelling, procedural PBR weathering, and studio asset lookdev.",
  },
  {
    id: 6,
    title: "Commercial Visual FX Composite & Grading",
    category: "vfx",
    categoryLabel: "VFX Compositing",
    student: "VFX Master Alumni",
    image: "/images/studentwork/student-work--sq13.jpg",
    tools: "Foundry Nuke & After Effects",
    desc: "Live-action green screen integration, multipass CGI compositing, motion tracking, and DaVinci color mastering.",
  },
  {
    id: 7,
    title: "Commercial Brand & Media Artwork",
    category: "digital",
    categoryLabel: "Digital Arts",
    student: "Graphic Design Batch",
    image: "/images/studentwork/dj.jpg",
    tools: "Photoshop & Illustrator",
    desc: "Creative entertainment media visuals, typography layout, and high-contrast commercial branding.",
  },
  {
    id: 8,
    title: "Cinematic Fantasy Environment",
    category: "game",
    categoryLabel: "Game Art",
    student: "Unreal Engine Batch",
    image: "/images/studentwork/mand-big.jpg",
    tools: "Unreal Engine 5 & Maya",
    desc: "Immersive architectural scale, atmospheric volumetric fog, and real-time cinematic environment design.",
  },
  {
    id: 9,
    title: "Character Lookdev & Expression Study",
    category: "3d",
    categoryLabel: "3D Animation",
    student: "Character Specialization",
    image: "/images/studentwork/hree.jpg",
    tools: "ZBrush & Arnold Renderer",
    desc: "Facial blendshapes, hyper-detailed skin pores, subsurface scattering shaders, and emotional expression study.",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Works" },
  { id: "3d", label: "3D Animation & Characters" },
  { id: "game", label: "Game Art & Unreal 5" },
  { id: "vfx", label: "VFX & Compositing" },
  { id: "digital", label: "Digital Concept Arts" },
];

export default function StudentShowcaseSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? STUDENT_PROJECTS
      : STUDENT_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #450303 0%, #250202 50%, #120101 100%)",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Student Production Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Student Showcase & <span className="text-[#FA9160]">Creative Portfolio</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Explore 3D characters, environment scenes, game assets, and VFX shots created by Morph students in Amritsar under veteran studio mentors.
            </p>
          </div>

          <div>
            <Link
              to="/animation-student-portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#240303] border border-[#6b0808] text-white hover:border-red-400 hover:text-amber-300 shadow-md transition-all"
            >
              <span>View All Portfolios</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-bold shadow-lg shadow-red-950/60 scale-105"
                  : "bg-[#240303] border border-[#6b0808] text-slate-200 hover:border-red-400 hover:text-white shadow-sm"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((item, idx) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-[#240303]/95 border border-[#6b0808]/80 hover:border-red-500 hover:bg-[#340505] transition-all duration-500 shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                {/* Image */}
                <div className="h-64 overflow-hidden relative bg-[#180202]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#180202]/95 backdrop-blur-md border border-[#6b0808] text-[10px] font-bold text-amber-300 uppercase tracking-wider shadow-sm">
                    {item.categoryLabel}
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#240303]/90 backdrop-blur-md border border-[#6b0808] text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5">
                  <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-300 mt-2">
                    <span className="text-slate-300">{item.student}</span>
                    <span className="text-amber-400 font-medium">{item.tools}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deluxe Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#1e0202] border border-[#6b0808] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-[#5a0505] bg-[#280303] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-[#380505] border border-[#6b0808] text-white flex items-center justify-center hover:bg-[#500707] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image */}
              <div className="relative max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[60vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Modal Footer Details */}
              <div className="p-5 bg-[#250303] border-t border-[#5a0505] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-slate-200 max-w-xl leading-relaxed">
                    {selectedProject.desc}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-amber-400 font-medium">
                    <span>Student: {selectedProject.student}</span>
                    <span>•</span>
                    <span>Tools: {selectedProject.tools}</span>
                  </div>
                </div>

                <a
                  href="#enquiry"
                  onClick={() => setSelectedProject(null)}
                  className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg transition-all"
                >
                  Learn This Skill
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
