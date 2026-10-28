import React from 'react';
import { ArrowIcon } from './icons';

const features = [
    { title: 'LEARN ABOUT DINOSAURS IN VR', img: 'https://images.pexels.com/photos/16895995/pexels-photo-16895995/free-photo-of-woman-in-vr-glasses-and-dinosaurs.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Travel back in time and walk among prehistoric giants in this educational VR experience.' },
    { title: 'EXPLORE ANCIENT ROME IN VIRTUAL REALITY', img: 'https://images.pexels.com/photos/20341772/pexels-photo-20341772.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Witness the grandeur of the Roman Empire and explore iconic landmarks like the Colosseum.' },
    { title: 'A JOURNEY INTO THE HUMAN BRAIN', img: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'A visually stunning simulation that demystifies the complexities of neural pathways.' },
    { title: 'EXPLORE THE INTERNATIONAL SPACE STATION', img: 'https://images.pexels.com/photos/7978253/pexels-photo-7978253.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Experience life in zero gravity and conduct virtual spacewalks aboard the ISS.' },
    { title: 'LEARN ABOUT STONEHENGE IN VIRTUAL REALITY', img: 'https://images.pexels.com/photos/20341788/pexels-photo-20341788.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Uncover the mysteries of this ancient monument through an interactive archaeological journey.' },
    { title: 'EXPLORE THE TITANIC LIKE NEVER BEFORE', img: 'https://images.pexels.com/photos/15783516/pexels-photo-15783516/free-photo-of-a-shipwreck-underwater.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Dive deep into the Atlantic to explore the famous shipwreck in stunning detail.' },
];

const Features: React.FC = () => (
    <section className="bg-gray-100 text-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                    <span className="block text-stroke">WHAT CAN</span>
                    <span className="block">I LEARN?</span>
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 mt-4">We publish new educational experiences every month on Boxfyco-Morph. Here is what you can discover if you download our app right now.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden group shadow-lg h-96">
                        <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white transition-all duration-300">
                             <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{feature.description}</p>
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

export default Features;