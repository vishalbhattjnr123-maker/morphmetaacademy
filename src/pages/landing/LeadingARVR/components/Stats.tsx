import React from 'react';

const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '50+', label: 'Global Clients' },
    { value: '15+', label: 'Industries' },
    { value: '27+', label: 'Years of AR/VR Expertise' },
];

const Stats: React.FC = () => (
    <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900/50 border border-white/10 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="py-8 px-4">
                            <p className="text-4xl font-bold text-white">{stat.value}</p>
                            <p className="text-gray-400 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Stats;
