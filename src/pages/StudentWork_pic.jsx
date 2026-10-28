import { useState } from "react";
import { Helmet } from "react-helmet";

const galleryImages = [
  { src: "images/student/WhatsApp Image 2025-07-26 at 21.19.58_9264419c.jpg"},
  { src: "images/office4.jpg"},
  { src: "images/independence.jpg"},
  { src: "images/jio.jpg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.23 PM (2).jpeg"},
  { src: "images/lm1.jpg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.22 PM (1).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.17 PM (2).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.16 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.17 PM (4).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.17 PM (3).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.17 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.18 PM (1).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.19 PM (1).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.19 PM (2).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.19 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.20 PM (1).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.20 PM (2).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.20 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.21 PM (1).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.21 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.21 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.22 PM (2).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.22 PM (3).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.22 PM (4).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.22 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.23 PM (1).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.23 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.24 PM (1).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.24 PM.jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.25 PM (1).jpeg"},
  { src: "images/student/WhatsApp Image 2024-08-28 at 1.41.25 PM.jpeg"},
];

const itemsPerPage = 9;

const StudentWork_pic = () => {
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
    <>
      <Helmet>
        <title>Student Gallery - Meta Morph</title>
      </Helmet>

      {/* Banner */}
      <div className="bg-black pb-10">
        <div className="w-full">
          <img
            className="w-full object-cover"
            src="/images/Creative-Gallery-meta-morph-tp-banner.jpg"
            alt="Meta Morph Creative Gallery Banner"
          />
        </div>

        {/* Heading & Description */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-10">
            Student Gallery
          </h1>
          <p className="text-lg md:text-xl text-yellow-400 mt-4">
            Creative Gallery is a dynamic space showcasing innovative art
            and design. We feature diverse exhibits, from contemporary
            paintings to digital installations, celebrating both emerging
            and established artists. Explore creativity and inspiration in
            every visit.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((item, i) => (
              <div
                key={i}
                data-aos="zoom-out-up"
                className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={item.src}
                  alt={`Morph Academy Gallery ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPage)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                activePage === index + 1
                  ? "bg-yellow-500 text-black font-bold"
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

export default StudentWork_pic;
