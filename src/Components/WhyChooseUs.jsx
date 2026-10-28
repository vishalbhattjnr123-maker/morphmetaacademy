import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Sparkles, FolderGit2, Users, Award, CheckCircle } from "lucide-react";

const REASONS = [
  {
    icon: Monitor,
    title: "Studio-Level Infrastructure",
    desc: "Train on high-performance RTX workstations, industry-standard dual-monitor editing bays, and dedicated VR testing equipment."
  },
  {
    icon: FolderGit2,
    title: "100% Practical, Project-Based Curriculum",
    desc: "Forget passive lectures. Every module involves creating real production assets, 3D models, visual effects shots, or game levels."
  },
  {
    icon: Users,
    title: "Veteran Industry Mentors",
    desc: "Learn from instructors with hands-on production experience in animation studios, advertising agencies, and gaming companies."
  },
  {
    icon: Sparkles,
    title: "Dedicated Showreel Mentorship",
    desc: "We focus heavily on your portfolio — the ultimate proof of your creative ability that studios evaluate during recruitment."
  },
  {
    icon: Award,
    title: "Recognized Certification Pathways",
    desc: "Earn government-aligned and ISO 9001:2015 accredited diplomas and degrees that hold weight across the creative industry."
  },
  {
    icon: Cpu,
    title: "Generative AI & Modern Workflows",
    desc: "Learn how modern production pipelines integrate AI tools for concept art, motion tracking, and accelerated CGI compositing."
  }
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #450303 0%, #250202 50%, #120101 100%)",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Morph Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Choose <span className="text-[#FA9160]">Morph Meta Academy</span>?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Delivering practical excellence in digital arts for over 25 years. Here is how our training methodology prepares you for demanding studio environments.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 hover:border-red-500 hover:bg-[#340505] transition-all duration-300 hover:-translate-y-1 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
