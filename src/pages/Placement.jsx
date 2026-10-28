import Placement_card from "../Components/Moving";
import MetaSeo from "../Components/MetaSEO";
import { motion } from "framer-motion";


export default function Placement() {
  const seo = {
    title: "Animation Placement in Chandigarh",
    description:
      "Animation Placement in Chandigarh If you want to join animation course for a job the right place for a career and job at Morph Academy",
    keyword:
      "Graphics Designing Course in chandigarh, Graphics Designing Diploma in chandigarh, Graphics Design Institutes in chandigarh, Best Graphics Design Institute in chandigarh, Graphics Designing Classes  in chandigarhNearby, Top Graphics Design Academy near me",
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
          src="/images/banner-placement.png"
          alt="Morph Academy Placement - Learn. Earn. Grow"
          className="w-full h-auto object-cover max-h-[460px] block shadow-2xl"
        />
      </section>

      {/* Intro Section */}
      <section className="relative text-white py-16 px-6 md:px-12">
        <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
             <h1 className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-xl">
             <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent"> Placement</span> & Career Opportunities
            </h1>
            <h2 className="my-4 text-lg md:text-xl text-yellow-400 max-w-2xl mx-auto">
              Explore how we connect top talent with leading companies for
              successful careers.
            </h2>
            <p className="text-gray-300 mb-6">
              At Morph Academy, we are dedicated to shaping successful careers
              in Animation, VFX, and Multimedia. With{" "}
              <span className="text-yellow-400 font-semibold">
                100% Placement Assistance
              </span>
              , we ensure that every student becomes industry-ready and capable
              of working with top studios worldwide.
            </p>
            <p className="text-gray-300 mb-6">
              From building portfolios to resume prep, mock interviews, soft
              skills training, internships, and job placements – we support
              every step of your journey.
            </p>
            <p className="text-gray-300">
              Our{" "}
              <span className="text-yellow-400 font-semibold">
                2D & 3D Animation Courses
              </span>{" "}
              transform creative passion into rewarding careers. With lifetime
              career guidance and a proven placement record, Morph Academy opens
              doors to endless possibilities.
            </p>
          </div>
          <img
            src="/assets/images/top11.jpg"
            alt="Morph Academy Placement"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-black font-semibold">
          <div>
            <p className="text-4xl font-bold">95%</p>
            <p>Placement</p>
          </div>
          <div>
            <p className="text-4xl font-bold">25+</p>
            <p>Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p>Training by Professionals</p>
          </div>
          <div>
            <p className="text-4xl font-bold">500+</p>
            <p>Industry Professionals</p>
          </div>
        </div>
      </section>

      {/* Placement Help Section */}
   <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Image - First on mobile, second on desktop */}
    <img
      src="/images/Animation-&-VFX-courses (1).jpg"
      alt="How We Help Students"
      className="rounded-2xl order-1 md:order-1"
    />

    {/* Text - Second on mobile, first on desktop */}
    <div className="order-2 md:order-2">
      <h2 className="text-yellow-400 text-2xl font-semibold mb-6">
        How Exactly Do We Help Our Students?
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-1 gap-6 text-center"
      >
        {[
          "Rigorous Training Sessions to make students job-ready",
          "Industry Workshops & Regular Visits",
          "Case Studies & Group Discussions",
          "Mock Interviews & Soft Skills Training",
          "Resume Building & Career Counselling",
          "Alumni Networking Events",
        ].map((label, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-md border border-yellow-400"
          >
            <p className="text-gray-300 font-medium">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

{/* Eligibility Criteria */}
<section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Text - First on mobile, second on desktop */}
    <div className="order-2 md:order-1">
      <h2 className="text-yellow-400 text-2xl font-semibold mb-6">
        Eligibility Criteria for Placements
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6"
      >
        {[
          "Maintain Attendance Norms",
          "Submit Assignments on Time",
          "Clear Fee Payments",
          "Meet Academic Standards",
          "Register & Complete Placement Process",
          "Meet Company-Specific Criteria",
        ].map((label, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-md border border-yellow-400 text-left"
          >
            <p className="text-gray-300 font-medium">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Image - Second on mobile, first on desktop */}
    <img
      src="/images/Animation-ARvR-&-Metaverse-courses (1).jpg"
      alt="Placement Eligibility"
      className="rounded-2xl order-1 md:order-2"
    />
  </div>
</section>


      {/* Testimonials */}
      <section className=" py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-xl">
            Testimonials
          </h2>
          <h2 className="text-lg md:text-1xl text-yellow-400 mt-3">
            Employment Driven Education
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            The Media & Entertainment industry in India is expected to employ
            over 41 lakh professionals by 2025.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://youtube.com/embed/X4-X0o1T6jg",
              "https://youtube.com/embed/vxQIbUpjleo",
              "https://youtube.com/embed/GWn9z04sEKQ",
              "https://youtube.com/embed/5Xlc2tV9MLk",
              "https://youtube.com/embed/2amlGJX435Q",
              "https://youtube.com/embed/Kwd9hWrEnK4",
            ].map((link, i) => (
              <iframe
                key={i}
                src={link}
                title={`Testimonial ${i + 1}`}
                className="w-full h-64 rounded-xl shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Cards */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-16">
        <div className="container max-w-7xl mx-auto">
          <Placement_card />
        </div>
      </section>
    </>
  );
}
