import React, { useState } from 'react';

const caseStudies = [
    {
        title: 'Immersive Heritage Tour of Hampi',
        description: 'We partnered with the tourism board to create an AR-powered guide for the UNESCO World Heritage site of Hampi. Visitors use their smartphones to see 3D reconstructions of ancient structures and watch historical reenactments, transforming their visit into an interactive journey through time. The app has seen over 100,000 downloads and increased tourist engagement by 60%.',
        tags: ['AR', 'Tourism', 'Mobile App', 'Cultural Heritage'],
        img: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#'
    },
    {
        title: 'Smart City Digital Twin for Urban Planning',
        description: 'For a major metropolitan authority, we developed a comprehensive digital twin of the city\'s infrastructure. This real-time 3D model integrates IoT data to simulate traffic flow, energy consumption, and environmental factors, enabling planners to make data-driven decisions for sustainable development and emergency response.',
        tags: ['Digital Twin', 'Smart City', 'Unreal Engine', 'Enterprise'],
        img: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#'
    },
    {
        title: 'XR Training for Heavy Machinery Assembly',
        description: 'We created an XR solution for a leading manufacturing client to train technicians on complex machinery assembly. Using Mixed Reality headsets, trainees see holographic instructions overlaid onto real equipment, practice procedures safely, and receive real-time guidance. This reduced training time by 50% and minimized errors by 35%.',
        tags: ['XR', 'Industrial Training', 'Manufacturing', 'Mixed Reality'],
        img: 'https://images.pexels.com/photos/8346430/pexels-photo-8346430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#'
    }
];


const DiscoverAdventures: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeStudy = caseStudies[activeIndex];

    const next = () => setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);


    return (
        <section id="case-studies" className="bg-gray-100 text-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                      <h2 className="text-5xl md:text-5xl font-black tracking-tighter">
                        <span className="block text-stroke">OUR CASE</span>
                        <span className="block">STUDIES</span>
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                        We partner with industry leaders to create immersive solutions that solve real-world problems and deliver measurable results.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                     <div key={activeIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div className="order-2 md:order-1 p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {activeStudy.tags.map(tag => (
                                        <span key={tag} className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{activeStudy.title}</h3>
                                <p className="text-gray-600">{activeStudy.description}</p>
                            </div>
                            <div className="order-1 md:order-2">
                                <img src={activeStudy.img} alt={activeStudy.title} className="w-full h-64 md:h-[450px] object-cover" />
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={prev} 
                        className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-200 transition-colors text-black z-10"
                        aria-label="Previous case study"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button 
                        onClick={next} 
                        className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-200 transition-colors text-black z-10"
                        aria-label="Next case study"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
                 <div className="flex justify-center mt-8 space-x-3">
                    {caseStudies.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-violet-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                            aria-label={`Go to case study ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverAdventures;