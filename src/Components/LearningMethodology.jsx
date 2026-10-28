import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Wrench, Film, Rocket, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Foundations & Visual Ideation",
    desc: "Develop creative instincts through drawing principles, color theory, visual storytelling, character design, and storyboarding fundamentals."
  },
  {
    step: "02",
    icon: Wrench,
    title: "Technical Tool Mastery",
    desc: "Hands-on immersion with industry-standard software suites — Autodesk Maya, Blender, Unreal Engine 5, DaVinci Resolve, Premiere, and Figma."
  },
  {
    step: "03",
    icon: Film,
    title: "Live Studio Capstone Project",
    desc: "Collaborate on end-to-end studio briefs simulating actual studio pipelines, deadlines, asset optimizations, and creative reviews."
  },
  {
    step: "04",
    icon: Rocket,
    title: "Showreel & Studio Placement",
    desc: "Curate a standout showreel, refine technical resumes, undergo mock technical interviews, and connect directly with hiring studios."
  }
];

export default function LearningMethodology() {
  return (
    <section
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #3d0303 0%, #200101 50%, #100101 100%)",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
            <Rocket className="w-3.5 h-3.5 text-amber-400" />
            <span>Studio Production Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our 4-Stage <span className="text-[#FA9160]">Learning Methodology</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From your very first sketch to your final capstone demo reel, our training methodology is structured to mimic real studio production pipelines.
          </p>
        </div>

        {/* 4 Steps Timeline / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 shadow-xl flex flex-col justify-between group hover:border-red-500 hover:bg-[#340505] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-amber-500/40 group-hover:text-amber-400/80 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#4a0505] flex items-center text-xs text-amber-400 font-semibold">
                  <span>Step {step.step} in Career Track</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
