import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Newspaper, Sparkles } from "lucide-react";

const BLOG_ARTICLES = [
  {
    id: 1,
    title: "AI training institutes in India",
    date: "October 8, 2026",
    category: "AI & Emerging Tech",
    image: "/images/header/ai.jpg",
    excerpt:
      "Morph Academy Guide / AI Courses India find • Compare • Verify Best AI Training Institutes in India: Courses, Certifications & Placement",
    link: "/blogs",
  },
  {
    id: 2,
    title: "AI Certification in India",
    date: "October 8, 2026",
    category: "Career Guide",
    image: "/images/header/AI-Generative-Art-Course-and-Training-with-Morph-acadey.jpg",
    excerpt:
      "MORPH ACADEMY / AI Courses / AI Certification in India Complete Guide - 2026 AI Certification in India: Best Courses, Career Opportunities & Salary",
    link: "/blogs",
  },
  {
    id: 3,
    title: "How to Choose the Best AI Course in India",
    date: "October 8, 2026",
    category: "Student Roadmap",
    image: "/images/header/3d-cryptocurrency-rendering-design.jpg",
    excerpt:
      "MORPH ACADEMY / AI Learning Guide / Beginner's Guide Learn • Compare • Choose confidently How to Choose the Best AI Course in India",
    link: "/blogs",
  },
];

export default function NewsBlogSection() {
  return (
    <section
      id="news"
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0606]"
      style={{
        background: "linear-gradient(135deg, #450303 0%, #250202 50%, #120101 100%)",
      }}
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2b0404] border border-[#6b0808] text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Newspaper className="w-3.5 h-3.5 text-amber-400" />
            <span>Latest News & Expert Insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            News &{" "}
            <span className="bg-gradient-to-r from-[#FA9160] via-amber-300 to-rose-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore the latest news, expert insights, educational guides, and industry trends from Morph Academy. Discover valuable knowledge about AI, animation, web design, digital marketing, and career opportunities to stay informed and inspired.
          </p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-[#240303]/95 border border-[#6b0808]/80 hover:border-red-500/80 hover:bg-[#320505] transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-[#140101]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#180202]/90 backdrop-blur-md border border-[#6b0808] text-[10px] font-bold text-amber-400 uppercase tracking-wider shadow-sm">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-400/80 mb-2.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FA9160] transition-colors line-clamp-1 mb-2.5">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer: CTA */}
              <div className="p-6 pt-0 border-t border-[#4a0606] mt-2">
                <Link
                  to={article.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all pt-4 text-decoration-none"
                >
                  <span>Explore Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="mt-14 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2b0404] border border-[#6b0808] text-white hover:border-red-500 hover:text-amber-300 shadow-md transition-all text-decoration-none"
          >
            <span>View All Insights & Articles</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
