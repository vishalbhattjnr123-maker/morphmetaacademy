const JobCourse = () => {
  const courses = [
    {
      title: "Maya Pro",
      desc: "Master Maya Pro: Advanced 3D modeling, animation, and rendering techniques for professional-grade visual creations.",
      img: "/images/Maya-Pro-course (1).jpg",
      link: "/course/maya-courses-and-classes-for-3d-animation",
    },
    {
      title: "Max Pro",
      desc: "Max Pro course offers advanced techniques in multimedia design, blending creativity with cutting-edge technology for professionals.",
      img: "/images/Max-Pro-courses (1).jpg",
      link: "/course/autodesk-3ds-max-courses-and-certifications-at-chandigarh/",
    },
    {
      title: "Rotoscoping",
      desc: "Learn rotoscoping techniques to trace over footage and create realistic animations and visual effects.",
      img: "/images/Rotoscoping-course (1).jpg",
      link: "/course/rotoscoping-courses-and-certifications-in-chandigarh",
    },
    {
      title: "Cinema 4D Pro",
      desc: "Master Cinema 4D Pro with expert guidance on modeling, animation, and rendering for stunning 3D visuals.",
      img: "/images/Cinema-4d-Pro-courses (1).jpg",
      link: "/course/top-cinema-4d-courses-and-classes-collages-in-chandigarh",
    },
    {
      title: "Blender Pro",
      desc: "Master Blender with comprehensive training: modeling, sculpting, texturing, rendering, and animation for stunning 3D creations.",
      img: "/images/Blender-Pro-course (1).jpg",
      link: "/course/3d-animation-course-with-blender-in-chandigarh",
    },
    {
      title: "Design Pro",
      desc: "Design Pro course teaches advanced design skills, tools, and techniques for creating impactful visual solutions.",
      img: "/images/Design-Pro-courses (1).jpg",
      link: "/course/professional-graphic-design-courses-with-certificates",
    },
  ];

  return (
    <section className="bg-black">
      {/* Hero Section */}
      <div className="relative w-full pt-[64px] lg:pt-[102px] border-b border-[#5a0505] bg-[#140101]">
        <img
          src="/images/job-ready-course.jpg"
          alt="Meta Morph Job Ready Course"
          className="w-full h-auto max-h-[420px] object-cover block"
        />
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-16">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4 mb-10">
            Job Ready Courses
          </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
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

export default JobCourse;
