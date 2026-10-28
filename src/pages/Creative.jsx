"use client";

import { useState } from "react";

const galleryImages = [
  { src: "images/ag5.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg1.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg2.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg3.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg4.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg5.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg6.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg7.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg8.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg9.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg10.jpg", alt: "Morph Academy Gallery Img" },
  { src: "images/cg11.jpg", alt: "Morph Academy Gallery Img" },
];

const itemsPerPage = 9;

const Creative = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPage = Math.ceil(galleryImages.length / itemsPerPage);

  const displayedImages = galleryImages.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <div className="bg-black text-white pb-20">
      {/* Banner Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/Creative-Gallery-meta-morph-tp-banner.jpg"
          alt="Meta Morph Creative Gallery Banner"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />

        {/* Banner Text */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
            Creative Gallery
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-3 max-w-2xl mx-auto">
            Discover creativity through innovative art and design—where imagination comes alive.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-xl bg-gray-900/50 backdrop-blur-lg group transition-all duration-500 hover:shadow-yellow-500/40"
            >
              <img
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          {[...Array(totalPage)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePage(index + 1)}
              className={`px-4 py-2 rounded-full border backdrop-blur-lg transition-all shadow-md ${
                activePage === index + 1
                  ? "bg-yellow-400 text-black font-bold shadow-yellow-500/40"
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

export default Creative;
