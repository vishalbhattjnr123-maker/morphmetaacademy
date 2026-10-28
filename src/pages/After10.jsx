import MetaSeo from "../Components/MetaSEO";

export default function After10() {
  const seo = {
    title: "Best Animation Courses for Students After 10th",
    description:
      "Explore the best animation courses for students after 10th! Kickstart your creative career with expert training in 2D & 3D animation, design, and visual effects. Join now and unleash your imagination!",
    keyword:
      "Best Animation Courses, Animation Courses After 10th, Animation for Students, Animation and Design Programs, Career in Animation, Animation Training for Beginners, Animation Classes for Teens, Animation Career After 10th",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      {/* Page Wrapper */}
      <div className="w-full bg-black text-white">

        {/* Banner */}
        <div className="w-full border-b border-yellow-600/30">
          <img
            className="w-full object-cover max-h-[550px]"
            src="/images/vfx-and-antimation-trainig.jpg"
            alt="Morph Animation Academy"
          />
        </div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Best Animation Courses for Students After 10th
              </h1>

              <p className="text-gray-300 mt-6 leading-relaxed">
                Morph Animation Academy offers industry-leading animation
                courses designed for students who have completed the 10th grade.
                Focusing on foundational skills in 2D/3D animation, VFX, and
                graphic design, these courses prepare students with practical
                skills using advanced tools.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                With lifetime placement support, students are trained to excel
                in animation, filmmaking, gaming, and multimedia industries with
                confidence.
              </p>
            </div>

            <div>
              <img
                className="rounded-3xl shadow-lg shadow-yellow-600/10"
                src="/images/header/UI-UX-Designs-top-bar.jpg"
                alt="Placement"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#111] rounded-3xl p-10 shadow-lg shadow-yellow-600/10">
            {[
              { num: "95%", title: "Placement Rate" },
              { num: "32", title: "Years of Experience" },
              { num: "100%", title: "Expert Faculty" },
              { num: "500+", title: "Professionals Trained" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center border-r last:border-none border-yellow-600/20"
              >
                <h2 className="text-4xl font-bold text-yellow-500">{item.num}</h2>
                <p className="text-gray-300 mt-2">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-24">
            <h2 className="text-center text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto">
              Choose Morph Animation Academy for expert-led training, modern
              tools, and career-ready skills in animation and VFX.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Industry Focused",
                  text: "Our courses match the real industry's evolving demands.",
                },
                {
                  title: "Modern Labs",
                  text: "Learn with the latest animation and VFX tools.",
                },
                {
                  title: "Expert Faculty",
                  text: "Get trained by professionals with years of experience.",
                },
                {
                  title: "Placement Support",
                  text: "Placement assistance in top animation studios.",
                },
              ].map((box, i) => (
                <div
                  key={i}
                  className="bg-[#111] p-6 rounded-2xl shadow-md shadow-yellow-500/10 border border-yellow-600/20"
                >
                  <img
                    src="/images/icons8-tick-80.png"
                    alt={box.title}
                    className="w-14 mb-4 opacity-80"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {box.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{box.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How We Help Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24 items-center">
            <img
              className="rounded-3xl shadow-lg shadow-yellow-600/10"
              src="/images/after12.jpg"
              alt="How We Help"
            />

            <div>
              <h2 className="text-3xl font-bold mb-6">How Do We Help Students?</h2>

              <ul className="text-gray-300 space-y-3 leading-relaxed">
                {[
                  "Rigorous training to make students job-ready.",
                  "Workshops with industry experts.",
                  "Industrial visits and real studio exposure.",
                  "Case studies and group projects.",
                  "Mock interviews and resume building.",
                  "Team-building group activities.",
                  "Alumni networking meets.",
                  "Personal counseling sessions.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-yellow-500">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Eligibility Accordion */}
          <div className="mt-24">
            <h2 className="text-center text-4xl font-bold mb-12">Eligibility</h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  title: "Certificate Courses",
                  text: "Completion of Class 10 from a recognized board.",
                },
                {
                  title: "Diploma Courses",
                  text: "Completion of Class 10 with minimum 50% marks.",
                },
                {
                  title: "Advanced Diploma",
                  text: "Class 10 with minimum 60% marks.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="bg-[#111] p-6 rounded-xl border border-yellow-600/20 shadow-yellow-500/5 shadow-md"
                >
                  <summary className="cursor-pointer text-xl font-semibold text-yellow-400">
                    {item.title}
                  </summary>
                  <p className="text-gray-300 mt-3">{item.text}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-24">
            <h2 className="text-center text-4xl font-bold mb-2">Testimonials</h2>
            <p className="text-center text-gray-400 mb-12 text-sm">
              The Indian Animation & Media industry is expected to employ 41 lakh professionals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                "https://www.youtube.com/embed/cIz2i5r9cW0",
                "https://www.youtube.com/embed/NvSfFgBRDfM",
                "https://www.youtube.com/embed/Wf-8XEr1jzU",
                "https://www.youtube.com/embed/mlQGV2gFIxw",
                "https://www.youtube.com/embed/V8zE7D_K7Cs",
                "https://www.youtube.com/embed/bAZFMYOqjFU",
              ].map((url, i) => (
                <iframe
                  key={i}
                  className="w-full h-64 rounded-xl shadow-lg shadow-yellow-600/10"
                  src={url}
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={`testimonial-${i}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
