import { useState } from "react";
import { Helmet } from "react-helmet";
import MetaSeo from "../Components/MetaSEO";
import AnimatioCard from "../Components/AnimatioCard";

const galleryImages = [
  { src: "/images/3d/home-pages-slide-1.jpg" },
  { src: "/images/3d/home-pages-slide-2.jpg" },
  { src: "/images/3d/home-pages-slide-3.jpg" },
  { src: "/images/3d/home-pages-slide-5.jpg" },
  { src: "/images/3d/home-pages-slide-7.jpg" },
  { src: "/images/3d/home-pages-slide-31.jpg" },
  { src: "/images/3d/home-pages-slide7.jpg" },
  { src: "/images/3d/home-pages-slidee-1.jpg" },
  { src: "/images/3d/home-pages-slidee7.jpg" },
  { src: "/images/3d/morh-baner6.jpg" },
  { src: "/images/3d/morh-baner2.jpg" },
  { src: "/images/3d/morh-baner3.jpg" },
  { src: "/images/3d/MAND-VR.jpg" },
  { src: "/images/3d/MANF.jpg" },
  { src: "/images/3d/mobile.jpg" },
  { src: "/images/3d/Best-Acting-Courses-in-Chandigarh (1).jpg" },
  { src: "/images/3d/NFT-Design-&-DevelopmentCourse.jpg" },
  { src: "/images/3d/Unity-Game-Design-.jpg" },
];

const itemsPerPage = 9;

const Animation = () => {
  const seo = {
    title: "Animation Student Portfolio",
    description:
      "Animation Student Portfolio, Join Morph, Learn vfx and animation training with Job Guarantee-VFX courses with experienced professionals -Leading Animation Institute",
    keyword:
      "Graphics Designing Course in chandigarh, Graphics Designing Diploma in chandigarh, Graphics Design Institutes in chandigarh, Best Graphics Design Institute in chandigarh, Graphics Designing Classes in chandigarhNearby, Top Graphics Design Academy near me",
  };

  const [activePage, setActivePage] = useState(1);
  const totalPage = Math.ceil(galleryImages.length / itemsPerPage);

  const displayedImages = galleryImages.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <>
      <MetaSeo meta={seo} />
      <Helmet>
        <title>Animation Student Portfolio</title>
      </Helmet>

      <div className="bg-black min-h-screen pb-20">

        {/* HERO BANNER */}
        <div className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/images/Animation-Gallery-meta-morph-tp-banner.jpg"
            alt="Meta Morph Animation Gallery Banner"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90" />

          {/* Hero Text */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
              Animation Gallery
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mt-3 max-w-2xl mx-auto">
              Explore a world of creativity—featuring student animation work,
              3D artworks, motion graphics, and more.
            </p>
          </div>
        </div>

        {/* Custom Animation Cards */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <AnimatioCard />
        </div>

        {/* GALLERY SECTION */}
        <div className="max-w-7xl mx-auto px-6 mt-16">

          {/* Section Title */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
            Student Work Showcase
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedImages.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-gray-900/40 backdrop-blur-lg shadow-xl group hover:shadow-yellow-500/40 hover:-translate-y-2 transition-all duration-500"
              >
                <img
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-700"
                  src={item.src}
                  alt={`Animation Work ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-12 space-x-3">
          {[...Array(totalPage)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePage(index + 1)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all shadow-md backdrop-blur-md ${
                activePage === index + 1
                  ? "bg-yellow-400 text-black shadow-yellow-400/40"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </>
  );
};

export default Animation;
