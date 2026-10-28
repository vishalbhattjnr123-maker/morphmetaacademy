import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
  { name: "Rahul Shetty", feedback: "Morph Academy is fantastic for hands-on learning! The instructors are not only skilled but also genuinely supportive. If you want to learn with the latest tech in design, this is the place to be! Thank you" },
  { name: "Neha Sharma", feedback: "I loved my experience at Morph Academy. The curriculum is focused on real-world skills, and the staff are always ready to help you succeed. Highly recommended for anyone serious about building a career!" },
  { name: "Rittu", feedback: "Morph Meta Academy has been a game-changer for me. The animation courses are top-notch, and the mentors are highly skilled. I learned everything from basic character design to advanced motion graphics." },
  { name: "Rohan", feedback: "I joined the photography course at Morph Meta Academy, and it has truly transformed my skills. The hands-on training and real-world projects helped me build an impressive portfolio. Thank you, Morph Meta!" },
  { name: "Harman", feedback: "If you're passionate about game development, this is the place to be. The 3D Game Design program covers everything from modeling to game engines like Unreal and Unity. I feel industry-ready!" },
  { name: "Manish", feedback: "The best part about Morph Meta Academy is the practical approach. We worked on real animation projects and used high-end software like Blender and Maya. I got my first freelance project within months!" }
];

const Vikreview = () => {
  return (
    <section className="bg-neutral-900 py-16">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
          What Our Students Say
        </h3>
        <p className="text-gray-300 mb-12">
          Here’s what our students have to say about their experiences with us:
        </p>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={20}
          nav
          autoplay
          autoplayHoverPause
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
          }}
          navText={[
            "<div class='custom-prev'>&#10094;</div>",
            "<div class='custom-next'>&#10095;</div>"
          ]}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-neutral-800 rounded-2xl p-6 shadow-lg transition-transform duration-500 text-left h-full flex flex-col justify-between opacity-0 animate-slideIn hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="pic bg-gray-700 flex items-center justify-center rounded-full w-14 h-14 mr-4">
                  <img className="w-8 h-8" src="/assets/images/icons8-google-48.png" alt={t.name} />
                </div>
                <h5 className="text-white font-semibold text-lg">{t.name}</h5>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 space-x-1">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base">{t.feedback}</p>
            </div>
          ))}
        </OwlCarousel>
      </div>

      <style>
        {`
          .custom-prev, .custom-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            color: black;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
            transition: 0.3s;
          }
          .custom-prev:hover, .custom-next:hover {
            background: #f8f9fa;
          }
          .custom-prev { left: -25px; }
          .custom-next { right: -25px; }
          @media (max-width: 768px) {
            .custom-prev { left: -10px; }
            .custom-next { right: -10px; }
          }

          /* Slide-in animation */
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.6s forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Vikreview;
