import React from 'react';
import { ArrowIcon, ChevronDownIcon } from './icons';

interface HeroProps {
    onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
    const handleScrollDown = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <section className="relative text-white min-h-screen flex items-center justify-center text-center pt-20">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                 <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://cdn.dribbble.com/userupload/45506698/file/dd3d68fa5dc78edbb4426082653b4ca2.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="absolute inset-0 bg-black/60 z-1"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                           <span className="block text-stroke-light mt-2">India’s Rising Game Studio</span>
            
                        Game Development and Design with AR/VR
                    </h2>
                    <p className="max-w-3xl mx-auto text-sm md:text-xl lg:text-md text-gray-300">
                        In India's powerful wave of game development, Boxfyco-Morph emerges as a leading platform services company. We deliver end-to-end game design, AR/VR/XR, online gaming platforms, and LiveOps for gamers, brands, and educational platforms alike.
                    </p>
                    <br/>
                    <button 
                        onClick={onOpenModal}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center space-x-3 text-lg hover:from-purple-700 hover:to-blue-600 transition-all transform hover:scale-105 mx-auto"
                    >
                        <span>Get a Free Consultation</span>
                        <ArrowIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div
                onClick={handleScrollDown}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
            >
                <div className="w-10 h-10  flex items-center justify-center animate-bounce group-hover:animate-none">
                    <ChevronDownIcon className="w-8 h-8 text-white transition-transform group-hover:scale-125" />
                </div>
            </div>
        </section>
    );
};


export default Hero;