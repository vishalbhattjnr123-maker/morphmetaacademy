import React from 'react';
import { ArrowIcon } from './icons';

const features = [
    { title: 'Augmented Reality (AR) Solutions', img: '/images/tech2.jpg', description: 'We create immersive AR try-ons, product demos, and educational apps for retail, tourism, and learning environments.' },
    { title: 'Mixed Reality (MR) & Extended Reality (XR)', img: '/images/tech1.jpg', description: 'Merge real and virtual elements for interactive storytelling, perfect for museums, exhibitions, and corporate showcases.' },
    { title: 'Spatial Computing & Metaverse Development', img: '/images/tech3.jpg', description: 'We design 3D virtual spaces, digital twins, and metaverse ecosystems using WebXR and AI technologies.' },
    { title: '3D Animation & Visual Effects (VFX)', img: '/images/tech4.jpg', description: 'From cinematic animation to realistic simulations, our VFX experts bring imagination to motion for films, marketing, and education.' },
    { title: 'Gamification & Interactive Experiences', img: '/images/tech5.jpg', description: 'Turn engagement into play! We design VR games, learning simulators, and interactive apps for education and entertainment.' },
    { title: 'AR/VR Lab Setup in Schools & Colleges', img: '/images/tech6.jpg', description: 'We build immersive AR/VR labs for schools, empowering students with digital skills and experiential learning.' },
];

const Features: React.FC = () => (
    <section className="bg-gray-100 text-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-5xl font-black tracking-tighter">
                    <span className="block text-stroke">COMPREHENSIVE</span>
                    <span className="block">TECH SERVICES</span>
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 mt-4">At boxfy, we bring together At Boxfy, we combine Augmented Reality, Virtual Reality, Mixed Reality, and AI to design interactive, data-driven experiences that connect users with brands on a deeper level.</p>
            </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
  {features.map((feature, index) => (
    <div
      key={index}
      className="relative rounded-2xl overflow-hidden group shadow-lg h-72"
    >
      {/* Image */}
      <img
        src={feature.img}
        alt={feature.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-5 w-full text-white transition-all duration-300">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-3">
          <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
    </section>
);

export default Features;