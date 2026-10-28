import { Link } from "react-router-dom";
import MetaSeo from "../Components/MetaSEO";
import Form2 from "../Components/Form2";

const Admission26 = () => {
  const seo = {
    title: "Animation & VFX Admissions 2025–26 | Enroll Now at Top Academy",
    description:
      "Apply now for Animation and VFX courses 2025–26. Learn 2D/3D Animation, VFX, Game Design & more. Limited seats. Start your creative career today!",
    keyword:
      "animation admissions 2025, VFX course admission 2025, animation and VFX academy, 3D animation course 2025, VFX training institute, game design course, animation college admissions, animation classes 2025, VFX career, visual effects course",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      <div className="bg-black text-gray-300 pb-20">

        {/* -------------------- HERO BANNER -------------------- */}
        <div className="relative w-full">
          <img
            src="/images/VFX-course-in-Chandigarh.jpg"
            className="w-full object-cover max-h-[480px] brightness-75"
            alt="Meta Morph Banner"
          />

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-xl">
              Animation & VFX Admissions 2025–26
            </h1>
          </div>
        </div>

        {/* -------------------- INTRO SECTION -------------------- */}
        <section className="max-w-7xl mx-auto px-6 mt-16">

          <h2 className="text-center text-yellow-400 text-2xl font-semibold uppercase tracking-widest">
            Morph Academy, Chandigarh
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-14">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-6 text-lg leading-relaxed bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700/40">

              <p>
                Animation and VFX Admissions Open 2025–26 at Morph Academy,
                Chandigarh! Start your creative journey with our professional
                programs in Animation, VFX,{" "}
                <a
                  className="text-yellow-400 underline decoration-yellow-600"
                  href="https://en.wikipedia.org/wiki/Game_design"
                  target="_blank"
                >
                  Game Design
                </a>{" "}
                and more.
              </p>

              <p>
               Kickstart your creative career with Morph Academy, a leading name in Animation, VFX, 3D Animation, Game Design, and Digital Content Creation. Admissions for the 2025–26 batch are now open!
              </p>

              <p>
               Whether you dream of becoming a 3D animator, VFX artist, motion graphics designer, game designer, or CG generalist, Morph Academy provides the right platform to turn your imagination into high-income career opportunities.
              </p>

              <p className="font-semibold text-xl">
                Enroll now and build a high-income creative career in Animation & VFX!
              </p>
           <h2 className="text-2xl mb-2 text-yellow-400 font-semibold">Career Opportunities After the Course</h2>

              <ul>
                <li>3D Animator</li>
                <li>VFX Artist</li>
                <li>Motion Graphics Designer</li>
                <li>Compositor</li>
                <li>Game Designer & Environment Artist</li>
                <li>Character Modeling Artist</li>
                <li>CGI Artist</li>
                <li>Video Editor</li>
                <li>Animation Filmmaker</li>
              </ul>
            </div>

            {/* RIGHT FORM */}
            <div>
              <div className="bg-gray-900/80 p-6 rounded-2xl shadow-[0_0_35px_-10px_rgba(255,221,99,0.3)] border border-gray-700">
                <Form2 />
              </div>
            </div>
          </div>
        </section>

        {/* -------------------- WHY CHOOSE MORPH -------------------- */}
        <section className="max-w-7xl mx-auto px-6 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* IMAGE */}
          <div className="relative group">
            <img
              src="/images/mm.png"
              alt="Morph Academy"
              className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/40 to-transparent"></div>
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-yellow-400 text-3xl font-bold tracking-wide">
              Why Choose Morph Academy?
            </h3>

            <p className="mt-5 text-lg">
              A powerhouse in Animation, VFX & Digital Media education, trusted
              by thousands of students and 100+ creative studios.
            </p>

            <ul className="mt-7 space-y-4 text-white">
              {[
                "Industry-Aligned Curriculum",
                "Experienced Mentors & Production Artists",
                "100% Placement Assistance",
                "Courses for Beginners & Professionals",
                "Collaborations with Leading Studios",
                "UGC-Approved Degrees & Diplomas",
                "25+ Years of Excellence in Creative Education",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <i className="fa-solid fa-star text-yellow-400 mt-1"></i>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl text-yellow-400 font-bold mt-10">
              How We Help Students Grow?
            </h2>

            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
              {[
                "Job-ready training modules",
                "Pro workshops by industry experts",
                "Studio visits & field exposure",
                "Case studies & production tasks",
                "Group discussions & soft-skill sessions",
                "Mock interviews for confidence",
                "Team-based creative projects",
                "Strong alumni mentorship",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-gray-900/70 py-3 px-5 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* -------------------- TESTIMONIALS – VIDEO GRID -------------------- */}
        <section className="max-w-7xl mx-auto px-6 mt-24">

          <h3 className="text-center text-white text-3xl font-extrabold tracking-wide">
            Testimonials
          </h3>
          <p className="text-center text-yellow-400 mt-2 text-lg">
            Employment Driven Education
          </p>
          <p className="text-center text-gray-400 text-sm max-w-3xl mx-auto mt-2">
            India’s Media & Entertainment industry is booming—requiring millions
            of skilled professionals. Hear from our successful students.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "X4-X0o1T6jg",
              "vxQIbUpjleo",
              "GWn9z04sEKQ",
              "5Xlc2tV9MLk",
              "2amlGJX435Q",
              "Kwd9hWrEnK4",
            ].map((id, i) => (
              <div
                key={i}
                className="flex justify-center hover:scale-105 transition-transform duration-300"
              >
                <iframe
                  width="315"
                  height="560"
                  className="rounded-xl shadow-2xl border border-gray-700"
                  src={`https://www.youtube.com/embed/${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Admission26;
