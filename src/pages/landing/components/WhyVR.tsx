import React from 'react';
import { ArrowIcon } from './icons';

interface WhyVRProps {
    onOpenModal: () => void;
}

const WhyVR: React.FC<WhyVRProps> = ({ onOpenModal }) => (
    <section className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                    <span className="block text-stroke">WHY SHOULD WE TRAIN</span>
                    <span className="block">EMPLOYEES IN VR?</span>
                </h2>
                <p className="text-gray-600 mb-6 text-lg">Demand for immersive content is surging across industries. We build powerful VR experiences for corporate training, education, edtech, real estate walkthroughs, virtual events, and brand activations, handling the entire creative and technical pipeline.</p>
                 <button 
                    onClick={onOpenModal}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center space-x-3 text-lg hover:from-purple-700 hover:to-blue-600 transition-all transform hover:scale-105"
                 >
                    <span>Request Consultation</span>
                    <ArrowIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="relative w-full h-96">
                <img src="https://images.pexels.com/photos/8432322/pexels-photo-8432322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="VR Training collage" className="w-full h-full object-cover rounded-2xl"/>
            </div>
        </div>
    </section>
);

export default WhyVR;