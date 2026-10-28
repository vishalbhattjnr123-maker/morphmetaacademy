import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function FooterRedesign() {
  const courseLinks = [
    { label: "3D Animation Course", link: "/animation-course" },
    { label: "VFX & Compositing", link: "/course/top-3d-animation-course-vfx-course-with-job" },
    { label: "Film Making & Direction", link: "/film-course" },
    { label: "Video Editing Master", link: "/course/top-video-editing-courses-and-classes-in-india" },
    { label: "Game Design (Unreal / Unity)", link: "/gaming-cousre" },
    { label: "Graphic Design & Branding", link: "/course/graphics-designing-institute-in-Amritsar/" },
    { label: "UI / UX Design Master", link: "/course/ui-ux-design-course-in-Amritsar-with-job-placements" },
    { label: "Commercial Photography", link: "/best-film-making-and-photography-insititue-in-amritsar" },
    { label: "Metaverse & AR / VR", link: "/metaverse-course" },
    { label: "100% Job-Oriented Track", link: "/job-course" },
  ];

  const quickLinks = [
    { label: "Who We Are", link: "/morph-academy-animation-institute-in-Amritsar/" },
    { label: "Amritsar Campus", link: "/best-animation-academy-in-amritsar" },
    { label: "Studio Facilities & Labs", link: "/school-of-animation-and-visual-effects-morph-academy" },
    { label: "Placement Assistance", link: "/best-job-placement-academy-in-Amritsar" },
    { label: "Affiliations & Accreditations", link: "/animation-and-multimedia-colleges-affiliations-and-accreditations" },
    { label: "Scholarships on VFX Courses", link: "/scholarships-on-vfx-and-animation-course-in-Amritsar" },
    { label: "Student Portfolio Showcase", link: "/animation-student-portfolio" },
    { label: "Student Reviews & Ratings", link: "/meta-morph-academy-reviews-Amritsar-sector-34" },
    { label: "Franchise Opportunities", link: "/animation-institute-franchise-opportunity-in-Amritsar/" },
    { label: "Official Blog & Industry Insights", link: "/blogs" },
  ];

  return (
    <footer
      className="relative text-slate-300 pt-20 pb-10 border-t border-[#4a0505] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #180202 0%, #0d0101 100%)",
      }}
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#3a0505]">
          {/* Column 1: Brand Info & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/images/logonew.png"
                alt="Morph Academy"
                className="h-12 w-auto object-contain brightness-110 drop-shadow-md"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Morph Meta Academy is North India’s premier institute for 3D Animation, Hollywood Visual Effects, Game Design, Filmmaking, and Digital Media. Equipping students with studio-level skills, live project mentorship, and recognized university qualifications since 2000.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/morphmeta.academy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morph Academy Instagram"
                className="w-10 h-10 rounded-full bg-[#2b0404] border border-[#6b0808] hover:border-red-500 flex items-center justify-center text-white hover:text-amber-400 transition-all hover:scale-105 shadow-sm"
              >
                <i className="fa-brands fa-instagram text-base" />
              </a>
              <a
                href="https://www.facebook.com/share/imSZY8H2vB6JT3jN/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morph Academy Facebook"
                className="w-10 h-10 rounded-full bg-[#2b0404] border border-[#6b0808] hover:border-red-500 flex items-center justify-center text-white hover:text-amber-400 transition-all hover:scale-105 shadow-sm"
              >
                <i className="fa-brands fa-facebook-f text-base" />
              </a>
              <a
                href="https://www.youtube.com/@MorphFilmStudio34"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morph Academy YouTube"
                className="w-10 h-10 rounded-full bg-[#2b0404] border border-[#6b0808] hover:border-red-500 flex items-center justify-center text-white hover:text-amber-400 transition-all hover:scale-105 shadow-sm"
              >
                <i className="fa-brands fa-youtube text-base" />
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-[#240303] border border-[#6b0808] text-xs text-slate-200 flex items-center gap-2.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>ISO 9001:2015 Certified Educational Institution</span>
            </div>
          </div>

          {/* Column 2: Career Courses (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-sm tracking-wider uppercase text-white">
              Creative Programs
            </h3>
            <ul className="space-y-2 text-xs">
              {courseLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-500 text-[10px]">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-sm tracking-wider uppercase text-white">
              Academy
            </h3>
            <ul className="space-y-2 text-xs">
              {quickLinks.slice(0, 8).map((item, idx) => (
                <li key={idx}>
                  {item.link.startsWith("http") ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-decoration-none"
                    >
                      <span className="text-amber-500 text-[10px]">›</span>
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-decoration-none"
                    >
                      <span className="text-amber-500 text-[10px]">›</span>
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Campuses & Contacts (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-sm tracking-wider uppercase text-white">
              Campuses & Inquiries
            </h3>

            {/* Amritsar Campus */}
            <div className="space-y-1.5 text-xs">
              <span className="font-bold text-white block text-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Amritsar Campus:
              </span>
              <p className="text-slate-300 pl-5 leading-relaxed">
                SCO 105 - 4th Floor, B-Block, Ranjit Avenue, Above LG Showroom, Amritsar, Punjab 143001
              </p>
            </div>

            {/* Chandigarh Campus */}
            <div className="space-y-1.5 text-xs pt-1">
              <span className="font-bold text-white block text-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Chandigarh Head Office:
              </span>
              <p className="text-slate-300 pl-5 leading-relaxed">
                SCO 64-65, 4th Floor, Sub. City Center, Sector 34A, Chandigarh
              </p>
            </div>

            {/* Direct Phone & Email */}
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+919988001737" className="text-amber-400 hover:text-amber-300 font-bold">
                  +91 99880 01737
                </a>
                <span className="text-slate-500">/</span>
                <a href="tel:+919501489999" className="text-amber-400 hover:text-amber-300 font-bold">
                  95014 89999
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:info@morphacademy.com" className="text-slate-300 hover:text-amber-400">
                  info@morphacademy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Morph Meta Academy Amritsar. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy-2/" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions/" className="hover:text-amber-400 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/disclaimer/" className="hover:text-amber-400 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
