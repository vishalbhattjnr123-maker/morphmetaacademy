"use client";

import { useState } from "react";

const galleryImages = [
  { src: "images/super-man609.y6.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-man609.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-man607.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-man67.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-man5.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-man-then1 (1).jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-man-the7.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-man-ajay.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-hero-animation88iu7.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-hero-animation88iu.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-hero-animation87.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/super-hero-animation8.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/ads-animation-may1.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/ads-animation-may5.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/ads-animation-may6.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/ads-animation-may6y.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/ads-animation-mayhy.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/ads-film.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-course-meta-animation.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-course-meta-animationcourse.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-course.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuie-freet-news.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuie-godl.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuie-lip4.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuie-tred.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuie-freet.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuie-zuri-6.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuie-zuri.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuie7.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuieall.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animation-frbnachsuieanpthe1.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/animationn-vfrx1-.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/hero-one1.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/herot.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/metaver1.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/morph-acadmehj.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/morph-acadmehuj.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/morph-acadmehy.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/resource/morph-nres-ads.jpg", alt: "Morph Academy Gallery Img" },
];

const itemsPerPage = 6;

const Resource = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPage = Math.ceil(galleryImages.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const displayedImages = galleryImages.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <div className="bg-black pb-10">
      {/* Banner */}
      <div className="w-full border-b">
        <img
          className="w-full object-cover"
          src="/images/Creative-Gallery-meta-morph-tp-banner.jpg"
          alt="Meta Morph Creative Gallery Banner"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <h1 className="text-center text-white text-4xl md:text-6xl font-bold">
          Creative Gallery
        </h1>
        <h4 className="text-center text-yellow-400 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Creative Gallery is a dynamic space showcasing innovative art and
          design. We feature diverse exhibits, from contemporary paintings to
          digital installations, celebrating both emerging and established
          artists. Explore creativity and inspiration in every visit.
        </h4>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-out-up"
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center md:justify-end mt-8 gap-2">
          {[...Array(totalPage)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg border transition ${
                activePage === index + 1
                  ? "bg-yellow-400 text-black font-semibold"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
