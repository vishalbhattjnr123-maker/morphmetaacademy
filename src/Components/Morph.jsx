"use client";


export default function Morph() {
  const slides = [
    "/assets/images/animation-3d-ar-vr-coruse.jpg",
    "/assets/images/ar-vr-course-home-images.jpg",
    "/assets/images/Photogrphaty-course-training.jpg",
  ];


  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {slides.map((src, idx) => (
          <div key={idx} className="px-1">
            <div className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500">
              <img
                src={src}
                alt={`Academy ${idx + 1}`}
                className="w-full h-64 md:h-52 lg:h-56 object-cover"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
