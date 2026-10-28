import React from 'react';

const useCases = [
    { title: 'AR/VR in Tourism', description: '3D immersive travel experiences with AR overlays.' },
    { title: '3D Web & VR Walkthroughs', description: 'Virtual tours of future environments.' },
    { title: 'AR Trade Show Booths', description: 'Interactive product demos and portals.' },
    { title: 'AR/VR Education', description: 'Hands-on immersive teaching and research tools.' },
    { title: 'Digital Twins', description: 'Smart city and industrial simulation systems.' },
    { title: 'Points of Interest Tours', description: 'AR-based city and heritage navigation.' },
    { title: '3D Virtual Shows', description: 'Host exhibitions and events in the metaverse.' },
    { title: 'AR Marketing & Product Demos', description: '3D try-ons and real-time visualization.' },
    { title: 'Industrial Machine XR', description: 'Assembly and training using realistic XR environments.' },
];

const UseCases: React.FC = () => (
    <section className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
                <h2 className="text-5xl md:text-5xl font-black tracking-tighter mb-6">
                    <span className="block text-stroke">AR/VR SOLUTIONS</span>
                    <span className="block">& USE CASES</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">From tourism and education to industrial training and marketing, our immersive solutions are tailored to solve specific challenges and create new opportunities.</p>
            </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {useCases.map((useCase, index) => (
    <div
      key={index}
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
    >
      {/* Gradient Overlay (soft background accent) */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-transparent opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 p-6 text-center">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text ">
          {useCase.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {useCase.description}
        </p>
      </div>

      {/* Decorative Bottom Border (always visible) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-pink-400"></div>
    </div>
  ))}
</div>


        </div>
    </section>
);

export default UseCases;
