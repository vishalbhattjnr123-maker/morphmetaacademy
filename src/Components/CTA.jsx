const CTA = () => {
  return (
    <section
      className="relative py-16 rounded-3xl overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/admission-open-2025-chandigarh-uni-animation.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-end gap-8">
          {/* Empty left column for spacing */}
          <div className="md:w-1/2"></div>

          {/* Right column with content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug">
              Become a Part of the Creative Learners at Morph Academy
            </h2>
            <p className="text-gray-200 text-sm md:text-base mb-6">
              At Morph Academy, effective learning begins with proper assessment.  
              Learn VFX, 3D Animation, Metaverse, Photography, Film Making, and Game Design courses.  
              Gain real-world experience, work on live projects, and build a successful career in the creative industry.  
              <br />
              <span className="font-semibold">
                Interested in joining a course? Morph Academy simplifies the process.
              </span>
            </p>
            <a href="/contact-us">
              <button className="px-20 py-3 text-white font-semibold rounded-full shadow-lg overflow-hidden relative transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-violet-600">
                Start Learning
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
