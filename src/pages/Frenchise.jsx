import Form2 from "../Components/Form2";
import Form3 from "../Components/Form3";
import MetaSeo from "../Components/MetaSEO";
import { motion } from "framer-motion";
import Youtube from "../Components/Youtube";
import StudentBenefits from "../Components/StudentBenefits";


export default function Frenchise() {
  const seo = {
    title: "Start Your Own Animation & VFX Training Institute with Morph Meta Academy",
    description:
      "Join Morph Academy, the trailblazer in IT and Animation training. Become a franchise partner and offer university-affiliated job-oriented courses in Web Designing, Animation, Graphic Designing, and more. 100% Placement Assistance.",
    keyword:
      "Morph Academy Franchise, IT Training Franchise, Animation Courses Franchise, Web Designing Franchise, Graphic Designing Franchise, Multimedia Franchise, Job-Oriented Courses Franchise, Education Franchise, University Affiliated Courses, Career Training Franchise,Animation Institute Franchise Opportunity In India , Best Animation Institute Franchise In India",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      {/* Hero Image */}
      <div
        className="relative w-full border-b border-[#5a0505] pt-[64px] lg:pt-[102px]"
        style={{ background: "linear-gradient(to right, #630202 0%, #3e080e 50%, #1a0203 100%)" }}
      >
        <img
          src="/images/animation-vf-bannes.jpg"
          alt="Meta Morph Franchise Banner"
          className="w-full h-auto max-h-[460px] object-cover block shadow-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 className="text-4xl md:text-4xl font-extrabold text-white text-center drop-shadow-xl">
    Start{" "}
    <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
      Your Own Animation & VFX Training Institute
    </span>{" "}
    with Morph Meta Academy
  </h1>
  <h2 className="text-lg md:text-xl font-semibold text-yellow-400 text-center mt-5 mb-10">
    25+ Years of Excellence | NSDC Certified | University Affiliated
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    {/* Form / Image (Order1 on mobile, Order2 on desktop) */}
    <div className="order-1 lg:order-2">
      {/* <Form2 /> */}
      <img
        src="/images/11.png"
        alt="Franchise"
        className="rounded-2xl shadow-xl w-full"
      />
    </div>

    {/* Left Content (Order2 on mobile, Order1 on desktop) */}
    <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
      <p className="text-gray-300 m-0 pt-5 leading-relaxed">
        Join the booming{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-pink-400 bg-clip-text text-transparent text-lg font-semibold">
          ₹2.7 trillion Indian M&E industry
        </span>{" "}
        and lead the AVGC revolution with Morph Meta Academy.
      </p>

    <p className="text-gray-300 leading-relaxed mt-3">
  <a href="/" className="text-white-400 hover:underline">
    Morph Academy
  </a>{" "}
  has been a pioneer in IT and Multimedia education for over 25 years. We
  hold the distinction of being the first institute in Chandigarh to
  introduce Multimedia and Animation courses, empowering thousands of
  students to launch rewarding careers in creative and technology-driven
  industries.
</p>

{/* NEW HIGHLIGHTED CONTENT */}
<div className="mt-6 space-y-4">
  <div className="flex items-start gap-3">
    <span className="text-yellow-400 text-2xl">➤</span>
    <p className="text-gray-200 leading-relaxed">
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
        $26 BN AVGC-XR industry
      </span>{" "}
      projected to create <span className="font-semibold">30 lakh jobs by 2030</span>.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-yellow-400 text-2xl">➤</span>
    <p className="text-gray-200 leading-relaxed">
      Aligned with the{" "}
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
        Viksit Bharat mission
      </span>, supporting national growth goals.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-yellow-400 text-2xl">➤</span>
    <p className="text-gray-200 leading-relaxed">
      Future-ready curriculum that equips students with{" "}
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
        global AVGC-XR skills
      </span>.
    </p>
  </div>
</div>


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 text-center"
      >
        {[
          { value: "Space Requirements", label: "1,500 – 2,000 Sq. ft" },
          { value: "Investment", label: "₹25 – 30 Lakhs" },
          { value: "Professionals Serving", label: "500+" },
          { value: "Years of Legacy", label: "25+" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-md border border-yellow-400"
          >
            <h3 className="text-1xl font-bold text-yellow-400">{stat.value}</h3>
            <p className="text-2xl font-bold text-gray-300 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</div>

<Youtube/>
        {/* Advantages */}
   <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 items-start">
    
    {/* Left Side - Text Content */}
    <div>
      <h3 className="text-2xl text-center lg:text-left font-bold text-yellow-400 mt-10 mb-8">
        Why Choose Morph Meta Academy Franchise?
      </h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center lg:text-left"
      >
        {[
          {
            title: "Proven Business Model",
            description:
              "25+ years of franchise success in education, giving you a reliable blueprint to grow your business.",
          },
          {
            title: "University Affiliated Degree",
            description:
              "Boost credibility & student trust with degrees and diplomas co-crafted with leading universities.",
          },
          {
            title: "AI-Powered Curriculum",
            description:
              "Offer future-ready courses in Animation, VFX, Game Design, AR/VR & Metaverse to attract top students.",
          },
          {
            title: "Complete Setup & Marketing",
            description:
              "From interiors to student leads, we provide everything you need to launch and scale your academy.",
          },
          {
            title: "Training & Support",
            description:
              "Get continuous faculty training, technology upgrades, and business guidance to ensure long-term success.",
          },
          {
            title: "High Demand, High ROI",
            description:
              "Tap into the booming creative and tech education sector where skilled professionals are in constant demand, ensuring steady enrollments and profitability.",
          },
        ].map((advantage, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-md border border-yellow-400"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              {advantage.title}
            </h3>
            <p className="text-white leading-relaxed">{advantage.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Right Side - Form */}
    <div className="flex justify-center lg:justify-end">
      <div className="bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-lg border border-yellow-400 p-6">
       
        <Form3 />
      </div>
    </div>

  </div>
</div>

<StudentBenefits/>
  <div className="order-1 lg:order-2  pb-20 items-center bg-gradient-to-r from-indigo-900 via-purple-900 to-black">
    <div className="container max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-4xl font-extrabold text-white text-center drop-shadow-xl mb-10 pt-10 pb-5">
            Support System for Franchise
            </h2>
            <div className="space-y-5 text-gray-200">
             
         <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
>
  {[
    {
      title: "Turnkey Setup Assistance",
      desc: "Layout, interior design, and equipment procurement for smooth setup.",
      icon: "🏗️",
    },
    {
      title: "Marketing Support",
      desc: "National & local campaigns, lead generation, and branding assistance.",
      icon: "📢",
    },
    {
      title: "Faculty Recruitment & Training",
      desc: "Hiring support and continuous skill upgradation programs.",
      icon: "👨‍🏫",
    },
    {
      title: "Course Material & Curriculum",
      desc: "Industry-relevant syllabus developed & updated by our R&D team.",
      icon: "📚",
    },
    {
      title: "Student Placement Cell",
      desc: "Corporate tie-ups, internship programs, and career support.",
      icon: "💼",
    },
    {
      title: "Corporate-Certified Events",
      desc: "Scholarships, competitions, and industry exposure opportunities.",
      icon: "🏆",
    },
    {
      title: "Web & Digital Marketing",
      desc: "SEO, social media ads, Google Ads, and lead generation strategies.",
      icon: "🌐",
    },
    {
      title: "Creative Media Support",
      desc: "Graphics, video ads, and print campaign assistance.",
      icon: "🎨",
    },
    {
      title: "CRM & LMS Support",
      desc: "End-to-end student management & learning systems.",
      icon: "🖥️",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-2xl p-6 shadow-md border border-yellow-400"
    >
      <div className="text-4xl mb-3">{item.icon}</div>
      <h3 className="text-xl font-semibold text-yellow-400">{item.title}</h3>
      <p className="text-gray-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  ))}
</motion.div>


            </div>
          </div>
</div>

    
    </>
  );
}
