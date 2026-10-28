import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Globe2, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function AffiliationsSection() {
  const domesticAffiliations = [
    { title: "Karnataka State University", year: "Recognized Programs", desc: "Recognized curriculum pathways for higher degree certifications." },
    { title: "University of Mysore", year: "Academic Programs", desc: "University syllabus aligned for animation and multimedia specialisations." },
    { title: "Mangalore University", year: "Certified Syllabi", desc: "Standardised academic framework for media degrees." },
    { title: "Visvesvaraya Technological University (VTU)", year: "Tech Programs", desc: "Curriculum alignment with technical computing standards." },
  ];

  const internationalCollaborations = [
    { name: "ESIGELEC, Graduate School of Engineering", location: "Saint-Étienne-du-Rouvray, France" },
    { name: "Hochschule Bremen University of Applied Sciences", location: "Bremen, Germany" },
    { name: "Chemnitz University of Technology", location: "Chemnitz, Germany" },
    { name: "Queensland University of Technology (QUT)", location: "Brisbane, Australia" },
  ];

  return (
    <section
      className="py-20 text-slate-100 relative overflow-hidden border-b border-[#5a0505]"
      style={{
        background: "linear-gradient(135deg, #3d0303 0%, #200101 50%, #100101 100%)",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240303] border border-[#6b0808] text-[#F9B713] text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Institutional Credibility & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Affiliations & <span className="text-[#FA9160]">Academic Collaborations</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Morph Academy maintains affiliations, accreditations, and university curriculum alignments that underscore our 25-year commitment to rigorous educational quality.
          </p>
        </div>

        {/* Degree & Multimedia Panoramic Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-2xl md:rounded-3xl overflow-hidden border border-[#6b0808] shadow-2xl bg-[#140101]"
        >
          <img
            src="/images/banner-degree-animation.png"
            alt="Govt Approved Degree in Animation Multimedia - Morph Academy"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </motion.div>

        {/* Two Columns: Domestic University Affiliations & International Collaborations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Left Box: Domestic University Affiliations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">University Degree & Diploma Pathways</h3>
                  <p className="text-xs text-amber-400 font-medium">Recognized Higher Education Syllabi</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {domesticAffiliations.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#2f0404] border border-[#6b0808]/70 hover:border-red-400 hover:bg-[#380505] transition-all flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#4a0505] flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                ISO 9001:2015 Quality Standards
              </span>
              <Link
                to="/animation-and-multimedia-colleges-affiliations-and-accreditations"
                className="text-amber-400 hover:text-white font-semibold flex items-center gap-1"
              >
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Box: International University Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Global University Collaborations</h3>
                  <p className="text-xs text-amber-400 font-medium">International Exposure & Syllabi Insights</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {internationalCollaborations.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#2f0404] border border-[#6b0808]/70 hover:border-red-400 hover:bg-[#380505] transition-all flex items-start gap-3"
                  >
                    <Globe2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#4a0505] flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Global Curriculum Benchmarking
              </span>
              <Link
                to="/animation-and-multimedia-colleges-affiliations-and-accreditations"
                className="text-amber-400 hover:text-white font-semibold flex items-center gap-1"
              >
                <span>Accreditation Documents</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
