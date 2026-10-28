import React from "react";
import MetaSeo from "../Components/MetaSEO";
import CinematicHero from "../Components/CinematicHero";
import StatsTickerSection from "../Components/StatsTickerSection";
import CourseCardsSection from "../Components/CourseCardsSection";
import CareerAdvisorSection from "../Components/CareerAdvisorSection";
import IndustryDataSection from "../Components/IndustryDataSection";
import AboutAmritsarSection from "../Components/AboutAmritsarSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import LearningMethodology from "../Components/LearningMethodology";
import StudentShowcaseSection from "../Components/StudentShowcaseSection";
import AffiliationsSection from "../Components/AffiliationsSection";
import PlacementRecruitersSection from "../Components/PlacementRecruitersSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import VisualFaqSection from "../Components/VisualFaqSection";
import NewsBlogSection from "../Components/NewsBlogSection";
import EnquirySection from "../Components/EnquirySection";

const Home = () => {
  const seo = {
    title: "Morph Meta Academy Amritsar | Best Animation, VFX & Gaming Institute",
    description:
      "Morph Meta Academy in Amritsar offers industry-certified courses in 3D Animation, VFX, Game Design, Film Making, Video Editing & UI/UX with 100% placement mentorship and studio labs.",
    keyword:
      "Animation Institute in Amritsar, Animation Courses in Amritsar, VFX Courses in Amritsar, Film Making Courses in Amritsar, Graphic Designing Courses in Amritsar, Game Designing Courses in Amritsar, 3D Animation Academy Amritsar, Video Editing Course Amritsar, Morph Meta Academy Amritsar, Best Multimedia Institute in Punjab",
    canonical: "https://www.morphmetaamritsar.com/",
    image: "/images/logonew1.png",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://www.morphmetaamritsar.com/#organization",
        "name": "Morph Meta Academy Amritsar",
        "alternateName": "Morph Academy Amritsar",
        "url": "https://www.morphmetaamritsar.com/",
        "logo": "https://www.morphmetaamritsar.com/images/logonew1.png",
        "image": "https://www.morphmetaamritsar.com/images/vfx-and-antimation-trainig.jpg",
        "description": "Morph Meta Academy Amritsar is North India's premier creative institute providing advanced training in 3D Animation, Hollywood VFX, Game Development, Filmmaking, and Graphic Design with 100% placement mentorship.",
        "telephone": "+91-9988001737",
        "email": "info@morphacademy.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "SCO 105 - 4th Floor, B-Block, Ranjit Avenue, Above LG Showroom",
          "addressLocality": "Amritsar",
          "addressRegion": "Punjab",
          "postalCode": "143001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.6508",
          "longitude": "74.8580"
        },
        "sameAs": [
          "https://www.instagram.com/morphmeta.academy",
          "https://www.facebook.com/share/imSZY8H2vB6JT3jN/?mibextid=LQQJ4d",
          "https://www.youtube.com/@MorphFilmStudio34"
        ]
      },
      {
        "@type": "Course",
        "name": "3D Animation & VFX Master Program",
        "description": "Comprehensive studio training in 3D character modeling, texturing, rigging, lighting, and cinematic visual effects compositing.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Morph Meta Academy Amritsar",
          "sameAs": "https://www.morphmetaamritsar.com/"
        }
      },
      {
        "@type": "Course",
        "name": "Game Design & Unreal Engine 5 Development",
        "description": "Professional game development covering 3D asset creation, level design, lighting, and real-time interactive gameplay mechanics.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Morph Meta Academy Amritsar",
          "sameAs": "https://www.morphmetaamritsar.com/"
        }
      },
      {
        "@type": "Course",
        "name": "Film Making & Direction Course",
        "description": "Hands-on filmmaking covering cinematography, lighting rigs, screenplay writing, audio recording, and direction.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Morph Meta Academy Amritsar",
          "sameAs": "https://www.morphmetaamritsar.com/"
        }
      }
    ]
  };

  return (
    <>
      <MetaSeo meta={seo} schema={structuredData} />

      <div className="w-full bg-[#0e0102] text-slate-100 overflow-hidden">
        {/* 1. Cinematic Full-Screen Hero Slider */}
        <CinematicHero />

        {/* 2. Industry Impact Stats & Infinite Software Marquee */}
        <StatsTickerSection />

        {/* 3. Popular Verified Courses Section */}
        <CourseCardsSection />

        {/* 4. Interactive Career Pathway Advisor */}
        <CareerAdvisorSection />

        {/* 5. The Creative Career Opportunity in India (Industry Market Reports) */}
        <IndustryDataSection />

        {/* 6. About Morph Meta Academy Amritsar Section */}
        <AboutAmritsarSection />

        {/* 7. Why Choose Us (The Morph Advantage) */}
        <WhyChooseUs />

        {/* 8. Learning Methodology (4-Stage Studio Pipeline) */}
        <LearningMethodology />

        {/* 9. Real Student Projects & Portfolio Showcase */}
        <StudentShowcaseSection />

        {/* 10. Affiliations & University Accreditations */}
        <AffiliationsSection />

        {/* 11. Placement & Studio Connections */}
        <PlacementRecruitersSection />

        {/* 12. Genuine Student Reviews & Video Testimonials */}
        <TestimonialsSection />

        {/* 13. Visual FAQ: Everything You Need to Know About Morph Academy */}
        <VisualFaqSection />

        {/* 14. News & Blog: Latest Insights & Guides */}
        <NewsBlogSection />

        {/* 15. Contact & Free Demo Class Booking */}
        <EnquirySection />
      </div>
    </>
  );
};

export default Home;
