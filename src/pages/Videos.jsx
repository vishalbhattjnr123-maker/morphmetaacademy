import { Helmet } from "react-helmet";
import MetaSeo from "../Components/MetaSEO";

const Videos = () => {
  const seo = {
    title: "Morph Video Gallery",
    description:
      "Morph Video Gallery, Join Morph, Learn vfx and animation training with Job Guarantee-VFX courses with experienced professionals -Leading Animation Institute",
    keyword:
      "Graphics Designing Course in chandigarh, Graphics Designing Diploma in chandigarh, Graphics Design Institutes in chandigarh, Best Graphics Design Institute in chandigarh, Graphics Designing Classes  in chandigarhNearby, Top Graphics Design Academy near me",
  };

  // 📌 Array of YouTube video IDs (easy to expand)
  const videos = [
     // ✅ New Videos
    "qJiFp9M8GCE",
    "LEfbkES-Up0",
    "ZY7J1AlGAYI",
    "zwrq9EFBzys",
    "aOX2e2B2IQo",
    "q0mps1l3gy0",
    "Es37djyFxkw",
    "eEmIcur7IP8",
    "R6VBbt90H2Y",
    "uWc3p7-UK7Y",
    "ie1-FbKId94",
    "1FyfqNA62Ps",
    "AJKu4p7xj4Y",
    "RwVD0m4iSRs",
    "IdZ8M58MLIM",
    "3xBUv-omxbw",
    "QmwD7daWvYQ",
    "-tVrmYiS0OY",
    "XpRW3d3X0j0",
    "L79KsdDFr88",
    "GnWnEY360GA",
    "6D0xC1e7Fw4",
    "utIoEoqn7Hg",
    "Ga5lOfq8tjs",
   
  ];

  return (
    <>
      <MetaSeo meta={seo} />

      {/* Hero Section */}
      <div className="bg-black pb-10">
        <div className="w-full">
          <img
            className="w-full object-cover"
            src="/images/Animation-Gallery-meta-morph-tp-banner.jpg"
            alt="Meta Morph Affiliations & Accreditations Banner"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-white mt-10">
            Video Gallery
          </h1>
          <p className="text-center text-lg md:text-xl text-yellow-400 mt-4 max-w-3xl mx-auto">
            Welcome to the Animation Gallery! 
          </p>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {videos.map((id, index) => (
              <div
                key={index}
                data-aos="zoom-out-up"
                className="rounded-2xl overflow-hidden shadow-lg bg-gray-900 hover:scale-105 transition-transform duration-300"
              >
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
