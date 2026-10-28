import { Link } from "react-router-dom";
import { useEffect } from "react";

// Parallax tilt effect
const applyTiltEffect = () => {
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
        "perspective(1200px) rotateX(5deg) rotateY(20deg) scale(1)";
    });
  });
};

const courses = [
  {
    tag: "ANI",
    color: "blue",
    title: "Diploma / Degree in Animation Course",
    description:
      "Diploma / Degree in Animation: Learn character animation, cinematography, modeling, and compositing. Join us today!",
    link: "/animation-course",
    image: "images/banner-images-tab13.jpg",
  },
  {
    tag: "VFX",
    color: "red",
    title: "Visual Effects Training Courses",
    description:
      "Enter Visual Effects with Morph Academy: Live training in Video, Rotoscoping, Motion, and VFX. Join us today!",
    link: "/job-course",
    image: "images/banner-images-tab11.jpg",
  },
  {
    tag: "AR",
    color: "green",
    title: "Game Designs with AR/VR Course",
    description:
      "Learn game design and turn your passion for games into a career. Learn game design with our virtual reality course.",
    link: "/gaming-cousre",
    image: "images/banner-images-tab12.jpg",
  },
  {
    tag: "VR",
    color: "purple",
    title: "Metaverse Courses & Training",
    description:
      "Learn to create incredible & immersive events in 3D Virtual Worlds, Metaverse, AR, and VR with hands-on projects.",
    link: "/metaverse-course",
    image: "images/banner-images-tab14.jpg",
  },
];

const Section7 = () => {
  useEffect(() => {
    applyTiltEffect();
  }, []);

  return (
    <section className="relative py-20 px-5">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl"></div>
       
      <div className="container max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-4">
          Our Best Courses
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Unleash Your Imagination: Dive into Animation, Film Making, Gaming,
          and the Metaverse with Our Premier Courses
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.link}
              className={`tilt-card group relative rounded-2xl overflow-hidden transition-all duration-500 shadow-lg border-2 border-${course.color}-500`}
              style={{
                transform:
                  "perspective(1200px) rotateX(5deg) rotateY(20deg) scale(1)",
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${course.image})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-80">
                {/* Tag */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-sm font-bold text-${course.color}-300 bg-black/70 rounded-lg shadow-md animate-pulse shadow-${course.color}-500/70 shadow-lg`}
                >
                  {course.tag}
                </span>

                <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-lg leading-snug">
                  {course.title}
                </h3>
              <p className="text-gray-300 text-sm leading-snug drop-shadow-sm">
  {course.description}
</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
