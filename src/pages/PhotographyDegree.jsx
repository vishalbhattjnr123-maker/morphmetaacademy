import Form2 from "../Components/Form2";
import MetaSeo from "../Components/MetaSEO";

export default function PhotographyDegree() {
  const seo = {
    title: "Govt-Approved Photography & Filmmaking Course in Punjab and Chandigarh",
    description:
      "Join a govt-approved degree or diploma in photography and filmmaking in Chandigarh & Punjab. Start your career after 10th or 12th with 100% placement support.",
    keyword:
      "photography course in Punjab, filmmaking course in Chandigarh, govt approved photography degree, film & TV production Punjab, photography after 10th, filmmaking after 12th, Morph Academy photography course, cinematography course Punjab, digital filmmaking training, UGC recognized photography institute, photography & film direction course Chandigarh",
  };

  const courseList = [
    "Diploma in Professional Photography",
    "Bachelor of Arts in Film Making & Photography",
    "B.Voc in Film & TV Production (Govt-Approved)",
    "Diploma in Cinematography & Direction",
    "Certificate in Digital Filmmaking",
  ];

  const stats = [
    { num: "95%", label: "Placement Rate" },
    { num: "25+", label: "Years of Experience" },
    { num: "100%", label: "Expert Faculty" },
    { num: "500+", label: "Industry Experts" },
  ];

  const morphBenefits = [
    "Govt-approved courses with university affiliations",
    "Training in DSLR, videography & editing",
    "Industry mentors + live projects",
    "100% placement & freelancing support",
  ];

  const testimonialIDs = [
    "X4-X0o1T6jg",
    "vxQIbUpjleo",
    "GWn9z04sEKQ",
    "5Xlc2tV9MLk",
    "2amlGJX435Q",
    "Kwd9hWrEnK4",
  ];

  return (
    <>
      <MetaSeo meta={seo} />

      <div className="w-full bg-[#0c0c0c] text-white">

        {/* ---------- HERO BANNER ---------- */}
       <div className="w-full border-b border-gray-800">
  <img
    src="/images/film-photo-card-banner1.jpg"
    className="hidden md:block w-full object-cover"
    alt="Morph Animation Academy"
  />
</div>


        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">

          {/* ---------- HERO TEXT & INTRO (Mobile Priority) ---------- */}
       <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mt-16 md:mt-0">
  Govt-Approved Degree in Photography & Filmmaking
</h1>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mt-3 md:mt-4 text-sm md:text-base">
            Chandigarh & Punjab’s Most Trusted Govt-Recognized Creative Media Academy
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-10 lg:mt-16">

            {/* ---------- LEFT CONTENT (First on Mobile) ---------- */}
            <div className="lg:col-span-6 space-y-5 lg:space-y-7 order-2 lg:order-1"> 

              <p className="text-xl md:text-2xl text-yellow-400 font-semibold">
                Turn Your Passion into a Professional Creative Career
              </p>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Are you passionate about cameras, storytelling, filmmaking, and capturing unforgettable moments?
                Do you dream of building a career in films, OTT,
                <a target="_blank" href="https://en.wikipedia.org/wiki/Photography" className="text-white underline mx-1">photography</a>,
                content creation, media, or advertising?
              </p>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                With the digital content industry booming, demand for skilled filmmakers, cinematographers, directors, and editors is higher than ever. Morph Academy provides UGC-recognized, NSDC-certified training with fully-equipped studios and placement support.
              </p>

              {/* ---------- COURSE LISTINGS ---------- */}
              <h2 className="text-yellow-400 font-semibold text-lg md:text-xl flex items-center gap-2 pt-4">
                <span>→</span> Photography & Filmmaking Courses After 10th & 12th
              </h2>

              <p className="text-gray-300 text-sm md:text-base">
                Students can directly enroll after 10th or 12th into:
              </p>

              {/* Course Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseList.map((title, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-xl shadow-lg border border-gray-800 transition transform hover:-translate-y-1"
                  >
                    <p className="font-bold text-yellow-500 text-sm md:text-base">{title}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-sm md:text-base">These programs are fully industry-oriented, combining creativity with practical learning.</p>
            </div>

            {/* ---------- RIGHT IMAGE (Mobile: Appears after text, but before Stats) ---------- */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <img
                src="/images/section/Untitled design (2).jpg"
                alt="Morph Meta Academy"
                className="rounded-2xl shadow-2xl border border-gray-700 w-full"
              />
            </div>
          </div>

          {/* ---------- STATS (Prominent on Mobile) ---------- */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-12 md:mt-20 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
            {stats.map((item, i) => (
              <div key={i} className="p-4 md:p-8 flex flex-col items-center border-r border-gray-800 last:border-none border-b md:border-b-0">
                <span className="text-3xl md:text-5xl font-bold text-yellow-500">{item.num}</span>
                <span className="text-gray-300 mt-2 md:mt-3 font-medium text-center text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* ---------- WHY STUDY + FORM (Stacked on Mobile) ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-16 md:mt-20">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
                Why Chandigarh & Punjab Are the Best Places to Study
              </h2>

              <p className="text-gray-300 text-sm md:text-base">Chandigarh and Punjab are emerging as creative hubs for:</p>

              <ul className="list-disc ml-6 text-gray-200 space-y-1 md:space-y-2 text-sm md:text-base">
                <li>Media & News Agencies</li>
                <li>Fashion & Modeling Studios</li>
                <li>Music Video Production</li>
                <li>Wedding Cinematography</li>
                <li>Digital Advertising</li>
                <li>Content Creation Agencies</li>
              </ul>

              
          <div className="hidden md:flex gap-6">
  <img
    src="/images/header/phtogphray-school-collages-pg-images.jpg"
    alt="Filmmaking and Direction courses"
    className="rounded-2xl shadow-2xl border border-gray-700 w-75"
  />

  <img
    src="/images/header/journalism.jpg"
    alt="Filmmaking and Direction courses"
    className="rounded-2xl shadow-2xl border border-gray-700 w-75"
  />
</div>


            </div>

            {/* ---------- FORM (Prominent CTA on Mobile) ---------- */}
            <div className="p-6 md:p-8 rounded-2xl shadow-xl">
            
              <Form2 />
            </div>
          </div>

          {/* ---------- GOVT APPROVED PROGRAMS & CAREERS (Image placed last for faster load) ---------- */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            
            {/* Left Column (Content) */}
            <div className="order-2 lg:order-1">
              <h2 className="text-yellow-400 font-semibold text-lg md:text-xl flex items-center gap-2">
                <span>→</span> Govt-Approved Degree Programs Curriculum
              </h2>

              <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base">
                Govt-recognized programs include modules like:
              </p>

              <ul className="space-y-1 text-gray-200 list-disc ml-6 mt-3 text-sm md:text-base">
                <li>Studio & outdoor shoots</li>
                <li>Scripting & storyboarding</li>
                <li>Camera handling & lighting</li>
                <li>Post-production & sound</li>
                <li>Film direction & cinematography</li>
                <li>Post-production workflows</li>
                <li>Sound design & mixing</li>
                <li>OTT-style filmmaking</li>
              </ul>

              <h3 className="text-yellow-400 font-semibold text-xl md:text-2xl mt-12 md:mt-20">
                Career Opportunities After Graduation
              </h3>

              <ul className="list-disc ml-6 text-gray-200 space-y-1 md:space-y-2 mt-4 text-sm md:text-base">
                <li>Professional Photographer (fashion, wedding, product)</li>
                <li>Cinematographer</li>
                <li>Film/TV Director</li>
                <li>Video Editor</li>
                <li>Scriptwriter</li>
                <li>Content Creator / Visual Artist</li>
                <li>Documentary Filmmaker</li>
                <li>Drone Videographer</li>
              </ul>

              <p className="text-gray-300 mt-4 text-sm md:text-base">Freelancing opportunities are huge in India’s creator economy.</p>
            </div>

            {/* Right Column (Image) */}
            <div className="order-1 lg:order-2">
              <img
                src="/images/Film-Making-&-Direction-courses (1).jpg"
                alt="Filmmaking and Direction courses"
                className="rounded-2xl shadow-2xl border border-gray-700 w-full"
              />
            </div>
          </div>

          {/* ---------- WHY CHOOSE MORPH ---------- */}
          <div className="mt-16 md:mt-24">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 text-white">Why Choose Morph Academy?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10">
              {morphBenefits.map((text, i) => (
                <div key={i} className="bg-gray-900/80 border border-gray-700 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <img src="/images/icons8-tick-80.png" className="w-8 md:w-12 mb-3 md:mb-4 opacity-80" alt="Tick icon" />
                  <h3 className="text-base md:text-lg font-semibold text-gray-200">{text}</h3>
                </div>
              ))}
            </div>
          </div>
{/* ---------- FAQ SECTION (Above Testimonials) ---------- */}
<div className="mt-16 md:mt-24">
  <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
    Frequently Asked Questions (FAQ)
  </h2>
  <p className="text-center text-gray-400 max-w-2xl mx-auto mt-3">
    Answers to the most common questions about our Govt-Approved Photography & Filmmaking Programs.
  </p>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

    {/* FAQ LEFT */}
    <div className="space-y-4">
      {[
        {
          q: "Which Govt-Approved Photography and Filmmaking courses are offered after 10th and 12th at Morph Academy?",
          a: `We offer BA in Film Making & Photography, B.Voc in Film & TV Production, 
              Diploma in Professional Photography, Diploma in Cinematography & Direction, 
              and Certificate in Digital Filmmaking.`
        },
        {
          q: "Is the Filmmaking and Photography degree Govt-recognized and UGC-approved?",
          a: `Yes. All major programs are UGC-recognized and NSDC-certified, 
              making Morph Academy one of the most trusted Govt-Approved academies in Punjab & Chandigarh.`
        },
        {
          q: "What practical training and industry-oriented curriculum is included?",
          a: `Modules include studio & outdoor shoots, film direction, cinematography, 
              storyboarding, post-production, sound design, lighting, and OTT filmmaking.`
        },
        {
          q: "What career opportunities are available after the course?",
          a: `Careers include Professional Photographer, Cinematographer, Film/TV Director, 
              Video Editor, Scriptwriter, Visual Artist, and Drone Videographer.`
        },
        {
          q: "Does Morph Academy offer placement support?",
          a: `Yes! We offer 95% placement rate with 100% job & freelancing support through industry mentors & companies.`
        },
        {
          q: "Why is Chandigarh & Punjab the best location to study filmmaking?",
          a: `Because it is a growing hub for media agencies, music videos, fashion studios, 
              digital advertising, wedding cinematography & content production.`
        },
        {
          q: "How experienced is the faculty?",
          a: `Morph has 25+ years of experience with 100% expert faculty and a strong network of 500+ industry professionals.`
        },
        {
          q: "What makes Morph Academy the best choice?",
          a: `Govt-approved programs, NSDC certification, professional studios, 
              DSLR & editing training, live projects, placements & industry mentors.`
        },
        {
          q: "Can non-science or commerce/arts students join?",
          a: `Yes! Students from any stream can join after 10th or 12th. No technical background required.`
        },
        {
          q: "How can I contact Morph Academy for admissions?",
          a: `Fill out the contact form or call for details about fees, admissions, and program info.`
        }
      ].map((faq, i) => (
        <details
          key={i}
          className="group bg-gray-900 border border-gray-700 rounded-xl p-4 md:p-5 transition"
        >
          <summary className="cursor-pointer text-yellow-400 font-semibold text-base md:text-lg flex justify-between items-center">
            {faq.q}
            <span className="transition-transform group-open:rotate-180 text-white">▼</span>
          </summary>
          <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
            {faq.a}
          </p>
        </details>
      ))}
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="flex justify-center">
      <img
        src="/images/stu7.jpg"
        alt="FAQ Photography Filmmaking"
        className="rounded-2xl shadow-2xl w-full object-cover"
      />
    </div>

  </div>
</div>

          {/* ---------- TESTIMONIALS ---------- */}
          <div className="mt-16 md:mt-24">
            <h4 className="text-center text-yellow-400 text-xl md:text-2xl">Testimonials</h4>
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-2">Employment-Driven Education</h1>
            <p className="text-center text-gray-300 max-w-3xl mx-auto mt-4 text-sm md:text-base">
              Real success stories from students working in media, movies, studios, and digital content production.
            </p>

            {/* Testimonial Videos (Scrollable on Mobile, Grid on Tablet/Desktop) */}
            <div className="flex overflow-x-scroll md:grid md:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-12 p-2">
              {testimonialIDs.map((id, i) => (
                <div key={i} className="flex-shrink-0 w-80 md:w-full flex justify-center">
                  <iframe
                    className="rounded-xl shadow-xl border border-gray-800"
                    width="320"
                    height="560"
                    src={`https://youtube.com/embed/${id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Student Testimonial ${i + 1}`}
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