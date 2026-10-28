import React from "react";
import MetaSeo from "../Components/MetaSEO";
import TestimonialsSection from "../Components/TestimonialsSection";
import Gallery1 from "../Components/Gallery1";
import { Link } from "react-router-dom";
import { Star, MessageSquare, ExternalLink, Award, Users, CheckCircle } from "lucide-react";

const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const GOOGLE_PROFILE_LINK = "https://share.google/ItChOVSp9BBU9C7G9";

const Testimonials = () => {
  const seo = {
    title: "Student Reviews & Ratings | Staunch Morph Meta Academy Amritsar",
    description:
      "Read verified Google reviews and ratings for Staunch Morph Meta Academy in Amritsar. Hear firsthand from our alumni placed across top animation, VFX, and game development studios.",
    keyword:
      "Morph Meta Academy Reviews, Staunch Morph Meta Academy Google Reviews, Animation Academy Amritsar Reviews, VFX Course Student Ratings, Best Multimedia Institute in Amritsar Reviews",
    canonical: "https://www.morphmetaamritsar.com/meta-morph-academy-reviews-chandigarh-sector-34",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Staunch Morph Meta Academy Amritsar",
    "url": "https://www.morphmetaamritsar.com/",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "165"
    }
  };

  return (
    <>
      <MetaSeo meta={seo} schema={reviewSchema} />

      {/* Cinematic Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180408] via-[#0d0204] to-[#080808] text-white border-b border-gray-900 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-burgundy-900/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-950 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase mb-6 shadow-xl">
            <GoogleIcon className="w-4 h-4" />
            <span>Verified Alumni & Student Feedback</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Real Stories, Real Careers, <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Verified Google Reviews</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Read authentic reviews from students who learned 3D Animation, Hollywood Visual Effects, Game Design, Filmmaking, and Graphic Arts at <strong className="text-white">Staunch Morph Meta Academy</strong>.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-2.5 flex items-center justify-center shadow-lg">
                <GoogleIcon className="w-7 h-7" />
              </div>
              <div className="text-left">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 mt-0.5 font-bold">4.9 / 5.0 on Google</p>
              </div>
            </div>

            <div className="h-8 w-px bg-gray-800 hidden sm:block" />

            <div className="flex items-center gap-2.5 text-left">
              <Award className="w-8 h-8 text-gold-400" />
              <div>
                <p className="text-sm font-bold text-white">25+ Years</p>
                <p className="text-xs text-gray-400">Education Heritage</p>
              </div>
            </div>

            <div className="h-8 w-px bg-gray-800 hidden sm:block" />

            <div className="flex items-center gap-2.5 text-left">
              <Users className="w-8 h-8 text-gold-400" />
              <div>
                <p className="text-sm font-bold text-white">10,000+ Placed</p>
                <p className="text-xs text-gray-400">Creative Alumni Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Google Reviews Section Component */}
      <TestimonialsSection />

      {/* Student Work Gallery */}
      <section className="py-20 bg-[#060103] text-white border-b border-gray-900">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white">
              Student Work & Campus Moments
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              A glimpse into life, projects, workshops, and creative production at Morph Meta Academy.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-gold-400/20 shadow-2xl">
            <Gallery1 />
          </div>
        </div>
      </section>

      {/* Bottom CTA to Book Free Demo */}
      <section className="py-16 bg-gradient-to-r from-burgundy-950 via-[#180408] to-burgundy-950 text-white border-t border-gold-400/20 text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Experience the Morph Advantage Yourself
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Book a one-on-one free career counselling session and campus tour at our Ranjit Avenue center in Amritsar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-burgundy-950 font-bold text-sm shadow-xl hover:scale-105 transition-all text-decoration-none"
            >
              Book Free Demo Session
            </Link>
            <a
              href={GOOGLE_PROFILE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-burgundy-900/60 border border-gold-400/40 text-gold-400 hover:text-white font-semibold text-sm transition-all flex items-center gap-2 text-decoration-none"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>View On Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
