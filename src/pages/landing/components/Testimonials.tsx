import React, { useState } from 'react';

const testimonials = [
    { name: 'Jem Smith', title: 'Head of Sales at Tesla', quote: '"Boxfyco-Morph and cerevrum are examples of two such apps that offer an immense resource of educational VR content online."', avatar: 'https://picsum.photos/seed/avatar1/100' },
    { name: 'Adam White', title: 'CFO at Montee', quote: '"VR technology has completely changed the way we collaborate. Remote meetings feel more personal and productive than ever!"', avatar: 'https://picsum.photos/seed/avatar2/100' },
    { name: 'Cris Leann', title: 'Educator', quote: '"As an educator, I\'m amazed at how VR brings learning to life. Students are more engaged, and comprehension has soared!"', avatar: 'https://picsum.photos/seed/avatar3/100' },
    { name: 'Jessica H', title: 'Head of Sales at Tesla', quote: '"VR simulations have been instrumental in preparing our team for real-world scenarios. The hands-on experience is invaluable!"', avatar: 'https://picsum.photos/seed/avatar4/100' }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20 px-4 bg-white text-black">
            <div className="max-w-7xl mx-auto">
                 <div className="flex justify-between items-end mb-12">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                        <span className="block text-stroke">WHAT OUR</span>
                        <span className="block">CLIENTS SAYS</span>
                    </h2>
                     <div className="flex space-x-4">
                        <button onClick={prev} className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        </button>
                        <button onClick={next} className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-500 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                     </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <div className="flex items-center mb-4">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                                <div>
                                    <p className="text-xl font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg">{testimonial.quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;