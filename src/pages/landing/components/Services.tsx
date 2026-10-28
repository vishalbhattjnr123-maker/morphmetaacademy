import React from 'react';
import { ArrowIcon } from './icons';

const services = [
    { title: 'Game Design & Mechanics', img: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Crafting core gameplay loops, reward systems, and engaging level design for 2D, 3D, and HTML5 games.' },
    { title: 'AR/VR & XR Development', img: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Building immersive experiences with optimized frame rates and low latency using Unity, Unreal, and WebXR.' },
    { title: 'Online Game Platform Services', img: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Providing robust backend solutions including LiveOps, multiplayer matchmaking, and cloud gaming infrastructure.' },
    { title: 'Asset Creation', img: 'https://images.pexels.com/photos/7335031/pexels-photo-7335031.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'End-to-end art pipelines, from concept art and 3D modeling to VFX, SFX, and intuitive UI/UX design.' },
];

const Services: React.FC = () => (
    <section id="services" className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                    <span className="block text-stroke">OUR CORE</span>
                    <span className="block">AR/VR SERVICES</span>
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 mt-4">From core gameplay loops and immersive XR development to LiveOps platforms and high-quality asset creation, we deliver end-to-end game development services.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden group shadow-lg h-96">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white transition-all duration-300">
                            <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{service.description}</p>
                            </div>
                        </div>
                         <button className="absolute bottom-6 right-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center hover:from-purple-600 hover:to-indigo-700 transition-all transform group-hover:scale-110">
                            <ArrowIcon className="w-6 h-6 transform -rotate-45" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Services;