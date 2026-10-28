import React from 'react';
import { ArrowIcon } from './icons';

const blogPosts = [
    { title: 'The Indian Game Dev Landscape: A Market Analysis', img: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Industry Insights', description: 'An in-depth look at India\'s ~3 billion dollar gaming market, projected to grow at 30% CAGR.' },
    { title: 'Technical Challenges & Opportunities in AR/VR', img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Development', description: 'Navigating device fragmentation, performance constraints, and network issues in emerging tech.' },
    { title: 'Strategic Roadmap for a Rising Game Studio', img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Business Strategy', description: 'From prototyping and co-development to leveraging AI and procedural content generation.' },
];

const BlogPreview: React.FC = () => (
    <section id="blog" className="py-20 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
             <div className="text-left mb-12">
                 <h2 className="text-5xl md:text-5xl font-black tracking-tighter">
                    <span className="block text-stroke">OUR LATEST</span>
                    <span className="block">BLOG FOR YOU</span>
                </h2>
                <p className="max-w-3xl text-gray-600 mt-4 text-lg">We write about the use of virtual & augmented reality for non-gaming applications, market trends, and our strategic insights. Feel free to browse our articles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold tracking-wider px-3 py-1 rounded-full mb-3">{post.category}</span>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 leading-tight">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                             <a href="#" className="font-semibold text-violet-600 hover:text-violet-800 flex items-center space-x-2 transition-colors group/link">
                                <span>Read More</span>
                                <ArrowIcon className="w-5 h-5 transition-transform group-hover/link:translate-x-1"/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default BlogPreview;