import React from 'react';
import { ArrowIcon, ChevronDownIcon } from './icons';

interface HeroProps {
    onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
    const handleScrollDown = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://cdn.dribbble.com/userupload/45506698/file/dd3d68fa5dc78edbb4426082653b4ca2.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tighter leading-tight uppercase">
                        <span className="block text-stroke-light">
                           Leading AR, VR, XR & AI 
                        </span>
                         <span className="block">Innovation Studio in India</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                      India’s leading AR, VR, XR & AI innovation studio delivering immersive metaverse, AI animation, and virtual reality solutions worldwide.
                    </p>
                    <button 
                        onClick={onOpenModal}
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-full flex items-center space-x-3 text-lg hover:bg-white/20 transition-all transform hover:scale-105 mx-auto shadow-lg"
                    >
                        <span>Get a Free Consultation</span>
                        <ArrowIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Scroll Down Arrow */}
            <div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
                onClick={handleScrollDown}
                aria-label="Scroll to next section"
            >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/50 animate-bounce">
                    <ChevronDownIcon className="w-6 h-6" />
                </div>
            </div>
        </section>
    );
};

export default Hero;