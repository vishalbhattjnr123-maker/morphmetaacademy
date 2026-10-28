import React from "react";

const services = [
  {
    title: "Animation & VFX Course",
    img: "/images/ar1.jpg",
    description:
      "Learn the art of bringing imagination to life. From 2D/3D animation to visual effects and compospositing.",
    points: [
      "3D Modeling & Texturing",
      "Rigging & Character Animation",
      "Motion Graphics & Compositing",
      "VFX Simulation & Lighting",
      "Industry Software: Maya, Blender, After Effects, Nuke",
    ],
    subheading: "Salary (2026 Estimate):",
    subpoint: "₹5 LPA – ₹15 LPA (India), $60K+ (abroad)",
  },
  {
    title: "Film Making & Video Editing Course",
    img: "/images/ar2.jpg",
    description:
      "Become a professional storyteller through film production, direction, cinematography, and post-production.",
    points: [
      "Script Writing | Direction ",
      "Cinematography",
      "Lighting, Sound & Editing",
      "Color Grading & Post-Production",
      "Digital Filmmaking with DSLR & 4K Cameras",
    ],
    subheading: "Salary (2026 Estimate):",
    subpoint: "₹4 LPA – ₹18 LPA (depending on role and experience)",
  },
  {
    title: "Game Design & AR/VR Development",
    img: "/images/ar3.jpg",
    description:
      "Game Art, Design & Development with AR/VR-XR program prepares students for immersive design, interactive storytelling, and next-gen gameplay creation.",
    points: [
      "Unreal Engine (Blueprint Logic, Physics, Object Interactions)",
      "Unity 3D for AR/VR & XR Applications",
      "Game Level Design & Scripting",
      "AI for Game Behavior & Animation",
      "Metaverse & Virtual Asset Creation"
    ],
    subheading: "Salary (2026 Estimate):",
    subpoint: "₹8 LPA – ₹25 LPA in India; $100K+ globally",
  },
  {
    title: "Photography & Filmmaking",
    img: "/images/ar4.jpg",
    description:
      "Master the art of visual storytelling with Morph’s Govt-approved degree & diploma programs in Photography and Filmmaking.",
    points: ["DSLR Photography","Studio Lighting","Fashion & Product Photography","Film Editing", "Wedding & Event Shoots | Drone Cinematography"],
    subheading: "Salary (2026 Estimate):",
    subpoint: "₹3 LPA – ₹12 LPA",
  },
  {
    title: "Graphic Design & UI/UX Design",
    img: "/images/ar3.jpg",
    description:
      "A blend of creativity and technology, Morph’s Graphic Design course helps students create powerful visuals for media, advertising, and branding.",
    points: [
      "Adobe Photoshop ",
      "Illustrator ",
      "InDesign",
      "UI/UX Prototyping (Figma, XD)",
      "Brand Identity & Motion Design"
    ],
    subheading: "Salary (2026 Estimate):",
    subpoint: "₹4 LPA – ₹14 LPA",
  },
   {
    title: "Digital Marketing & Content Creation",
    img: "/images/ar3.jpg",
    description:
      "Transform into a digital growth strategist with hands-on training in social media marketing, Google Ads, SEO, and influencer branding.",
    points: [
      "SEO, SEM, and Paid Ads",
      "Social Media Marketing (Meta, LinkedIn, YouTube)",
      "Content Writing",
      "Digital Branding",
      "Google Ads Certification"
    ],
    subheading: "Salary (2026 Estimate):",
    subpoint: "₹5 LPA – ₹20 LPA",
  }
];

const Services: React.FC = () => (
  <section id="services" className="bg-white text-black py-20 px-4">
    <div className="max-w-7xl mx-auto">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-5xl font-black tracking-tighter">
          <span className="block text-stroke">(2025–26)</span>
          <span className="block">100% Job Oriented Courses in Chandigarh</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mt-4">
          Morph Academy offers diverse programs across creative, IT, and digital tech domains.
          Each course blends theory with live production and mentorship.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              rounded-2xl overflow-hidden shadow-xl bg-white
              border-t border-gray-200
              border-l-[4px] border-l-violet-600
              border-r-[4px] border-r-pink-500
              border-b-[4px] border-b-blue-500
              hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
            "
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Bullet Points */}
              <ul className="space-y-2 text-gray-700 mb-4">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-600 mt-2"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Subheading + Subpoint (NEW UI) */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-200">
                <h4 className="text-md font-semibold text-violet-700 mb-1">
                  {service.subheading}
                </h4>
                <p className="text-gray-800 font-medium">{service.subpoint}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
