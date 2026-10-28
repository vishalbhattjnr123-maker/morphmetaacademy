const GamingCourse = () => {
  const courses = [
    {
      title: "Games Designing",
      desc: "Master game design principles, create engaging storylines, build immersive worlds, and develop interactive gameplay experiences.",
      img: "/images/Games-Design-courses (1).jpg",
      link: "/course/top-game-design-and-development-course-in-india",
    },
    {
      title: "Unity Game Design",
      desc: "Learn Unity game design fundamentals, including scripting, 3D modeling, and level creation, to build stunning interactive experiences.",
      img: "/images/Unity-Game-Course (1).jpg",
      link: "/course/master-game-development-with-our-unity-3d-course-and-academy",
    },
    {
      title: "Unreal Game Course",
      desc: "Learn Unreal Engine's advanced tools to create immersive games, captivating graphics, and engaging gameplay experiences.",
      img: "/images/Unreal-Game-Course (1).jpg",
      link: "/course/game-development-course-using-unreal-engine-certification-institute",
    },
    {
      title: "Game Art & Develop",
      desc: "Learn to create stunning game art, design immersive worlds, and develop interactive experiences for all platforms.",
      img: "/images/game-develoment--card (1).jpg",
      link: "/course/game-development-courses-and-certifications-with-live-training",
    },
    {
      title: "NFT Game Devt.",
      desc: "Develop NFT games from scratch. Explore blockchain integration, digital ownership, and play-to-earn mechanics effectively.",
      img: "/images/Play-To-Earn-NFT-Game-Development (2).jpg",
      link: "/course/nft-game-development-and-web3-gamefi-course-and-training",
    },
    {
      title: "P2E NFT Game Devt.",
      desc: "Master P2E NFT game development with blockchain, smart contracts, and immersive gameplay design for the gaming industry.",
      img: "/images/NFT-Game-Development-coures (1).jpg",
      link: "/course/play-to-earn-nft-game-development-course-and-training-institute",
    },
  ];

  return (
    <section className="bg-black">
      {/* Hero Section */}
      <div className="relative w-full pt-[64px] lg:pt-[102px] border-b border-[#5a0505] bg-[#140101]">
        <img
          src="/images/gamming-deisgns-tpp-baar.jpg"
          alt="Meta Morph Gaming Course"
          className="w-full h-auto max-h-[420px] object-cover block"
        />
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-16">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4 mb-10">
            Gaming Courses
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

export default GamingCourse;
