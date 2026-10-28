import React from 'react';
import { ArrowIcon } from './icons';

const blogPosts = [
    { title: 'The Indian Game Dev Landscape: A Market Analysis', img: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Industry Insights', featured: true, description: 'An in-depth look at India\'s ~3 billion dollar gaming market, projected to grow at 30% CAGR.' },
    { title: 'Technical Challenges & Opportunities in AR/VR', img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Development', description: 'Navigating device fragmentation, performance constraints, and network issues in emerging tech.' },
    { title: 'Strategic Roadmap for a Rising Game Studio', img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Business Strategy', description: 'From prototyping and co-development to leveraging AI and procedural content generation.' },
];

const FeaturedPost = ({ post }) => (
     <div className="relative rounded-2xl overflow-hidden group shadow-lg h-full min-h-[500px] lg:col-span-1 lg:row-span-2">
        <img src={post.img} alt={post.title} className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
             <span className="inline-block bg-violet-500/20 text-violet-300 text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-3">{post.category}</span>
            <h3 className="text-white text-3xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20">{post.description}</p>
            <a href="#" className="group/link font-semibold text-white hover:text-violet-400 flex items-center space-x-2 transition-colors">
                <span>Read More</span>
                <ArrowIcon className="w-5 h-5 transition-transform group-hover/link:translate-x-1"/>
            </a>
        </div>
    </div>
);

const StandardPost = ({ post }) => (
    <div className="relative rounded-2xl overflow-hidden group shadow-lg h-full min-h-[250px] md:h-auto">
        <img src={post.img} alt={post.title} className="w-full h-[250px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="inline-block bg-violet-500/20 text-violet-300 text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-2">{post.category}</span>
            <h3 className="text-white text-xl font-bold mb-1">{post.title}</h3>
            <p className="text-gray-300 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20">{post.description}</p>
            <a href="#" className="group/link font-semibold text-white hover:text-violet-400 flex items-center space-x-2 transition-colors text-sm">
                <span>Read More</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-1"/>
            </a>
        </div>
    </div>
);


const BlogPreview: React.FC = () => {
    const featuredPost = blogPosts.find(p => p.featured);
    const standardPosts = blogPosts.filter(p => !p.featured);

    return (
    <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
             <div className="text-left mb-12">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                    <span className="block text-stroke-light">OUR LATEST</span>
                    <span className="block">BLOG FOR YOU</span>
                </h2>
                <p className="max-w-3xl text-gray-400 mt-4 text-lg">We write about the use of virtual & augmented reality for non-gaming applications, market trends, and our strategic insights. Feel free to browse our articles.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPost && <FeaturedPost post={featuredPost} />}
                <div className="flex flex-col gap-8">
                    {standardPosts.map((post, index) => (
                        <StandardPost key={index} post={post} />
                    ))}
                </div>
            </div>
        </div>
    </section>
)};

export default BlogPreview;