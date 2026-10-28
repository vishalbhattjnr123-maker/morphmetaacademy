const MetaverseCourse = () => {
  const courses = [
    {
      title: "AR/VR & Metaverse",
      desc: "Learn animation, AR/VR, and Metaverse skills to craft captivating digital worlds and experiences for diverse audiences.",
      img: "/images/Animation-ARvR-&-Metaverse-courses (1).jpg",
      link: "/course/ar-vr-and-metaverse-course-at-morph-academy",
    },
    {
      title: "Virtual Reality",
      desc: "Explore immersive virtual worlds, learn VR design principles, and create interactive experiences in this course.",
      img: "/images/Virtaul-Reality-courses (2).jpg",
      link: "/course/virtual-reality-course-training-institutes-in-india",
    },
    {
      title: "AR/VR Technologies",
      desc: "Explore immersive AR/VR technologies, learning to create interactive experiences and applications for diverse industries.",
      img: "/images/Animation-&-Metaverse-course (1).jpg",
      link: "/course/ar-and-vr-technologies-training-in-chandigarh-india",
    },
    {
      title: "Metaverse and Web",
      desc: "Explore the Metaverse and Web 3.0: Innovate in digital spaces, decentralized tech, and immersive experiences.",
      img: "/images/AI-Generative-Art-course (1).jpg",
      link: "/course/best-metaverse-and-web-3.0-course-at-morph-academy",
    },
    {
      title: "Animation & Meta.",
      desc: "Explore animation techniques and metaverse technologies, mastering virtual worlds and dynamic storytelling for immersive experiences.",
      img: "/images/AR-VR-Technologies (2).jpg",
      link: "/course/animation-vfx-and-metaverse-course-and-classes-in-chandigarh",
    },
    {
      title: "AI Generative Art",
      desc: "Explore creativity with AI, mastering generative art techniques to create stunning visual masterpieces and innovative designs.",
      img: "/images/Metaverse-and-Web3-course (1).jpg",
      link: "/course/top-ai-generative-art-training-in-chandigarh-india",
    },
  ];

  return (
    <section className="bg-black">
      {/* Hero Image */}
      <div className="w-full pt-[64px] lg:pt-[102px] border-b border-[#5a0505] bg-[#140101]">
        <img
          src="/images/metavere-tp-bar.jpg"
          alt="Meta Morph Metaverse Course"
          className="w-full h-auto max-h-[420px] object-cover block"
        />
      </div>

      {/* Page Title */}
      <h1 className="text-center text-white text-3xl md:text-4xl font-bold pt-10">
        Metaverse Course
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

export default MetaverseCourse;
