import { useEffect } from "react";

const Cour_box = () => {
  const courses = [
    {
      img: "/assets/images/n4.jpg",
      title: "Adv. Diploma in 3D Animation & Visual Effects",
      desc: "Best Diploma in 3D Animation & VFX in Chandigarh – Job-Ready Course by Morph Meta Academy. Learn pre-production, 2D & 3D animation, modeling, and industry-ready VFX skills. 100% job-oriented training with expert mentors.",
      link: "/course/top-3d-animation-course-vfx-course-with-job",
    },
    {
      img: "/assets/images/n3.jpg",
      title: "Diploma in Game Designs & Virtual Reality Courses",
      desc: "Diploma in Game Design & Metaverse in Chandigarh. Learn 3D animation, Unity, Unreal Engine, AR/VR, and Metaverse development. Expert-led training with real-time projects and placement support.",
      link: "/course/top-game-design-and-development-course-in-india",
    },
    {
      img: "/assets/images/n6.jpg",
      title: "Diploma in Photography & Cinematography Courses",
      desc: "Diploma in Photography & Cinematography in Chandigarh. Learn digital photography, studio lighting, outdoor shoots, videography, cinematography, and editing. Internship & 100% placement assistance.",
      link: "/course/best-photography-courses-and-schools-colleges-and-institutes-in-india",
    },
    {
      img: "/assets/images/n5.jpg",
      title: "Diploma in Film Making & Direction Courses",
      desc: "Learn film direction, storytelling, screenplay, editing, and production. Join Morph Meta Academy for expert training, post-production skills, and career-focused film education.",
      link: "/course/best-filmmaking-and-direction-schools-and-courses-in-india",
    },
    {
      img: "/assets/images/n2.jpg",
      title: "Degree in Animation & Multimedia Courses",
      desc: "Degree in Animation & Multimedia in Chandigarh. UG/PG degrees in Animation, VFX, Multimedia, Film Making, AR/VR, and Unreal Engine. Industry-ready training with expert faculty.",
      link: "/course/graphics-designing-institute-in-chandigarh/",
    },
    {
      img: "/assets/images/n1.jpg",
      title: "Metaverse & AI Generative Courses",
      desc: "Learn Metaverse, AI art, VR/AR, blockchain, and 3D design after 12th. Training in text-to-video, text-to-animation, motion graphics, and game design with certification.",
      link: "/course/machine-learning-and-ai-training-in-chandigarh",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / 20) * -1;
        const rotateY = (x - centerX) / 20;
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });
  }, []);

  return (
    <div className="container max-w-7xl mx-auto py-16 px-4">
      <h3 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-2">
        Career-Oriented Professional Degree & Diploma Courses
      </h3>
      <p className="text-center text-gray-300 text-lg md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
        Kickstart your career in animation, VFX, game design, and filmmaking.
        Hands-on training, real projects, and expert guidance for your success.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="tilt-card relative overflow-hidden rounded-3xl shadow-xl group bg-neutral-900 border border-gray-800 transition-transform duration-500 hover:shadow-2xl"
          >
            {/* Background Image */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h4 className="text-lg md:text-xl font-semibold mb-2 drop-shadow-md">
                {course.title}
              </h4>
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-72 overflow-hidden transition-all duration-500">
                <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed drop-shadow-sm">
                  {course.desc}
                </p>
                <a
                  href={course.link}
                  className="inline-block px-5 py-2 bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-blue text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Hover Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-blue rounded-3xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cour_box;
