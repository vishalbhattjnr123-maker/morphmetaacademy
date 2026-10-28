import React, { useState } from 'react';
import { ArrowIcon } from './icons';

const caseStudies = [
    {
        title: 'Corporate Training Gamification',
        description: 'We developed a fully interactive VR training simulation for a Fortune 500 company, resulting in a 40% increase in employee engagement and a 25% reduction in onboarding time. The platform uses gamified modules to teach complex operational procedures in a safe, repeatable environment.',
        tags: ['VR Training', 'Enterprise', 'Unity'],
        img: 'https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#'
    },
    {
        title: 'Medical VR Surgical Training',
        description: 'In partnership with a leading medical university, we created a hyper-realistic surgical training platform. This allows medical students to practice complex procedures with haptic feedback, significantly improving skill acquisition and reducing risks associated with traditional training methods.',
        tags: ['Healthcare', 'Simulation', 'Unreal Engine'],
        img: 'https://images.pexels.com/photos/7089018/pexels-photo-7089018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#'
    },
    {
        title: 'Architectural Visualization & Real Estate',
        description: 'Our AR application for a major real estate developer allows potential buyers to visualize and customize properties in real-time. This immersive experience has led to a 30% faster sales cycle and higher client satisfaction by providing a true sense of space and scale before construction begins.',
        tags: ['AR', 'Real Estate', 'WebXR'],
        img: 'https://images.pexels.com/photos/8135832/pexels-photo-8135832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '#'
    }
];


const DiscoverAdventures: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };
    
    const currentStudy = caseStudies[currentIndex];

    return (
        <section className="bg-gray-100 text-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                      <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                    <span className="block text-stroke">Our Case </span>
                    <span className="block">Studies</span>
                </h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                        We partner with industry leaders to create immersive solutions that solve real-world problems and deliver measurable results.
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div key={currentIndex} className="fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img src={currentStudy.img} alt={currentStudy.title} className="rounded-2xl w-full h-[300px] object-cover" />
                            </div>
                            <div className="text-left">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {currentStudy.tags.map(tag => (
                                        <span key={tag} className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{currentStudy.title}</h3>
                                <p className="text-gray-600 mb-6">{currentStudy.description}</p>
                            </div>
                        </div>
                    </div>
                     <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex space-x-4">
                        <button onClick={prev} className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black">
                             <ArrowIcon className="w-6 h-6 transform rotate-180" />
                        </button>
                        <button onClick={next} className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-500 transition-colors">
                             <ArrowIcon className="w-6 h-6" />
                        </button>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverAdventures;