import MetaSeo from "../Components/MetaSEO";
import CTA from "../Components/CTA";
import { motion } from "framer-motion";


export default function After12() {
  const seo = {
    title: "Animation School and Career Guide for Students after 12th at Morph Academy",
    description:
      "Join the top animation course after 12th in Chandigarh. Morph Academy offers job-oriented training for students looking to build a career in animation and multimedia.",
    keyword:
      "Animation Courses after 12th, Animation Diploma after 12th, Best Animation Institutes after 12th, Animation Classes for 12th pass students, Top Animation Academy after 12th",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      <div className="w-full bg-black">
        {/* Banner */}
        {/* <div className="border-b">
          <img
            className="w-full object-cover"
            src="/images/aniamtion-and-vfx-card-banner1.jpg"
            alt="Meta Morph Placement"
          />
        </div> */}

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 pt-30 pt-lg-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1
                data-aos="zoom-in"
                className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-xl"
              >
                Best <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">Animation Courses </span>After 12th
              </h1>
              <p
                data-aos="zoom-in"
                className="text-gray-400 font-medium leading-relaxed mb-4 mt-5"
              >
                Morph Academy offers the best animation courses after the 12th
                for students, focusing on comprehensive training in 2D/3D
                animation, VFX, and graphic design. These job-oriented programs
                provide hands-on experience with industry-standard software,
                preparing students for successful careers in the animation and
                multimedia industry.
              </p>
              <p
                data-aos="zoom-in"
                className="text-gray-400 font-medium leading-relaxed"
              >
                The institute makes efforts to help students get placed across
                various verticals in the industry. The placement assistance that
                Morph Academy offers is not restrained to any particular
                duration. The institute even helps the student to build their
                careers throughout their life.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                className="rounded-2xl max-w-sm"
                src="/images/banner-images-tab11.jpg"
                alt="placement"
              />
            </div>
          </div>

          {/* Stats Section */}
        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
 
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

          {/* Why Choose Us */}
          <div className="mt-14">
            <h2 className="text-center text-2xl font-bold">Why Choose Us?</h2>
            <p className="text-center text-gray-500 mt-2">
              Choose Morph Animation Academy for expert-led training,
              cutting-edge tools, and industry-ready animation skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                {
                  title: "Industry Focused",
                  desc: "Our courses are tailored to meet the evolving demands of the animation and visual effects industry.",
                },
                {
                  title: "State-of-the-Art Facilities",
                  desc: "Learn in fully equipped labs, using the latest tools and technologies in animation.",
                },
                {
                  title: "Expert Faculty",
                  desc: "Receive guidance from experienced professionals with years of industry expertise.",
                },
                {
                  title: "Placement Support",
                  desc: "We assist with internships and job placements in top animation studios across India.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-xl p-5 text-center shadow-md"
                >
                  <img
                    src="/images/icons8-tick-80.png"
                    alt=""
                    className="mx-auto mb-4 w-12"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Help Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mt-14 gap-10">
            <div className="flex-1">
              <img
                data-aos="zoom-in"
                className="rounded-xl"
                src="/images/after12.jpg"
                alt="Meta Morph Placement"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-2xl mt-5">
                How Exactly Do We Help Our Students?
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                <li>Rigorous Training Sessions to make the students Job-Ready.</li>
                <li>
                  Regular Interaction with Industry by conducting Workshops
                </li>
                <li>
                  Arranging Industrial Visits to understand best practices from
                  the industry.
                </li>
                <li>Case Studies</li>
                <li>Group Discussions</li>
                <li>
                  Mock interviews to develop the ability of the student to face
                  interviewers.
                </li>
                <li>Group Activities to develop ‘Team-Player’ attitude.</li>
                <li>
                  Alumni Events to build a strong network of industry corporates.
                </li>
                <li>
                  Counselling Sessions for students to identify weak areas and
                  work on them.
                </li>
              </ul>
            </div>
          </div>

          {/* Eligibility Accordion */}
          <div className="mt-14">
            <h2 className="text-center text-3xl font-bold py-4">Eligibility</h2>
            <div className="space-y-4">
              <details className="bg-gray-800 rounded-lg p-4">
                <summary className="cursor-pointer font-semibold text-white">
                  Certificate Courses
                </summary>
                <p className="mt-2 text-gray-400">
                  Successful completion of class 12/intermediate or its
                  equivalent from a recognized board. Candidates awaiting results
                  may also apply.
                </p>
              </details>
              <details className="bg-gray-800 rounded-lg p-4">
                <summary className="cursor-pointer font-semibold text-white">
                  Diploma Courses
                </summary>
                <p className="mt-2 text-gray-400">
                  Diploma course requires completion of 10+2 with minimum 60% or
                  equivalent from a recognized board.
                </p>
              </details>
              <details className="bg-gray-800 rounded-lg p-4">
                <summary className="cursor-pointer font-semibold text-white">
                  Advance Diploma
                </summary>
                <p className="mt-2 text-gray-400">
                  For pursuing an Advanced Diploma, candidates need to have
                  passed 10+2 with a minimum aggregate of 60%.
                </p>
              </details>
            </div>
          </div>

          {/* CTA */}
          <CTA />

          {/* Testimonials */}
          <div className="mt-14">
            <p className="text-white text-center text-3xl mb-2">Testimonials</p>
            <h5 className="text-center text-gray-400">
              THE MEDIA & ENTERTAINMENT INDUSTRY IN INDIA IS EXPECTED TO EMPLOY
              AROUND 41 LAKH PROFESSIONALS BY 2022
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
                  className="rounded-lg w-full h-64"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Testimonial ${i + 1}`}
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
