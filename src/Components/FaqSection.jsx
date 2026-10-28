import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "Which animation, VFX, and multimedia courses are available at Morph Meta Academy Amritsar?",
    a: "Morph Meta Academy Amritsar offers comprehensive diploma, degree, and certification programs in 3D Animation (Maya & Blender), Visual Effects (VFX & Compositing), Film Making & Direction, Video Editing & DaVinci Color Grading, Game Design (Unreal Engine 5 & Unity), Commercial Photography, Graphic Design & Branding, and UI/UX Design."
  },
  {
    q: "Where is Morph Meta Academy Amritsar campus located?",
    a: "The Amritsar campus is centrally located at SCO 105 - 4th Floor, B-Block, Ranjit Avenue, Above LG Showroom, Amritsar, Punjab 143001. It is easily accessible by public transport and offers studio-standard workstations with dedicated lab facilities."
  },
  {
    q: "What are the eligibility criteria for joining animation and creative courses?",
    a: "Certificate and foundational diploma programs can be pursued after 10th standard. Advanced diploma and university degree courses are open to students after completing 10+2 (any stream) or graduation. No prior programming or artistic experience is strictly required — our foundational modules teach drawing and digital skills from scratch."
  },
  {
    q: "How can I book a free demo class or enquire about course details and fees?",
    a: "You can book a free demo session by filling out the online enquiry form on our website or calling our admissions desk directly at +91 99880 01737 / +91 95014 89999. Course fees depend on program level (certificate, 1-year diploma, or multi-year degree) and flexible installment options are available."
  },
  {
    q: "Does Morph Meta Academy provide job placement assistance?",
    a: "Yes. Morph Academy provides structured placement support through dedicated showreel reviews, studio test simulations, mock interviews, and direct introductions to top animation studios, game developers, advertising agencies, and production houses across North India and pan-India."
  },
  {
    q: "What career paths can relevant creative courses lead to?",
    a: "Graduates pursue roles such as 3D Animator, Character Modeler, VFX Compositor, Video Editor, Game Level Designer, Motion Graphics Artist, Film Director, UI/UX Designer, Commercial Photographer, and Real-Time AR/VR Artist in gaming studios, broadcast media, and creative agencies."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-[#0a0205] text-white relative overflow-hidden border-b border-gray-900">
      <div className="container max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-950 border border-gold-400/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Clear, honest answers to help students and parents make informed decisions about creative careers at Morph Meta Academy Amritsar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-gradient-to-r from-[#160408] to-[#0d0205] border border-gold-400/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base md:text-lg text-white hover:text-gold-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-gold-400 font-mono">0{idx + 1}</span>
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-black/50 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400 transition-transform duration-300 ${isOpen ? "rotate-180 bg-gold-400 text-black" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-sm md:text-base text-gray-300 leading-relaxed border-t border-gray-800/60 mt-1">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
