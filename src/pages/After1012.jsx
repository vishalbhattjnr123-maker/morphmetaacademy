import Form2 from "../Components/Form2";
import MetaSeo from "../Components/MetaSEO";

export default function After1012() {
  const seo = {
    title: "Best Animation Courses After 10th & 12th in India",
    description:
      "Explore top animation courses after 10th and 12th in India, including 2D/3D Animation, VFX, and Film Making. Govt-approved degrees, diploma programs, and 3D animation training in Chandigarh with 100% placement support at Morph Academy.",
    keyword:
      "animation courses after 10th, animation courses after 12th, animation degree in India, 3D animation course Chandigarh, B.Sc animation Chandigarh, animation institute in Punjab, VFX courses, govt approved animation degree, Morph Academy Chandigarh, best animation institute",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      <div className="bg-black min-h-screen">
        {/* ---------------- Banner ---------------- */}
        <div className="w-full border-b border-gray-800">
          <img
            className="w-full object-cover"
            src="/images/Creative-Gallery-meta-morph-tp-banner.jpg"
            alt="Morph Animation Academy"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          {/* ---------------- Intro Section ---------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-white font-bold text-3xl leading-snug">
                Animation Courses After 10th and 12th in India
              </h1>

              <p className="text-yellow-400 font-medium text-xl mt-4">
                Many students now start their animation careers right after 10th
                or 12th. You can begin with:
              </p>

              <ul className="space-y-2 mt-4 pl-4">
                <li className="text-gray-300">
                  • Diploma in 2D & 3D{" "}
                  <a
                    className="text-yellow-400 underline"
                    href="https://en.wikipedia.org/wiki/Animation"
                  >
                    Animation
                  </a>
                </li>
                <li className="text-gray-300">
                  • Certificate Course in Graphic Design & VFX
                </li>
                <li className="text-gray-300">
                  • Bachelor’s Degree in Animation & Multimedia
                </li>
                <li className="text-gray-300">
                  • B.Sc. in Animation and Film Making
                </li>
              </ul>

              <p className="text-gray-400 mt-4 pl-4">
                These programs teach drawing, storytelling, digital tools,
                animation software, 3D modeling, character design, and more.
              </p>

              {/* ---------------- Heading + Arrow ---------------- */}
              <h3 className="text-yellow-400 flex items-center gap-2 mt-6 text-xl">
                <span>➤</span> Govt-Approved Degree in Animation and Film Making
              </h3>

              <p className="text-gray-400 mt-3 pl-4">
                Students looking for a govt-approved degree in animation and
                film making in Punjab & Chandigarh can join:
              </p>

              <ul className="space-y-2 mt-4 pl-4">
                <li className="text-gray-200">
                  • B.Sc. in Animation, VFX & Film Making
                </li>
                <li className="text-gray-200">
                  • Bachelor of Design in Animation & Multimedia
                </li>
                <li className="text-gray-200">
                  • UGC-approved B.Voc in Film & TV Production
                </li>
              </ul>

              {/* ---------------- 3D Animation ---------------- */}
              <h3 className="text-yellow-400 flex items-center gap-2 mt-6 text-xl">
                <span>➤</span> 3D Animation Course in Chandigarh
              </h3>

              <p className="text-gray-400 mt-3 pl-4">
                If you're specifically interested in 3D animation, institutes
                like <a href="/" className="text-yellow-400 underline">Morph Academy</a> offer:
              </p>

              <ul className="space-y-2 mt-4 pl-4">
                <li className="text-gray-200">• 3D Modeling</li>
                <li className="text-gray-200">• Rigging</li>
                <li className="text-gray-200">• Lighting & Rendering</li>
                <li className="text-gray-200">• Motion Graphics</li>
                <li className="text-gray-200">• Game Design and AR/VR</li>
              </ul>
            </div>

            {/* ---------------- Right Image ---------------- */}
            <div className="flex justify-center lg:justify-end">
              <img
                className="rounded-3xl shadow-lg max-w-md"
                src="/images/1010.jpg"
                alt="Morph Meta Academy"
              />
            </div>
          </div>

          {/* ---------------- Stats Section ---------------- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#121212] py-10 px-6 rounded-3xl mt-16">
            {[
              ["95%", "Placement Rate"],
              ["25", "Years of Experience"],
              ["100%", "Expert Faculty"],
              ["300+", "Professionals Trained"],
            ].map(([value, label], i) => (
              <div
                key={i}
                className="border-r last:border-none border-gray-800 text-center px-4"
              >
                <h3 className="text-yellow-400 text-4xl font-bold">{value}</h3>
                <p className="text-gray-300 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* ---------------- Admission Section ---------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
            <div className="lg:col-span-2">
              <h2 className="text-white text-3xl font-semibold">
                Admissions Open for 2025–26
              </h2>

              <p className="text-gray-400 mt-4">
                Whether you're in Punjab, Mohali, or Chandigarh, start your
                journey with a govt-approved animation course that builds skills
                and confidence.
              </p>

              <h3 className="text-yellow-400 flex items-center gap-2 mt-8 text-xl">
                <span>➤</span> Best Animation Institute in Chandigarh
              </h3>

              <p className="text-gray-400 pl-4 mt-3">
                When choosing an animation institute, look for:
              </p>

              <ul className="space-y-2 mt-4 pl-4">
                <li className="text-gray-200">• Govt-approved curriculum</li>
                <li className="text-gray-200">• Live project training</li>
                <li className="text-gray-200">• 100% placement support</li>
                <li className="text-gray-200">
                  • Expert trainers from the industry
                </li>
                <li className="text-gray-200">
                  • Facilities for AR/VR, VFX & film production
                </li>
              </ul>

              <p className="text-gray-400 mt-5">
                Morph Academy stands out as one of the top-rated institutes
                offering diploma, degree, and short-term animation programs.
              </p>
            </div>

            {/* ---------------- Form ---------------- */}
            <div>
              <Form2 />
            </div>
          </div>

          {/* ---------------- Career Opportunities ---------------- */}
          <div className="mt-20">
            <h2 className="text-center text-white text-3xl font-semibold">
              Career Opportunities After Animation Courses
            </h2>
            <p className="text-center text-gray-400 mt-2">
              With the right skills, you can work as:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
              {["3D Animator", "AR/VR Specialist", "VFX Artist", "Game Developer"].map(
                (role, index) => (
                  <div
                    key={index}
                    className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-yellow-500 transition"
                  >
                    <img
                      className="w-12 mb-4"
                      src="/images/icons8-tick-80.png"
                      alt={role}
                    />
                    <h3 className="text-white text-xl font-semibold">
                      {role}
                    </h3>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ---------------- Testimonials ---------------- */}
          <div className="mt-20 text-center">
            <h4 className="text-white text-3xl">Testimonials</h4>
            <h1 className="text-yellow-400 text-2xl mt-3 font-semibold">
              Employment-Driven Education at Morph Academy
            </h1>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              We believe in skills that lead to careers. Our training is aligned
              with real industry needs in the Media & Entertainment sector.
            </p>

            {/* ------- Video Grid ------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
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
                    className="rounded-2xl shadow-lg"
                    width="315"
                    height="560"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
