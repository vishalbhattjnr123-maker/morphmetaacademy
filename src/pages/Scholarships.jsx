"use client";

import { Link } from "react-router-dom";
import MetaSeo from "../Components/MetaSEO";
import { Award, GraduationCap, Star } from "lucide-react";


const Scholarships = () => {
  const seo = {
    title: "Scholarships on VFX & Animation course in Chandigarh",
    description:
      "School of Animation & Visual Effects Morph Academy, Learn 3D animation, modeling, and VFX at Morph's award-winning animation school.",
    keyword:
      "Graphics Designing Course in chandigarh, Graphics Designing Diploma in chandigarh, Graphics Design Institutes in chandigarh, Best Graphics Design Institute in chandigarh, Graphics Designing Classes in chandigarhNearby, Top Graphics Design Academy near me",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      {/* Hero Section */}
      <section
        className="relative w-full border-b border-[#5a0505] pt-[64px] lg:pt-[102px]"
        style={{ background: "linear-gradient(to right, #630202 0%, #3e080e 50%, #1a0203 100%)" }}
      >
        <img
          src="/images/scholosj-top-bar.jpg"
          alt="Morph Scholarships Banner"
          className="w-full h-auto max-h-[460px] object-cover block shadow-2xl"
        />
      </section>

      {/* Content Section */}
      <section className="text-gray-300 py-20 px-6">
        <div className="container max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
               <h1 className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-xl">
           Your Talent, Our Support – Morph <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">Scholarships</span>
          </h1>
            <h2 className="text-2xl md:text-2xl font-bold text-yellow-400">
              Unlock Your Creative Future with Morph Scholarships
            </h2>

            <p>
              Morph Skill Development & Vocational Training Centre is a premier
              skill development hub of Northern India. Morph conducts various{" "}
              <a
                href="https://en.wikipedia.org/wiki/Vocational_education"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                vocational training
              </a>{" "}
              programmes for students who have completed 10+2 or equivalent.
              Scholarships and fee concessions are offered as per course duration
              and merit.
            </p>

            <p>
              A student can avail only one scholarship/fee concession at a time.
              Northern India’s premier employability training provider is now
              offering up to 50% scholarship
              assistance to eligible students.
            </p>

            <p>
              These{" "}
              <Link
                to="/scholarships-on-vfx-and-animation-course-in-chandigarh"
                className="text-white"
              >
                scholarships
              </Link>{" "}
              vary according to conditions and marks obtained. They serve as a
              strong motivational factor for students who are hardworking and
              ambitious.
            </p>

            <p>
              Many students know about merit-based scholarships for{" "}
              <span className="text-yellow-400 font-semibold">
                Animation & Multimedia, Film Making, Video Editing, Photography,
                Cinematography, Graphics, Web Designing, Media & Journalism
              </span>
              . But Morph also offers skill-based scholarships — helping students
              identify strengths beyond academics. These opportunities not only
              enhance talent but also build confidence.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/scho.png"
              alt="Morph Academy Scholarship"
              className="rounded-3xl w-full max-w-sm "
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-20 pt-15 px-6 text-white">
        <div className="container max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Apply for a Scholarship?  
              
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10 text-yellow-400" />,
                title: "Merit Recognition",
                desc: "Rewarding your hard work and academic achievements with financial support.",
              },
              {
                icon: <GraduationCap className="w-10 h-10 text-yellow-400" />,
                title: "Skill Development",
                desc: "Scholarships tailored to recognize talent in animation, design, and multimedia.",
              },
              {
                icon: <Star className="w-10 h-10 text-yellow-400" />,
                title: "Confidence Boost",
                desc: "Encouraging students to pursue creative careers without financial barriers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-neutral-900/70 rounded-2xl p-8 border border-yellow-400 hover:border-yellow-400 transition"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Scholarships;
