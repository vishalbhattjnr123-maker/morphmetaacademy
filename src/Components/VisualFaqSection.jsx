import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "01",
    question: "What courses does Morph Academy offer?",
    answer:
      "Morph Academy offers 35+ courses including Animation, VFX, Game Design, AI Generative Art, Digital Marketing, Photography, Film Making, UI/UX Design, Graphic Design, Fashion Designing, Interior Design, Data Science and Full-Stack Development.",
    image: "/images/Game-Designing-Course-and-training-india.jpg",
    alt: "3D Animation and Game Design at Morph Academy",
  },
  {
    id: "02",
    question: "Is Morph Academy government approved?",
    answer:
      "Yes. Morph Academy is ISO certified, government-approved, and affiliated with Manipal University. The institute's curriculum is aligned with India's national AVGC-XR policy framework — the government's flagship initiative for Animation, Visual Effects, Gaming & Extended Reality education and industry development.",
    image: "/images/super-hero-animation88iu.jpg",
    alt: "AVGC-XR Government Aligned Animation Institute",
  },
  {
    id: "03",
    question: "Does Morph Academy provide placement assistance?",
    answer:
      "Yes. Morph Academy provides 100% placement assistance to eligible graduates. The academy's dedicated placement cell connects students with animation studios, VFX production houses, gaming companies, digital marketing agencies, and advertising firms across India. Placement drives are conducted on campus, and students receive resume building, portfolio development, and interview preparation support as part of every program.",
    image: "/images/vfx-and-antimation-trainig.jpg",
    alt: "100% Studio Placement Assistance",
  },
  {
    id: "04",
    question: "What is the fee for courses at Morph Academy?",
    answer:
      "Course fees at Morph Academy range from ₹6,000 to ₹1,00,000 depending on the course level and duration. EMI options are available through Bajaj Finserv and LoanTap. Merit-based scholarships are available for eligible students. No prior design or technology experience is required for admission to most programs.",
    image: "/images/banner-images-tab12.jpg",
    alt: "Transparent Course Fees and Flexible EMI Plans",
  },
];

export default function VisualFaqSection() {
  return (
    <section
      id="faqs"
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0606]"
      style={{
        background: "linear-gradient(135deg, #3d0303 0%, #200101 50%, #100101 100%)",
      }}
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2b0404] border border-[#6b0808] text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions & Academy Information</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Everything You Need to Know About{" "}
            <span className="bg-gradient-to-r from-[#FA9160] via-amber-300 to-rose-400 bg-clip-text text-transparent">
              Morph Academy
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Find answers to the most common questions about Morph Academy's courses, admissions, placements, certifications, fees, and career opportunities.
          </p>
        </div>

        {/* 4 Visual FAQ Cards */}
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#240303]/95 border border-[#6b0808]/80 hover:border-red-500/80 hover:bg-[#320505] transition-all duration-300 shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left: Big Number (1.5 Cols) */}
                <div className="lg:col-span-1 flex lg:justify-center">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400/40 group-hover:text-amber-400 transition-colors">
                    {item.id}
                  </span>
                </div>

                {/* Middle: Question & Answer (7.5 Cols) */}
                <div className="lg:col-span-8 space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FA9160] transition-colors leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {item.answer}
                  </p>
                </div>

                {/* Right: Cinematic Visual Thumbnail (3 Cols) */}
                <div className="lg:col-span-3">
                  <div className="relative h-36 sm:h-40 w-full rounded-2xl overflow-hidden border border-[#6b0808] shadow-lg group-hover:border-red-500/80 transition-all bg-[#140101]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
