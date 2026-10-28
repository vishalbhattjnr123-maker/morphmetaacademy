const FilmCourse = () => {
  const courses = [
    {
      title: "Film Making & Direc.",
      desc: "Crafting compelling narratives through visual storytelling, directing scenes, and guiding actors to create cinematic experiences.",
      img: "/images/Film-Making-&-Direction-courses (1).jpg",
      link: "/course/best-filmmaking-and-direction-schools-and-courses-in-india",
    },
    {
      title: "Photography",
      desc: "Master the art of capturing moments with technical skills and creative techniques in this comprehensive photography course.",
      img: "/images/Photography-course (1).jpg",
      link: "/course/best-photography-courses-and-schools-colleges-and-institutes-in-india",
    },
    {
      title: "Cinematography",
      desc: "Explore visual storytelling through camera techniques, lighting, and composition in this comprehensive cinematography course.",
      img: "/images/Cinematography-courses (1).jpg",
      link: "/course/cinematography-course--Training-institute-in-chandigarh/",
    },
    {
      title: "Video Editing",
      desc: "Master video editing essentials: enhance storytelling, apply effects, and create captivating content with industry-leading software.",
      img: "/images/Video-Editing-courses (1).jpg",
      link: "/course/top-video-editing-courses-and-classes-in-india",
    },
    {
      title: "Post Production",
      desc: "Master the art of video editing, color grading, and audio mixing for seamless and captivating visual storytelling.",
      img: "/images/Post-Production--course-for-film (1).jpg",
      link: "/course/video-editing-post-production-in-film-and-tv-colleges-in-india",
    },
    {
      title: "Music Production",
      desc: "Learn music production techniques, including mixing, recording, and mastering, to create professional-quality tracks.",
      img: "/images/Music-Production (1).jpg",
      link: "/course/music-production-course-in-chandigarh/",
    },
  ];

  return (
    <section className="bg-black">
      {/* Hero Image */}
      <div className="w-full pt-[64px] lg:pt-[102px] border-b border-[#5a0505] bg-[#140101]">
        <img
          src="/images/film-photo-card-banner1.jpg"
          alt="Meta Morph Film Course"
          className="w-full h-auto max-h-[420px] object-cover block"
        />
      </div>

      {/* Page Title */}
      <h1 className="text-center text-white text-3xl md:text-4xl font-bold pt-10">
        Film Course
      </h1>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
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

export default FilmCourse;
