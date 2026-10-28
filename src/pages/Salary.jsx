import Form2 from "../Components/Form2";
import MetaSeo from "../Components/MetaSEO";

export default function Salary() {
  const seo = {
    title: "Animation Career in India: Jobs, Placements, Salary & Top Recruiters",
    description:
      "Join Morph Academy, Chandigarh – India’s top animation institute. Explore jobs, salary, recruiters, and admissions 2025-26 in Animation, VFX, AR/VR & more.",
    keyword:
      "animation career in India, animation jobs salary, animation courses Chandigarh, VFX training, 3D animation institute, Morph Academy, AR/VR course, animation placement India, top recruiters for animators, animation degree 2025, best animation college India",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      <div className="w-full bg-black text-white">

        {/* ---------------------- HERO BANNER ---------------------- */}
        <div className="w-full">
          <img
            src="/images/Animation-Gallery-meta-morph-tp-banner.jpg"
            alt="Morph Animation Academy"
            className="w-full object-cover"
          />
        </div>

        {/* ---------------------- HERO CONTENT ---------------------- */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-snug">
              Animation Career in India: Jobs, Placements, Salary & Top Recruiters
            </h1>

            <p className="text-yellow-400 text-xl font-semibold mt-4">
              Admission Open for 2025-26 – Morph Academy, Chandigarh
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Are you passionate about cartoons, 3D characters, games, or movies? Do you 
              want to work in the exciting world of animation, 
              <a className="text-white underline ml-1" href="https://en.wikipedia.org/wiki/Visual_effects">VFX</a>, 
              AR/VR, and the metaverse? Then it’s time to turn your passion into a 
              profession with <a href="/" className="text-white underline">Morph Academy</a> – 
              the best animation institute in Chandigarh.
            </p>

            <h3 className="text-xl font-semibold text-yellow-400 mt-6 flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> Why Choose Morph Academy?
            </h3>

            <ul className="mt-3 space-y-2 text-gray-200">
              <li>Certified Degree & Diploma Programs</li>
              <li>Affiliated with reputed universities</li>
              <li>Guided by 20+ experienced professionals</li>
              <li>Live projects & apprenticeship training</li>
              <li>100% placement record</li>
              <li>Training in AR, VR, 3D, Meta, and more</li>
            </ul>

            <p className="mt-4 text-gray-300">
              Whether you are looking for the best animation institutes for job benefits, 
              salary, and career in India or nearby, Morph Academy is your trusted 
              destination.
            </p>

            <h3 className="text-xl font-semibold text-yellow-400 mt-6 flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> Animation Career Salary in India
            </h3>

            <p className="mt-4 text-gray-300">Here’s what you can expect for a 3D animator salary in India per month:</p>

            <ul className="mt-3 space-y-1 text-gray-200">
              <li>Fresher: ₹18,000 – ₹30,000/month</li>
              <li>Mid-Level (2–4 years): ₹40,000 – ₹70,000/month</li>
              <li>Senior Experts: ₹80,000 – ₹1.5L/month or more</li>
              <li>VFX & Animation salary abroad: $2,500 – $6,000</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/newmm.jpg"
              alt="Morph Meta Academy"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </div>
        </section>

        {/* ---------------------- STATS SECTION ---------------------- */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-900/40 rounded-3xl p-6">

            {[
              { label: "Placement Rate", value: "95%" },
              { label: "Years of Experience", value: "25" },
              { label: "Expert Faculty", value: "100%" },
              { label: "Professionals Trained", value: "300+" },
            ].map((item, i) => (
              <div key={i} className="text-center border-r border-gray-700 last:border-none">
                <p className="text-4xl font-bold text-yellow-400">{item.value}</p>
                <p className="text-gray-300 mt-1">{item.label}</p>
              </div>
            ))}

          </div>
        </section>

        {/* ---------------------- JOB ROLES + FORM ---------------------- */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold">Popular Animation & VFX Job Profiles</h2>
            <p className="mt-3 text-gray-300">
              Animation and VFX professionals are in high demand across industries like 
              film, gaming, architecture, advertising, and IT.
            </p>

            <p className="mt-4 text-yellow-400 font-semibold">Here are some popular job roles you can aim for:</p>

            <ul className="mt-3 space-y-2 text-gray-200">
              <li>3D Animator</li>
              <li>VFX Artist</li>
              <li>Game Designer</li>
              <li>Character Designer</li>
              <li>Motion Graphics Artist</li>
              <li>Storyboard Artist</li>
              <li>Lighting and Rigging Artist</li>
              <li>Multimedia Specialist</li>
            </ul>

            <p className="mt-4 text-yellow-400 font-semibold">Want to Work Abroad?</p>

            <p className="text-gray-300">
              Many of our alumni work in the UK, USA, Canada, and Australia — thanks to 
              international-standard training at Morph Academy.
            </p>
          </div>

          <div>
            <Form2 />
          </div>
        </section>

        {/* ---------------------- COURSES SECTION ---------------------- */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <h2 className="text-center text-3xl font-semibold">Courses at Morph Academy</h2>
          <p className="text-center text-gray-400 mt-2 mb-10">
            We offer full-time and part-time programs with flexible timings:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "B.Sc in Animation & Multimedia",
              "Diploma in Animation & VFX",
              "Certificate Courses in 3D, AR/VR & Game Design",
              "Motion Graphics & Compositing Programs",
            ].map((title, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-900 transition">
                <img src="/images/icons8-tick-80.png" className="w-12 mb-4" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
            ))}

          </div>
        </section>

        {/* ---------------------- YOUTUBE TESTIMONIAL GRID ---------------------- */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <h4 className="text-center text-2xl">Testimonials</h4>
          <h1 className="text-center text-yellow-400 text-3xl font-bold mt-2">
            Employment-Driven Education at Morph Academy
          </h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mt-4">
            Real stories from real students building real careers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

            {[
              "X4-X0o1T6jg",
              "vxQIbUpjleo",
              "GWn9z04sEKQ",
              "5Xlc2tV9MLk",
              "2amlGJX435Q",
              "Kwd9hWrEnK4",
            ].map((id, i) => (
              <div key={i} className="flex justify-center">
                <iframe
                  width="315"
                  height="560"
                  className="rounded-xl shadow-lg"
                  src={`https://youtube.com/embed/${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}

          </div>
        </section>

      </div>
    </>
  );
}
