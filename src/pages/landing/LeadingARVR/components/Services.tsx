import React from 'react';
import { ArrowIcon } from './icons';

const services = [
    { title: 'Virtual Reality (VR) Training & Simulation', img: '/images/ar1.jpg', description: 'We develop interactive VR simulations for industrial training, education, and corporate skill development, helping organizations enhance retention and performance.' },
    { title: 'AI & Generative AI Animation Film', img: '/images/ar2.jpg', description: 'Our AI-driven pipeline uses generative tools for concept art, script visualization, and AI content production, revolutionizing animation speed and creativity.' },
    { title: 'Digital Twin & Enterprise XR Solutions', img: '/images/ar3.jpg', description: 'We empower industries with real-time monitoring, data visualization, and collaborative XR environments for Industry 4.0 transformation.' },
    { title: '360° Video Animation & Virtual Tour', img: '/images/ar4.jpg', description: 'From tourism to real estate, we craft high-quality VR walkthroughs, dome video mapping, and interactive 3D storytelling experiences.' },
];

const Services: React.FC = () => (
    <section id="services" className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                 <h2 className="text-5xl md:text-5xl font-black tracking-tighter">
                    <span className="block text-stroke">Our Core</span>
                    <span className="block">Immersive Services</span>
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 mt-4">Welcome to Boxfy, India’s most innovative AR, VR, XR, and AI development studio, where creativity meets advanced technology to redefine audience engagement.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden group shadow-lg h-96">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-6 w-full text-white transition-all duration-300">
                            <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{service.description}</p>
                            </div>
                        </div>
                     
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Services;