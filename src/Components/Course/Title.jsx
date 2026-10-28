import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const pathToImageMap = {
  "/course/best-filmmaking-and-direction-schools-and-courses-in-india":
    "Film-making-and-film-direciton-acting-school-chanidgarh.jpg",
  "/course/best-photography-courses-and-schools-colleges-and-institutes-in-india":
    "Photogrphay-course-and-school-iamgs.jpg",
  "/course/cinematography-course--Training-institute-in-chandigarh/":
    "Cinematography-Certification-Videography.jpg",
  "/course/Degree-in-Animation-Courses-and-Colleges-in-Chandigarh-India":
    "degree-in-animation-best-course-for-job-in-india.jpg",
  "/course/virtual-reality-course-training-institutes-in-india":
    "Professional-Diploma-in-Animation,-AR-VR-&-Metaverse-course-india.jpg",
  "/course/ar-vr-and-metaverse-course-at-morph-academy":
    "Professional-Diploma-in-Animation,-AR-VR-&-Metaverse-course-india.jpg",
  "/course/ar-and-vr-technologies-training-in-chandigarh-india":
    "arvrDesign-and-Development-Course-and-job-ready-program.jpg",
  "/course/best-metaverse-and-web-3.0-course-at-morph-academy":
    "Unlock-the-Potential-of-Web-3.0,-Explore-the-Metaverse-Course-at-Morph-Academy.jpg",
  "/course/animation-vfx-and-metaverse-course-and-classes-in-chandigarh":
    "Embark-on-a-creative-journey-with-Animation,-VFX,-Metaverse-and-other-courses.jpg",
  "/course/top-ai-generative-art-training-in-chandigarh-india":
    "AI-Generative-Art-Course-and-Training-with-Morph.jpg",
  "/course/maya-courses-and-classes-for-3d-animation":
    "Maya-Pro-Course-&-Classe-Elevate-Your-Design-Skills.jpg",
  "/course/autodesk-3ds-max-courses-and-certifications-at-chandigarh/":
    "Max-Pro-Course-and-Training-at-Morph-Academy.jpg",
  "/course/rotoscoping-courses-and-certifications-in-chandigarh":
    "Master-Rotoscoping-with-Our-Comprehensive-Course-and-Training.jpg",
  "/course/top-cinema-4d-courses-and-classes-collages-in-chandigarh":
    "Best-Cinema-4D-Pro-Courses-and-Training-in-Chandigarh.jpg",
  "/course/3d-animation-course-with-blender-in-chandigarh":
    "Best-Blender-Pro-Course-in-India.jpg",
  "/course/advanced-3d-animation-course-in-chandigarh/": "Degree-in-animation-and-VFX-Chandigarh.jpg",
  "/course/film-making-courses-in-chandigarh/":
    "Film-Making-and-Film-Direction-course-and-training-banners.jpg",

  // IT & Software
  "/course/python-training": "programming-background-with-person-working-with-codes-computer.jpg",
  "/course/full-stack": "programming-background-with-person-working-with-codes-computer.jpg",
  "/course/machine-learning": "programming-background-with-person-working-with-codes-computer.jpg",
  "/course/blockchain-training": "programming-background-with-person-working-with-codes-computer.jpg",
  "/course/cloud-computing": "programming-background-with-person-working-with-codes-computer.jpg",

  // Similar reusable image
  "/course/data-science-training-in-chandigarh/":
    "arvrDesign-and-Development-Course-and-job-ready-program.jpg",
  "/course/data-analytics-training-in-chandigarh/":
    "arvrDesign-and-Development-Course-and-job-ready-program.jpg",

  "/course/machine-learning-and-ai-training-in-chandigarh/":
    "arvrDesign-and-Development-Course-and-job-ready-program.jpg",

  "/course/mbvoc-in-multimedia-animation-in-chandigarh":
    "arvrDesign-and-Development-Course-and-job-ready-program.jpg",

  "/course/graphics-designing-institute-in-chandigarh/":
    "poster-movie-called-man-dark-scene-with-giant-robot-background_1064077-3389.jpg",

  // Default languages / misc
  "/best-french-language-course-in-chandigarh": "gra3.jpg",
  "/best-english-speaking-courses-in-chandigarh": "gra3.jpg",
  "/best-ielts-coaching-in-chandigarh": "gra3.jpg",
  "/best-pte-course-in-chandigarh": "gra3.jpg",
  "/best-german-language-course-in-chandigarh": "gra3.jpg",
  "/course/fashion-designing-with-cad-institute-in-chandigarh/": "AI-Generative-Art-Course-and-Training-with-Morph.jpg",
};

const CourseTitle = ({ ...course }) => {
  const location = useLocation();
  const [url, setUrl] = useState("bannner.jpg");

  useEffect(() => {
    setUrl(pathToImageMap[location.pathname] || "bannner.jpg");
  }, [location.pathname]);

  return (
    <div
      className="relative w-full bg-cover bg-center py-16 md:py-20"
      style={{ backgroundImage: `url(/assets/images/${url})` }}
    >
      {/* BG Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SECTION */}
          <div className="text-white space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              {course.banner?.title}
            </h1>

            <p className="text-gray-300">{course.banner?.description}</p>
            <p className="text-gray-300">{course.banner?.description2}</p>

            <p className="text-yellow-400 text-lg font-semibold">
              {course?.name}
            </p>

            <p className="text-gray-200 font-medium">
              Duration:{" "}
              {course?.duration?.map((item, i) => (
                <span key={i}>{item} </span>
              ))}
            </p>

            <p className="text-gray-200 font-medium">
              Eligibility: {course?.eligibility?.[0]}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-4">
              <Link
                to="/contact-us"
                className="px-6 py-3 bg-yellow-500 text-black text-sm md:text-base font-bold rounded-full shadow hover:bg-yellow-400 transition-all"
              >
                Enroll Now →
              </Link>

              <Link
                to="/contact-us"
                className="px-6 py-3 border border-white text-white text-sm md:text-base font-bold rounded-full hover:bg-white hover:text-black transition-all"
              >
                Online Course →
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex justify-end">
            <img
              className="rounded-2xl shadow-xl max-w-md border border-gray-600 object-cover"
              src={`/images/header/${course.banner?.image}`}
              alt={course.banner?.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
