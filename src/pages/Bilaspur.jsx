import Form2 from "../Components/Form2";
import MetaSeo from "../Components/MetaSEO";

export default function Bilaspur() {
  const seo = {
    title: "Best Animation Institute in Bilaspur, Himachal Pradesh ",
    description:
      "Unlock your creative potential at Morph Animation Academy, the best animation institute in Bilaspur, Himachal Pradesh. Learn 2D/3D animation, VFX, and graphic design with expert faculty, state-of-the-art facilities, and lifetime placement support.",
    keyword:
      "Animation institute in Bilaspur, best animation courses in Bilaspur, Morph Animation Academy Bilaspur, 2D animation training Bilaspur, 3D animation courses Himachal Pradesh, VFX training Bilaspur, graphic design institute Bilaspur, multimedia courses in Bilaspur, animation academy Himachal Pradesh, career in animation Bilaspur.",
  };

  const stats = [
    { value: "95%", label: "Placement Rate" },
    { value: "32", label: "Years of Experience" },
    { value: "100%", label: "Expert Faculty" },
    { value: "500+", label: "Professionals Trained" },
  ];

  const whyChoose = [
    {
      title: "Industry Focused",
      desc: "Courses designed to meet the dynamic demands of the animation and visual effects industry.",
    },
    {
      title: "State-of-the-Art Facilities",
      desc: "Learn using the latest tools and technologies in fully equipped labs.",
    },
    {
      title: "Expert Faculty",
      desc: "Learn from experienced professionals with in-depth industry knowledge.",
    },
    {
      title: "Placement Support",
      desc: "Assistance with internships and placements in leading animation studios across India.",
    },
  ];

  const eligibility = [
    {
      title: "Certificate Courses",
      body: "Completion of class 10 from a recognized board.",
    },
    {
      title: "Diploma Courses",
      body: "Completion of class 10 with a minimum of 50% marks.",
    },
    {
      title: "Advanced Diploma",
      body: "Successful completion of class 10 with 60% marks.",
    },
  ];

  const testimonials = [
    "cIz2i5r9cW0",
    "NvSfFgBRDfM",
    "Wf-8XEr1jzU",
    "mlQGV2gFIxw",
    "V8zE7D_K7Cs",
    "bAZFMYOqjFU",
  ];

  return (
    <>
      {/* SEO */}
      <MetaSeo meta={seo} />

      {/* Hero Banner */}
      <section className="relative w-full">
        <img
          src="/images/Animation-Gallery-meta-morph-tp-banner.jpg"
          alt="Morph Animation Academy"
          className="w-full h-[60vh] object-cover"
        />
      </section>

      {/* About Intro */}
      <section className="relative bg-neutral-900 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl mb-3 font-bold text-white">
                Best Animation Institute in Bilaspur, Himachal Pradesh
              </h1>
              <p className="text-gray-300 mb-4">
                Morph Animation Academy is your gateway to a thriving career in
                the animation and multimedia industry. Located in the scenic
                town of Bilaspur, Himachal Pradesh, we offer industry-focused
                courses in 2D/3D animation, VFX, and graphic design.
              </p>
              <p className="text-gray-300 mb-4">
                With cutting-edge facilities, expert faculty, and lifetime
                placement support, we ensure our students are equipped to meet
                the dynamic demands of the animation, gaming, and multimedia
                industries.
              </p>
              <p className="text-gray-300">
                Start your journey to a rewarding career in animation with Morph
                Animation Academy in{" "}
                <a
                  className="text-white font-semibold underline"
                  href="https://en.wikipedia.org/wiki/Bilaspur,_Himachal_Pradesh"
                >
                  Bilaspur
                </a>
                , Himachal Pradesh!
              </p>
            </div>
            <div className="text-center">
              <img
                className="rounded-2xl shadow-lg w-full object-cover"
                src="/images/animation-work-student9.jpg"
                alt="Morph Meta Academy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us + Form + Stats */}
      <section className="relative py-16 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* About Us Box */}
            <div className="lg:col-span-2  p-8">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-400 text-lg mb-6">
                Bring Your Vision to Life With Expertise and Dedication
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                <a href="/" className="font-semibold text-yellow-400">
                  Morph Academy
                </a>{" "}
                is a Skilled IT training institute founded in Chandigarh in
                2009. We proudly introduced Multimedia & Animation Courses in
                Chandigarh with career-focused training.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                All courses are university-affiliated and industry-certified.
                With <span className="font-semibold">100% placement support</span>, we prepare every student for real-world opportunities.
              </p>

              {/* Stats inside About Us */}
              <div className="grid grid-cols-2 md:grid-cols-4 bg-gray-800 rounded-2xl mt-10 divide-x divide-gray-700 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="py-6">
                    <span className="block text-3xl font-bold text-yellow-400">
                      {stat.value}
                    </span>
                    <h5 className="text-gray-300 mt-1">{stat.label}</h5>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="">
              <Form2 />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center text-2xl font-bold mb-4">
            Why Choose Morph Animation Academy?
          </h2>
          <p className="text-center text-gray-400 mb-10">
            We are committed to expert-led training, cutting-edge tools, and
            career-ready skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="p-6 text-center bg-gray-900 rounded-xl shadow-sm"
              >
                <img
                  src="/images/icons8-tick-80.png"
                  alt={item.title}
                  className="mx-auto mb-3 w-14"
                />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Students */}
      <section className="relative py-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            className="rounded-2xl shadow-lg"
            src="/images/after12.jpg"
            alt="How We Help Students"
          />
          <div>
            <h3 className="font-bold text-xl mb-4">
              How Do We Help Our Students?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Comprehensive training to ensure job-readiness.</li>
              <li>Workshops led by industry experts.</li>
              <li>Industrial visits for hands-on exposure.</li>
              <li>Case studies and group projects.</li>
              <li>Mock interviews for skill refinement.</li>
              <li>Team-building activities.</li>
              <li>Networking with alumni and professionals.</li>
              <li>Personal counseling & mentorship.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="relative py-16 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center text-3xl font-bold mb-8">Eligibility</h2>
          <div className="space-y-4">
            {eligibility.map((item, idx) => (
              <details
                key={idx}
                className="bg-gray-900 rounded-lg p-4 shadow"
                open={idx === 0}
              >
                <summary className="cursor-pointer font-semibold">
                  {item.title}
                </summary>
                <p className="mt-2 text-gray-400">{item.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl text-center font-bold mb-3 text-white">
            Testimonials
          </h2>
          <p className="text-gray-400 text-center mb-6">
            The Indian Media & Entertainment industry is expected to employ 41
            lakh+ professionals by 2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((id, idx) => (
              <iframe
                key={idx}
                className="w-full h-56 rounded-xl shadow-lg"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube testimonial"
                frameBorder="0"
                allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
