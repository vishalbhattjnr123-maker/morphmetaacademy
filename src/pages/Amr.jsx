import Form2 from "../Components/Form2";
import MetaSeo from "../Components/MetaSEO";

export default function Amr() {
  const seo = {
    title: "Best Animation Institute in Amritsar – Animation, VFX & Gaming Courses",
    description:
      "Join Morph Animation Academy in Amritsar – The leading institute for Animation, VFX, Gaming, and Multimedia courses with 100% placement assistance. Learn 2D/3D Animation, Visual Effects, Film Editing, Unreal Engine & more.",
    keyword:
      "animation institute amritsar, vfx course amritsar, animation course after 12th, gaming course amritsar, best animation academy punjab, multimedia course amritsar, 3d animation training amritsar",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      {/* ------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------- */}
      <section className="relative w-full">
        <img
          src="/images/vfx-and-antimation-trainig.jpg"
          alt="Morph Animation Academy Amritsar"
          className="w-full h-[550px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-4xl">
           
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- */}
      {/* STATS SECTION */}
      {/* ------------------------------------------------- */}
      <section className="bg-black py-14 border-t border-gray-800">
         <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl">
              Best Animation Institute in Amritsar
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-300 leading-relaxed">
              Learn Animation, VFX, Gaming, Video Editing & Multimedia from industry experts.
              Become a highly skilled creative professional with 100% placement assistance.
            </p>
      
      </section>

      {/* ------------------------------------------------- */}
      {/* ABOUT SECTION */}
      {/* ------------------------------------------------- */}
      <section className="py-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT TEXT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold text-white">
            About Morph Animation Academy Amritsar
          </h2>

          <p className="mt-3 text-lg text-gray-300">
            Morph Academy is one of India’s most trusted Animation & Multimedia institutes,
            delivering industry-certified creative education since 2009.
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed">
            With advanced courses in <strong className="text-yellow-400">3D Animation, VFX,
            Unreal Engine, Motion Graphics, Gaming, Graphic Design, Film Editing,
            Virtual Production</strong> and more — we prepare students for high-demand
            creative careers.
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Our curriculum is crafted with AI-enhanced research and industry feedback from
            leading studios, ensuring every student becomes job-ready with professional
            portfolio-building, internships, and placement support.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ University-Affiliated Diploma & Degree Programs</li>
            <li>✔ Studio-Level Labs with 3D Workstations</li>
            <li>✔ Real Industry Projects & Practical Assignments</li>
            <li>✔ Guest Lectures from Animation & VFX Experts</li>
            <li>✔ AI-Integrated Learning in Video Editing, CGI & Compositing</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
          <Form2 />
        </div>
        
      </section>
  <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "95%", label: "Placement Success" },
            { value: "25+", label: "Years Experience" },
            { value: "100%", label: "Certified Faculty" },
            { value: "10,000+", label: "Students Trained" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-900/70 backdrop-blur-sm p-7 rounded-2xl shadow-xl border border-gray-700 hover:scale-105 transition"
            >
              <span className="block text-4xl font-extrabold text-yellow-400">
                {stat.value}
              </span>
              <h4 className="mt-2 text-gray-300 font-semibold">{stat.label}</h4>
            </div>
          ))}
        </div>
      {/* ------------------------------------------------- */}
      {/* WHY CHOOSE US */}
      {/* ------------------------------------------------- */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center">
            Why Choose Morph Animation Academy?
          </h2>

          <p className="text-center text-gray-400 mt-3">
            Trusted by thousands of students for professional Animation & VFX training.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {[
              {
                title: "Industry Curriculum",
                desc: "Courses aligned with the latest film, TV & gaming studio requirements.",
              },
              {
                title: "Advanced Labs",
                desc: "Fully equipped labs with Autodesk Maya, Blender, Unreal, Houdini & more.",
              },
              {
                title: "Expert Trainers",
                desc: "Learn from industry professionals with real production experience.",
              },
              {
                title: "Placement Support",
                desc: "Guaranteed job assistance through our network of 100+ studios.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg hover:scale-105 transition"
              >
                <img src="/images/icons8-tick-80.png" alt="" className="w-12 mb-4" />
                <h3 className="text-xl font-semibold text-yellow-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- */}
      {/* HOW WE HELP STUDENTS */}
      {/* ------------------------------------------------- */}
      <section className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img
          src="/images/after12.jpg"
          alt="Student Support"
          className="rounded-2xl shadow-xl border border-gray-700"
        />

        <div>
          <h2 className="text-3xl font-extrabold text-white">
            How We Support Our Students
          </h2>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Job-Ready Training with Industry Workshops</li>
            <li>✔ Real Projects, Showreel & Portfolio Development</li>
            <li>✔ AI Tools for Motion Graphics, Editing & CGI</li>
            <li>✔ Studio Visits & Production Pipeline Exposure</li>
            <li>✔ Mock Interviews, Resume Building & Career Counseling</li>
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------- */}
      {/* ELIGIBILITY */}
      {/* ------------------------------------------------- */}
      <section className="py-20 bg-black border-t border-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold">Eligibility</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              {
                title: "Certificate Courses",
                desc: "After 10th – No prior experience required.",
              },
              {
                title: "Diploma Courses",
                desc: "After 12th – Ideal for beginners & career starters.",
              },
              {
                title: "Advanced Diploma / Degree",
                desc: "After 12th or Graduation – For high-end specialization.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold text-yellow-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- */}
      {/* TESTIMONIALS */}
      {/* ------------------------------------------------- */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Student Success Stories
        </h2>
        <p className="text-center text-gray-400 mt-2">
          Watch how our students transformed their creative journeys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {[
            "cIz2i5r9cW0",
            "NvSfFgBRDfM",
            "Wf-8XEr1jzU",
            "mlQGV2gFIxw",
            "V8zE7D_K7Cs",
            "bAZFMYOqjFU",
          ].map((id, i) => (
            <iframe
              key={i}
              src={`https://www.youtube.com/embed/${id}`}
              className="w-full h-64 rounded-xl shadow-lg border border-gray-700"
              allowFullScreen
              loading="lazy"
            ></iframe>
          ))}
        </div>
      </section>
    </>
  );
}
