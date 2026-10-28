"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MetaSeo from "../Components/MetaSEO";
import { GraduationCap, Globe, Users, BookOpen, Briefcase } from "lucide-react";

const Facility = () => {
const seo = {
  title: "World-Class Facilities & Career-Focused Learning",
  description:
    "Morph Academy offers world-class facilities and career-focused learning in Animation, VFX, Game Design, and 3D Modeling. Learn from industry experts and kickstart your creative career with hands-on training and industry-ready skills.",
  keyword:
    "Animation Course in Chandigarh, VFX Training in Chandigarh, 3D Modeling Classes in Chandigarh, Game Design Institute in Chandigarh, Career-Focused Animation School, Best Animation Academy with Modern Facilities, Industry-Ready Creative Courses",
};


  return (
    <>
      <MetaSeo meta={seo} />

      {/* Hero Banner */}
      <section
        className="relative w-full border-b border-[#5a0505] pt-[64px] lg:pt-[102px]"
        style={{ background: "linear-gradient(to right, #630202 0%, #3e080e 50%, #1a0203 100%)" }}
      >
        <img
          src="/images/facility-top-banner.jpg"
          alt="Morph Academy Facility Banner"
          className="w-full h-auto max-h-[460px] object-cover block shadow-2xl"
        />
      </section>

      {/* Welcome + Key Points */}
      <section className="py-20 px-6">
        <div className="container  max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
              

            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              World-Class{" "}
              <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Facilities & Career-Focused 
              </span>
               {" "}Learning
            </h1>
             <h2 className="text-4xl md:text-xl font-bold text-yellow-400">
           Welcome to Morph Academy
          </h2>
          <p className="mt-4 ">
            Experience premium learning with cutting-edge technology, expert
            faculty, and industry-ready training.
          </p>
            <p className="mt-4 mb-5">
              At Morph Academy, we believe education should empower you to achieve more. For 25+ years, we’ve been at the forefront of creative and technology-driven learning — blending innovation, expert mentorship, and real-world exposure to prepare students for successful careers in India and abroad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
                  text: "Industry-ready curriculum shaped by experts",
                },
                {
                  icon: <Globe className="w-6 h-6 text-indigo-400" />,
                  text: "Opportunities in India & abroad",
                },
                {
                  icon: <Users className="w-6 h-6 text-indigo-400" />,
                  text: "Guided by world-class faculty",
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
                  text: "Hands-on learning with real-time projects",
                },
                {
                  icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
                  text: "Comprehensive career support & placements",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 bg-neutral-900/60 rounded-xl p-5 border border-yellow-400 hover:border-indigo-400 transition"
                >
                  {item.icon}
                  <p className="text-gray-300 text-l font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/WhatsApp Image 2025-04-10 at 14.12.42_b2412e7c-Photoroom.png"
              alt="Morph Academy students"
              className="rounded-3xl w-full max-w-md "
            />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black px-6">
        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src="/images/56556.png"
              alt="Morph Academy Support"
              className="rounded-3xl w-full max-w-sm"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
             Student Support System
            </h2>
            <div className="space-y-5 text-gray-200">
              <p>
                We understand that choosing the right academy is just the beginning — your journey matters to us. Morph Academy provides complete support to ensure students feel at home, focused, and ready to succeed.
              </p>
            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-center"
>
  {[
    {
      title: "Admission Assistance",
      desc: "Dedicated counseling for Indian & International students. Step-by-step enrollment support and visa guidance.",
      icon: "🎓",
    },
    {
      title: "Accommodation & Hostel",
      desc: "Safe, affordable hostel & PG facilities near campus. Assistance with food, transport, and other needs.",
      icon: "🏠",
    },
    {
      title: "Financial Support",
      desc: "Student loan guidance, complete documentation help, and flexible payment plans to ease financial stress.",
      icon: "💳",
    },
    {
      title: "International Exposure",
      desc: "Global collaborations, exchange programs, and career counseling for placements abroad.",
      icon: "🌍",
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
      </section>
      <section className=" py-20 px-6">
  <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Image */}
    <div className="flex justify-center order-2 lg:order-2">
      <img
        src="/images/45536-Photoroom.png"
        alt="Morph Academy Foundation"
        className="rounded-3xl  w-full max-w-sm"
      />
    </div>

    {/* Text */}
    <div className="order-1 lg:order-1">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Our Foundation & Vision
      </h2>
      <div className="space-y-5 text-gray-200">
        <p>
          Morph Academy is more than just a place to learn — it’s a hub of
          innovation, creativity, and research. With a highly qualified and
          diverse board, we are committed to shaping the next generation of
          professionals who will lead the creative and tech industries worldwide.
        </p>

        {/* Promise Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-center"
        >
          {[
            {
              title: "Safe & Inclusive",
              desc: "A welcoming environment where every student feels supported and valued."
            },
            {
              title: "Innovative Learning",
              desc: "Consistent innovation in teaching methodologies to keep learning future-ready."
            },
            {
              title: "Alumni Network",
              desc: "Strong alumni connections offering mentorship and career opportunities."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-2xl p-6 shadow-md border border-yellow-400"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Facility;
