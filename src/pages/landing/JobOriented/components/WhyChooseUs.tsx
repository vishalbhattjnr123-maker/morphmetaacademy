import React from 'react';

const reasons = [
    "India’s Premier XR & AI Innovation Studio",
    "Certified Industry 4.0 Professionals",
    "Proven Global Expertise in AR/VR, Metaverse & AI",
    "In-house Design, Animation & Development Team",
    "Trusted by Education, Tourism, Real Estate & Enterprises",
    "World-Class Immersive Museum & Cultural Exhibits",
    "27+ Years of Creative Tech Excellence",
];

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const WhyChooseUs: React.FC = () => (
    <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-5xl font-black tracking-tighter">
                    <span className="block text-stroke-light">WHY CHOOSE</span>
                    <span className="block">BOXFY</span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-6xl mx-auto">
                {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mt-1">
                            <CheckIcon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-lg text-gray-300">{reason}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WhyChooseUs;