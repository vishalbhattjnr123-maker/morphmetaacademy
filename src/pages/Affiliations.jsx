"use client";
import { Link } from "react-router-dom";
import MetaSeo from "../Components/MetaSEO";
import { motion } from "framer-motion";



const Affiliations = () => {
  const seo = {
    title: "Animation and multimedia colleges Affiliations and Accreditations",
    description:
      "Animation and multimedia colleges Affiliations and Accreditations in India, Government Animation and Multimedia Colleges in Chandigarh",
    keyword:
      "Graphics Designing Course in chandigarh, Graphics Designing Diploma in chandigarh, Graphics Design Institutes in chandigarh, Best Graphics Design Institute in chandigarh, Graphics Designing Classes in chandigarhNearby, Top Graphics Design Academy near me",
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
          src="/images/banner-degree-animation.png"
          alt="Govt Approved Degree in Animation Multimedia"
          className="w-full h-auto object-cover max-h-[460px] block shadow-2xl"
        />
      </section>

      {/* Main Content */}
      <section className="relative text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl  mx-auto px-6 py-12 pt-20 pt-lg-20 text-white">
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
             <h1 className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-xl">
          Our Trusted <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">Affiliations & Global Accreditation</span>
        </h1>
        <h2 className="text-lg md:text-1xl text-yellow-400 mt-3">
          Discover our affiliations and accreditations, reflecting our commitment
          to excellence
        </h2>

 <p className="text-gray-300 mt-6 leading-relaxed">
             Discover <Link className="text-white font-semibold" to="/">
                Morph Meta Academy
              </Link>{" "}
               affiliations and accreditations that underscore our commitment to
              excellence.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Morph Academy is a premier institution recognized for its
              excellence in providing industry-relevant education and training.
              Our affiliations and accreditations reflect our commitment to
              maintaining high standards and delivering quality education.
            </p>
             <p className="text-gray-300 mt-4 leading-relaxed">
              Morph Academy is a Skilled IT training institute founded in
              Chandigarh in 2000. We feel proud to introduce ourselves as the
              first launcher of Multimedia{" "}
              <Link
                to="/animation-course"
                className="text-white font-semibold"
              >
                Animation Courses
              </Link>{" "}
              in Chandigarh to offer great career options and job opportunities.
            </p>





           
           
          </div>
          <div>
            <img
              src="/images/aff.avif"
              alt="Morph Academy Affiliations & Accreditations"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* Domestic Affiliations */}
        <div className="grid  lg:grid-cols-2 gap-12 items-center mb-16 py-20">
          <img
            src="/images/Game-Designing-Course-and-training-india.jpg"
            alt="Morph Academy Affiliated"
            className="rounded-2xl w-full object-cover"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 mt-10 mb-5">Morph Academy is affiliated to:</h3>
             <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-1 gap-6 text-center"
      >
        {[
          "Karnataka University, 1965",
    "Mysore University, 1974",
    "Mangalore University, 1998",
    "Visvesvaraya Technological University (VTU), 2000",
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

               <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
  {/* Left Content */}
  <div className="flex flex-col justify-center space-y-4">
    <h3 className="text-2xl font-bold text-yellow-400 mb-5">
      Collaborations with foreign universities:
    </h3>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-6 text-center"
    >
      {[
        "Saint-Etienne - Du-Rouvray, Esigelec, France",
        "Hochschule Bremen - University for Applied Science - Germany",
        "Chemnitz University of Technology, Germany",
        "Queensland University of Technology - Australia",
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

  {/* Right Image */}
  <div className="flex justify-center items-center">
    <img
      src="/images/game-deisgns5.jpg"
      alt="Morph Academy Affiliated"
      className="rounded-2xl w-full max-w-lg object-cover"
    />
  </div>
</div>


        {/* Ratings & Rankings */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
           <img
            src="/images/rank.jpg"
            alt="Morph Academy Rating"
            className="rounded-2xl w-4/5 mx-auto object-cover"
          />
       <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex justify-center"
>
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-900 rounded-2xl p-8 shadow-md border border-yellow-400 max-w-3xl space-y-4"
  >
    <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
      Rating and Ranking
    </h2>
    <ul className="text-gray-300 space-y-2 text-left">
      {[
        "Ranked top five among the private engineering colleges of India",
        "Rated as A+ category institute by the MHRD, India",
        "Hostel facilities rated as the best in the country",
        "Over 6500 students from all across the country",
        "Wi-Fi enabled campus",
        "World class sports facilities - Marena indoor sports complex",
        "Easy availability of the best health care facilities for all students",
        "State-of-the-art audio visual teaching facilities",
        "Thrust on research and entrepreneurship through Innovation Centre (MUTBI).",
      ].map((point, i) => (
        <li key={i} className="flex items-start">
          <span className="text-yellow-400 mr-2">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
</motion.div>

         
        </div>
      </div>
   </section>
    </>
  );
};

export default Affiliations;
