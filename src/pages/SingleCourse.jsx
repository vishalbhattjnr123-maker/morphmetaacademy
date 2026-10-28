"use client";

import CourseInformation from "../Components/Course/Information";
import CourseSections from "../Components/Course/Sections";
import CourseTitle from "../Components/Course/Title";
import MetaSeo from "../Components/MetaSEO";
import Onlinec from "../Components/Onlinec";
import RelatedCourse from "../Components/RelatedCourse";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const testimonialVideos = [
  "X4-X0o1T6jg",
  "vxQIbUpjleo",
  "GWn9z04sEKQ",
  "5Xlc2tV9MLk",
  "2amlGJX435Q",
  "Kwd9hWrEnK4",
];

const SingleCourse = ({ ...course }) => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <MetaSeo meta={course?.seo_meta} />

      {/* ✅ Title Section */}
      <section className="relative bg-[#140101] text-white shadow-lg pt-[64px] lg:pt-[102px]">
        <CourseTitle {...course} />
      </section>

      {/* ✅ Hero Section with Background */}
      <section className="relative bg-dark bg-center text-white">
        <div className="relative container mx-auto px-6 py-16">
          <CourseInformation {...course?.info} />
        </div>
      </section>

      {/* ✅ Course Sections */}
      <section className="pb-16 bg-dark text-gray-100">
        <div className="container mx-auto px-6">
          <CourseSections {...course} />
        </div>
      </section>

      {/* ✅ Online Courses */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-violet-900 to-blue-900 text-white">
        <div className="container max-w-7xl mx-auto px-6">
          <Onlinec />
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="py-16 bg-gray-950 text-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Student Testimonials
            </h2>
            <p className="text-yellow-400 text-lg md:text-xl">
              Real experiences from our students shaping their careers
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialVideos.map((id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <iframe
                  className="w-full h-60 md:h-64 lg:h-72"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Testimonial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
};

export default SingleCourse;
