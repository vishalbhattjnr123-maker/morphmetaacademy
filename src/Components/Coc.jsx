import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Calendar1Icon } from "lucide-react";

const cards = [
  {
    id: 1,
    name: "Digital Marketing | 100% Job Guarantee",
    level: "Popular",
    description:
      "Master in-demand AI Powered Digital Skills like SEO, PPC, SMM, Affiliate Marketing, Drop shipping, Freelancing, and more with Morph’s expert-led digital marketing classes.",
    image: "/assets/images/digital-marketing-course-and-training-in-chandigarh-2025.jpg",
    stats: { duration: "4-6 Months", classes: "Offline/Online", rating: 4.5 },
  },
  {
    id: 2,
    name: "Video Editing | Reel & Shorts Design Course",
    level: "Popular",
    description:
      "Learn everything from basics to advanced video editing: transitions, effects, AI editing, reels, storytelling, and understanding viewer psychology.",
    image: "/assets/images/video-editing-course-and-training-in-chandigarh-and-punjab.jpg",
    stats: { duration: "4-6 Months", classes: "Offline/Online", rating: 4.5 },
  },
  {
    id: 3,
    name: "Best Photography Courses & Certificates",
    level: "Popular",
    description:
      "Photograph in different scenarios like family portraits, landscapes, aerial, product, fashion photography, Lightroom editing, wildlife, and much more.",
    image: "/assets/images/Photography-&-Cinematography-training-india.jpg",
    stats: { duration: "4-6 Months", classes: "Offline/Online", rating: 4.5 },
  },
  {
    id: 4,
    name: "Game Design And Development Course",
    level: "Popular",
    description:
      "Build games from scratch! Master Unreal Engine with expert-led courses and learn from top studio professionals. Start your game dev career now.",
    image: "/assets/images/Game-metaverse-course-acadmey-in-india.jpg",
    stats: { duration: "4-6 Months", classes: "Offline/Online", rating: 4.5 },
  },
];
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-blue-600 hover:bg-violet-600 text-white p-2 px-4 rounded-full shadow-lg z-20 transition-colors duration-300"
    onClick={onClick}
    aria-label="Next"
  >
    <i className="fas fa-chevron-right"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-blue-600 hover:bg-violet-600 text-white p-2 px-4 rounded-full shadow-lg z-20 transition-colors duration-300"
    onClick={onClick}
    aria-label="Previous"
  >
    <i className="fas fa-chevron-left"></i>
  </button>
);

const Coc = () => {
  // Tilt effect
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

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale-100";
      });
    });
  }, []);

   const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-gray-500 hover:bg-blue-600"></div>
    ),
  };

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-3">
              <div className="tilt-card relative bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {card.level}
                  </span>
                  <div className="absolute inset-0 bg-black/20 rounded-2xl transition-opacity duration-300 hover:opacity-0"></div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between text-white h-64">
                  <h3 className="text-xl font-bold mb-2 drop-shadow-md">{card.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-5">{card.description}</p>

                  {/* Stats */}
                  <div className="flex flex-col gap-2 mb-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <i className="fa-regular fa-clock"></i> Duration: {card.stats.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-laptop"></i> Classes: {card.stats.classes}
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-star text-violet-400"></i> Rating: {card.stats.rating}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href="/contact-us" className="mt-auto">
                    <button className="w-full py-3 flex gap-3 justify-center text-white font-semibold rounded-full shadow-lg overflow-hidden relative transition-all duration-300  bg-gradient-to-r from-blue-600 to-violet-600">
                      <Calendar1Icon className="w-5 h-5"/> Free Demo
                    </button>
                  </a>
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none transition-all duration-300 hover:border-blue-600"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Coc;
