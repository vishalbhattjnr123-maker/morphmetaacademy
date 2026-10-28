import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MetaSeo from "../Components/MetaSEO";

export default function About() {
const seo = {
  title: "About Us: The Journey Behind Our Success",
  description:
    "Discover the inspiring journey of Morph Academy, a leading institute in Animation, VFX, Gaming, and Metaverse Design. Learn how our 25+ years of expertise, innovation, and commitment to student success have shaped thousands of creative professionals.",
  keyword:
    "About Morph Academy, Animation Institute History, Best Design Academy Chandigarh, Journey of Morph Academy, Success Story Animation VFX Chandigarh, Gaming & Metaverse Education India",
};


  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
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
          src="/images/who-we-are-top-banner.jpg"
          alt="Morph Academy About Banner"
          className="w-full h-auto max-h-[460px] object-cover block shadow-2xl"
        />
      </section>

      {/* About Content */}
      <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              <span className="text-[#FF2D7A]">About Us:</span> The Journey Behind Our Success
            </h1>
            <h2 className="text-lg md:text-xl text-[#F5B82E] font-semibold mt-3 mb-6">
              Bring Your Vision to Life with Expertise and Dedication
            </h2>
            <p className="text-gray-300 mt-6 leading-relaxed">
              <Link className="text-white font-semibold" to="/">
                Morph Meta Academy Amritsar
              </Link>{" "}
              brings over 25+ years of celebrated excellence in 3D Animation, Hollywood-Standard VFX, Game Design, Web & Graphic Arts, and immersive AR/VR & Metaverse technologies to Punjab. Located in Ranjit Avenue, Amritsar, our campus is designed to empower students with studio-level skills and real-world project pipelines.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              All our Degree, Diploma, and Professional Certification courses are affiliated with recognized universities and aligned with international studio standards. At our Amritsar campus, we mentor each student 1-on-1, nurturing individual creative talents and providing 100% dedicated placement support to secure careers with top production houses worldwide.
            </p>

            {/* Why Morph Meta Academy Amritsar */}
            <h3 className="text-2xl md:text-3xl text-center font-extrabold text-[#F5B82E] mt-10 mb-6">
              Why Morph Meta Academy Amritsar?
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center"
            >
              {[
                {
                  title: "Multimedia & 3D Animation",
                  description:
                    "Pioneering professional Animation, VFX, Game Design & Metaverse training in Amritsar with high-end RTX studio labs and industry pipelines.",
                },
                {
                  title: "University-Affiliated",
                  description:
                    "Every degree, diploma, and certificate syllabus is co-crafted with recognized universities and accredited by leading creative industry partners.",
                },
                {
                  title: "Personalized Mentorship",
                  description:
                    "Expert mentors assess your creative strengths and guide you 1-on-1 from fundamentals to portfolio and showreel creation.",
                },
                {
                  title: "100% Placement Record",
                  description:
                    "Backed by 25+ years of industry trust, our dedicated placement cell connects Amritsar students with leading animation studios and IT giants.",
                },
              ].map((reason, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#120204]/90 rounded-2xl p-6 shadow-lg border border-[#F5B82E]/80 hover:border-[#F5B82E] transition-all"
                >
                  <h3 className="text-lg font-bold text-[#F5B82E] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#5a0505] shadow-2xl bg-[#140203]">
              <img
                src="/images/office2.jpg"
                alt="Morph Meta Academy Amritsar Campus Reception and Lounge"
                className="w-full h-auto max-w-lg object-cover block"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 text-center"
>
  {[
    { value: "95%", label: "Placement Success" },
    { value: "25+", label: "Years of Legacy" },
    { value: "100%", label: "Practical Training" },
    { value: "500+", label: "Industry Experts" },
  ].map((stat, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-2xl p-6 shadow-md border border-yellow-400"
    >
      <h3 className="text-3xl font-bold text-yellow-400">
        {stat.value}
      </h3>
      <p className="text-gray-300 mt-2">{stat.label}</p>
    </motion.div>
  ))}
</motion.div>

      </div></section>

      {/* Achievements & Support */}
   <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-20">
  <div className="container max-w-7xl mx-auto px-6 lg:px-0 space-y-10">
    <h2 className="text-4xl md:text-4xl text-center font-extrabold text-white mb-4">
      Crafting Excellence
    </h2>
    <h2 className="text-lg md:text-1xl text-center text-yellow-400 mt-3">
      Crafting excellence is an artistry of precision and passion, where
      each detail is a brushstroke in the masterpiece of mastery.
    </h2>

    {/* Achievements */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative p-[2px] rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 animate-borderMove"></div>

      <div className="relative rounded-2xl bg-gray-900 p-8 flex flex-col lg:flex-row gap-6">
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Achievements</h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed text-gray-200">
            <li>500+ high quality professionals already serving the industry with zeal and passion.</li>
            <li>10% of budding entrepreneurs having their start ups in various parts of the world.</li>
            <li>80% of the placements achieved in leading studios.</li>
            <li>95% of the students have produced their individual and team demo reels.</li>
            <li>10% of the students are encouraged to pursue higher studies abroad.</li>
            <li>Attract students from all over India & abroad – 5% of students each year from international destinations.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <img
            src="/images/achievements-1.jpg"
            alt="Achievements"
            className="w-full lg:w-100 h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </motion.div>

    {/* Our Support */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative p-[2px] rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 animate-borderMove"></div>

      <div className="relative rounded-2xl bg-gray-900 p-8 flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="flex-shrink-0 order-1 lg:order-1">
          <img
            src="/images/office.jpg"
            alt="Our Support"
            className="w-full lg:w-100 h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="order-2 lg:order-2">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Our Support:</h3>
          <p className="text-lg md:text-1xl text-yellow-400 mt-3">On Boarding of National / International Students</p>
          <p className="text-gray-300 leading-relaxed">
            At Morph Academy, we provide dedicated support to ensure a smooth transition for both national and international students. From the moment you confirm your admission, our team guides you step-by-step, assisting with travel, documentation, and orientation so that you feel at home from day one.
          </p>
          <p className="text-lg md:text-1xl text-yellow-400 mt-3">Hostel Facilities</p>
          <p className="text-gray-300 leading-relaxed">
            With over 25 years of experience, Morph Academy has built strong partnerships with reliable and affordable hostel providers. We assist students in finding hygienic, secure, and budget-friendly hostels that fit their lifestyle and financial needs. From single occupancy rooms to shared options, our tie-ups cater to diverse requirements.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Loan & Roots */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative p-[2px] rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 animate-borderMove"></div>

      <div className="relative rounded-2xl bg-gray-900 p-8 flex flex-col lg:flex-row gap-6">
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Loan & Our Roots:</h3>

          <p className="text-lg md:text-1xl text-yellow-400 mt-3">Loan Documentation</p>
          <p className="text-gray-300 leading-relaxed">
            With experience helping students secure education loans, our ready documentation systems help you move smoothly. Loan approval depends on the bank’s discretion and your background.
          </p>

          <p className="text-lg md:text-1xl text-yellow-400 mt-3">Our Roots</p>
          <p className="text-gray-300 leading-relaxed">
            Morph Academy’s Board of Directors come from diverse creative and technical backgrounds, enabling us to design innovative and industry-relevant programs in the education and creative production space.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <img
            src="/images/lm1.jpg"
            alt="Loan & Our Roots"
            className="w-full lg:w-100 h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className=" container mx-auto px-6 lg:px-16 py-20">
       <section className=" py-16 px-6">
  <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    
    {/* Left: Highlights Card */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 rounded-2xl p-10 shadow-xl border border-yellow-400 space-y-5"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-4">
        Why Choose Morph Academy?
      </h2>
      {[
        "25+ years of excellence in creative education.",
        "Awarded “Best Digital Media Academy in India”.",
        "First incubation hub for studio-ready CG Artists in India.",
        "Learn directly from industry professionals.",
        "Hands-on, project-driven training.",
        "24x7 lab access with power backup.",
      ].map((text, i) => (
        <motion.div
          key={i}
          variants={fadeIn}
          className="flex items-start gap-3"
        >
          <span className="text-yellow-400 mt-1">✔</span>
          <p className="text-gray-300 font-medium">{text}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Right: Video */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="flex justify-center"
    >
      <iframe
        className="rounded-2xl shadow-2xl w-full max-w-lg"
        height="350"
        src="https://www.youtube.com/embed/_bQernfUFjA?autoplay=1&mute=1"
        title="Morph Academy Intro"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  </div>
</section>

      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-4xl text-center font-extrabold text-white mb-4">
              Testimonials
            </h2>
            <h2 className="text-yellow-400 text-center mb-12">
              Employment Driven Education
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "X4-X0o1T6jg",
              "vxQIbUpjleo",
              "GWn9z04sEKQ",
              "5Xlc2tV9MLk",
              "2amlGJX435Q",
              "Kwd9hWrEnK4",
            ].map((id) => (
              <motion.iframe
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-xl shadow-lg w-full"
                height="315"
                src={`https://www.youtube.com/embed/${id}`}
                title="Testimonial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
