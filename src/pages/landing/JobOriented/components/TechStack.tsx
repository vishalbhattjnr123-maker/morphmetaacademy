import React from 'react';

const technologies = [
    { name: 'Unity', logo: 'https://cdn.worldvectorlogo.com/logos/unity-69.svg', description: 'The world’s leading platform for creating and operating interactive, real-time 3D (RT3D) content.' },
    { name: 'Unreal Engine', logo: '/images/unreal.png', description: 'The world’s most open and advanced real-time 3D creation tool for photoreal visuals and immersive experiences.' },
    { name: 'WebXR', logo: '/images/tech5.png', description: 'An open standard that makes it possible to experience VR/AR in your browser, with no app install required.' },
    { name: 'Meta Quest', logo: '/images/tech6.webp', description: 'The leading all-in-one VR system, offering truly immersive experiences with intuitive controls.' },
    { name: 'HTC Vive', logo: '/images/tech7.png', description: 'A versatile VR platform known for its high-fidelity tracking and expansive ecosystem.' },
    { name: 'Pico', logo: '/images/download.svg', description: 'An innovative VR hardware company focused on creating amazing VR experiences for consumers and businesses.' },
];

const TechStack: React.FC = () => (
    <section className="py-20 px-4 bg-white text-black relative">
        <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-5xl font-black tracking-tighter">
                    <span className="block text-stroke">Our Technology </span>
                    <span className="block">Stack</span>
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 mt-4">We leverage industry-standard tools and engines to build high-performance, cross-platform AR & VR experiences.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {technologies.map((tech) => (
                    <div key={tech.name} className="relative group bg-gray-100 border border-gray-200 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-violet-50 hover:border-violet-300 hover:shadow-lg">
                        <div className="h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                            <img 
                                src={tech.logo} 
                                alt={tech.name} 
                                className="max-h-16 object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 transition-transform duration-300 group-hover:-translate-y-2">{tech.name}</h3>
                        <p className="text-gray-600 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300">{tech.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TechStack;