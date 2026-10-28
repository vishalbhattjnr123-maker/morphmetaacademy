import { motion } from "framer-motion";

import Form2 from "./Form2";
import Morph from "./Morph";

export default function Section8() {
  const logos = [
    "/images/baja-1.png",
    "/images/baja-2.png",
    "/images/baja-4.png",
  
  ];



  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-black py-24 px-6 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Side - Info */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase text-accent-blue font-semibold tracking-widest text-sm">
            About Morph Academy
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Transform Your Passion into a Professional Career
          </h2>
          <motion.div
            className="space-y-4 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-lg leading-relaxed">
              Morph Academy in Chandigarh offers 25+ years of excellence in animation, VFX, game design, film making, UI/UX, graphic design, photography, and more.
            </p>
            <p className="text-lg leading-relaxed">
              Hands-on training with live projects ensures students are industry-ready. Certified programs recognized by top universities.
            </p>
            <p className="text-lg leading-relaxed">
              Explore AR/VR, 3D, Metaverse, and beyond. Start your creative journey today.
            </p>
          </motion.div>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Morph />
          </motion.div>
        </motion.div>

        {/* Right Side - Form & Logos */}
        <motion.div
          className="lg:col-span-5 flex flex-col space-y-8 mt-12 lg:mt-0 z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 text-sm text-center lg:text-left">
            Government-Approved Courses + Global Certification,{" "}
            <a href="/easy-emi-and-loan" className="underline">
              <span className="text-accent-yellow font-semibold">Now on Easy EMIs</span>
            </a>
          </p>

          {/* React Slider for logos */}
          <div className="overflow-hidden grid grid-cols-4 gap-4 w-full rounded-xl">
          
              {logos.map((src, i) => (
                <div key={i} className="px-4">
                  <img src={src} alt={`Partner ${i + 1}`} className="w-full object-contain" />
                </div>
              ))}
          </div>

          {/* Form Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Form2 />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
