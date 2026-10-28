import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowUpRight, Sparkles } from "lucide-react";

const COURSES_DATA = [
  {
    id: 1,
    category: "animation",
    title: "3D Animation & VFX Master",
    tag: "Degree & Diploma",
    image: "/images/vfx1.jpg",
    slug: "/animation-course",
    description:
      "Complete pipeline training in 3D character modeling, rigging, dynamic simulation & cinematic visual effects.",
    tools: ["Autodesk Maya", "Blender", "Houdini", "ZBrush", "Nuke"],
    badge: "Most Popular in Amritsar",
  },
  {
    id: 2,
    category: "film",
    title: "Film Making & Direction",
    tag: "Professional Diploma",
    image: "/images/Film-Making-&-Direction-courses (1).jpg",
    slug: "/film-course",
    description:
      "Hands-on studio production covering camera direction, cinema camera rigs, sound design & lighting setups.",
    tools: ["Cinema Rigs", "Lighting Setups", "Storyboarding", "Direction"],
    badge: "100% Studio Hands-On",
  },
  {
    id: 3,
    category: "film",
    title: "Video Editing & Color Grading",
    tag: "Certificate / Diploma",
    image: "/images/Degree-in-animation-and-VFX-Chandigarh.jpg",
    slug: "/course/top-video-editing-courses-and-classes-in-india",
    description:
      "Master multi-track timeline editing, sound synchronisation, motion graphics & DaVinci Resolve color mastering.",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition"],
    badge: "Job Ready Fast-Track",
  },
  {
    id: 4,
    category: "gaming",
    title: "Game Design & Unreal Engine 5",
    tag: "Advanced Specialization",
    image: "/images/Game-Designing-Course-and-training-india.jpg",
    slug: "/gaming-cousre",
    description:
      "Build next-gen 3D game worlds, character assets, real-time lighting with Lumen & Nanite, and gameplay.",
    tools: ["Unreal Engine 5", "Unity 3D", "Substance Painter", "Blender"],
    badge: "High Industry Demand",
  },
  {
    id: 5,
    category: "design",
    title: "Graphic Design & Visual Branding",
    tag: "Diploma Program",
    image: "/images/cre.jpg",
    slug: "/course/graphics-designing-institute-in-chandigarh/",
    description:
      "Commercial brand identities, packaging, creative advertising campaigns, typography & generative visual design.",
    tools: ["Photoshop", "Illustrator", "InDesign", "CorelDRAW"],
    badge: "Live Client Briefs",
  },
  {
    id: 6,
    category: "design",
    title: "UI/UX Design & Web Layouts",
    tag: "Professional Certificate",
    image: "/images/UI-UX-Designs (1).jpg",
    slug: "/course/ui-ux-design-course-in-chandigarh-with-job-placements",
    description:
      "User research, wireframing, high-fidelity interactive prototyping, design systems & modern responsive web UI.",
    tools: ["Figma", "Adobe XD", "Design Systems", "Web Layouts"],
    badge: "High Placement Rate",
  },
  {
    id: 7,
    category: "film",
    title: "Commercial Photography Master",
    tag: "Studio Certificate",
    image: "/images/photography-stu-morph-student-fashion.jpg",
    slug: "/best-film-making-and-photography-insititue-in-amritsar",
    description:
      "High-end studio strobe lighting, bridal & fashion portraiture, commercial product shoots & Lightroom raw workflows.",
    tools: ["DSLR / Mirrorless", "Studio Strobes", "Lightroom", "Photoshop"],
    badge: "Practical Shoots",
  },
  {
    id: 8,
    category: "gaming",
    title: "Metaverse & AR / VR Development",
    tag: "Emerging Tech Diploma",
    image: "/images/portray-virtual-reality-experience-designed-blue-monday.jpg",
    slug: "/metaverse-course",
    description:
      "Build immersive virtual worlds, spatial computing, augmented reality filters & interactive virtual production.",
    tools: ["Meta Quest 3", "ARKit / ARCore", "Unity XR", "Blender"],
    badge: "Future-Ready Skills",
  },
];

export default function CourseCardsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses =
    activeTab === "all"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === activeTab);

  const tabs = [
    { id: "all", label: "All Career Programs" },
    { id: "animation", label: "Animation & VFX" },
    { id: "film", label: "Filmmaking & Editing" },
    { id: "gaming", label: "Game Design & AR/VR" },
    { id: "design", label: "Graphic & UI/UX Design" },
  ];

  return (
    <section
      id="courses"
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #3d0303 0%, #220101 50%, #100101 100%)",
      }}
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Industry-Standard Educational Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Explore Verified Creative Courses in{" "}
            <span className="text-[#FA9160]">Amritsar</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From 3D Animation and Hollywood-standard Visual Effects to Game Development and Film Direction — choose accredited career programs with 100% placement mentorship.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-bold shadow-lg shadow-red-950/60 scale-105"
                    : "bg-[#240303] border border-[#6b0808] text-slate-200 hover:border-red-400 hover:text-white shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid - Bigger, spacious 3-column layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCourses.map((course, idx) => (
              <motion.article
                layout
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-[#240303]/95 border border-[#6b0808]/80 hover:border-red-500 hover:bg-[#320404] transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              >
                <div>
                  {/* Image Thumbnail - Taller & visually prominent */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#180202]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "brightness(1.02) contrast(1.02)" }}
                      loading="lazy"
                    />
                    {/* Subtle bottom vignette for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Tag badge - Top Left */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-lg bg-[#180202]/95 backdrop-blur-md border border-[#6b0808] text-xs font-bold text-amber-300 shadow-md">
                      {course.tag}
                    </div>

                    {/* Quality Badge - Bottom Right */}
                    {course.badge && (
                      <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-[#100101]/95 border border-amber-400/40 text-[11px] font-semibold text-amber-300 shadow-md">
                        {course.badge}
                      </div>
                    )}
                  </div>

                  {/* Card Content - Generous padding */}
                  <div className="p-6 sm:p-7">
                    {/* Accreditation Credibility - No duration */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3">
                      <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Govt / ISO Aligned Certification</span>
                    </div>

                    {/* Title: Big, bold & fully readable */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#FA9160] transition-colors leading-snug min-h-[3.75rem] flex items-center mb-3">
                      {course.title}
                    </h3>

                    {/* Description: Clear and readable */}
                    <p className="text-sm text-slate-300 leading-relaxed min-h-[3rem] mb-5">
                      {course.description}
                    </p>

                    {/* Software tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {course.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#380505] border border-[#6b0808] text-xs font-medium text-slate-200 whitespace-nowrap"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons - Spacious & tactile */}
                <div className="p-6 sm:p-7 pt-0 border-t border-[#4a0505] mt-4 flex items-center gap-3">
                  <Link
                    to={course.slug}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#2d0505] hover:bg-[#3d0606] border border-[#6b0808] hover:border-red-400 text-center text-sm font-bold text-white transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>

                  <a
                    href="#enquiry"
                    className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white px-5 py-3 rounded-xl text-center text-sm font-bold whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg transition-all"
                  >
                    Enquire Now
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
