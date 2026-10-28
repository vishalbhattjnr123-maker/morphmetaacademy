const AnimationCourse = () => {
  const courses = [
    {
      title: "Multimedia Master",
      desc: "Skilled in video, audio, graphics, and web design, creating immersive experiences that captivate and inform audiences.",
      img: "/images/Animation-and-multimedia-course (2).jpg",
      link: "/course/best-animation-and-multimedia-institute-in-india",
    },
    {
      title: "Animation & VFX",
      desc: "Animation and VFX create captivating visuals, blending art and technology to bring stories and characters to life.",
      img: "/images/Animation-&-VFX-courses (1).jpg",
      link: "/course/top-3d-animation-course-vfx-course-with-job",
    },
    {
      title: "Master Visual Effects",
      desc: "Master Visual Effects expertly transforms concepts into captivating, lifelike digital worlds with cutting-edge techniques and creativity.",
      img: "/images/Master-in-Visual-Effects-course (1).jpg",
      link: "/course/visual-effects-courses-in-chandigarh/",
    },
    {
      title: "Degree In Animation",
      desc: "A Degree in Animation equips you with skills in storytelling, design, and technology for creating dynamic visuals.",
      img: "/images/Degree-in-Animation (1).jpg",
      link: "/course/Degree-in-Animation-Courses-and-Colleges-in-Chandigarh-India",
    },
    {
      title: "3D Film Making",
      desc: "3D filmmaking creates immersive visual experiences with depth and realism through advanced three-dimensional imaging techniques.",
      img: "/images/3D-Animation-Filmmaking-course-in-india (1).jpg",
      link: "/course/3D-Animation-Film-Making-Course-in-Chandigarh-india",
    },
    {
      title: "ARCHI. Walkthrough",
      desc: "ARCHI. Walkthrough: Interactive tool for exploring architectural designs, offering detailed, immersive, and virtual building experiences.",
      img: "/images/ARCHI-intiero-desig1.jpg",
      link: "/course/best-interior-architecture-designing-course-in-chandigarh/",
    },
  ];

  return (
    <section className="bg-black">
      {/* Hero Image */}
      <div className="w-full pt-[64px] lg:pt-[102px] border-b border-[#5a0505] bg-[#140101]">
        <img
          src="/images/aniamtion-and-vfx-card-banner1.jpg"
          alt="Meta Morph Animation Courses"
          className="w-full h-auto max-h-[420px] object-cover block"
        />
      </div>

      {/* Page Title */}
      <h1 className="text-center text-white text-3xl md:text-4xl font-bold pt-10">
        Animation Courses
      </h1>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">{course.title}</h2>
                <p className="text-gray-300 mb-4">{course.desc}</p>
                <a
                  href={course.link}
                  className="inline-block px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimationCourse;
