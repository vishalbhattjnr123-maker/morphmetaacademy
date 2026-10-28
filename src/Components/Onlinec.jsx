"use client";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Online Course in Graphic Designing",
    description:
      "Master Graphic Design tools like Photoshop, Illustrator, CorelDRAW & Canva. Work on real projects and build a creative career from home.",
    image: "/assets/images/Frame 429.jpg",
    link: "/best-online-graphic-designing-course",
  },
  {
    title: "Online Course in VFX and Animation",
    description:
      "Learn complete VFX, motion graphics, compositing & animation workflows with job-ready skills. Includes Premiere Pro & After Effects.",
    image: "/assets/images/vv.jpg",
    link: "/best-online-vfx-and-animation-course",
  },
  {
    title: "Online Course in AR & VR Development",
    description:
      "Learn AR/VR using Unity, Unreal Engine & 3D tools. Build immersive apps for games, education, and next-gen experiences.",
    image: "/assets/images/arvfx.jpg",
    link: "/best-online-ar-vr-development-course",
  },
  {
    title: "Online Course in Film Making",
    description:
      "Master scriptwriting, cinematography, editing, sound & direction. Build real film projects with expert guidance.",
    image: "/assets/images/n5.jpg",
    link: "/best-online-film-making-course",
  },
];

const Onlinec = () => {
  return (
    <section className="py-14">
      {/* Heading */}
      <div className="text-center px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold gradient_text">
          Most Trending Online Courses
        </h3>
        <h2 className="mt-3 text-lg md:text-xl text-yellow-400 max-w-xl mx-auto">
          Boost Your Career with High-Demand Online Programs
        </h2>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto max-w-7xl px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-900 border border-gray-800 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">
                    {course.title}
                  </h4>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-4">
                    {course.description}
                  </p>
                </div>

                <Link
                  to={course.link}
                  className="inline-block bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onlinec;
