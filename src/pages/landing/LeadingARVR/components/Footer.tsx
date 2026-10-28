import React from 'react';

const SocialIcon: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const usefulLinks = [
    { name: 'About Us', href: 'https://boxfy.co/about-us' },
    { name: 'Services', href: 'https://boxfy.co' },
    { name: 'Blog', href: 'https://boxfy.co/blogs' },
    { name: 'Contact', href: 'https://boxfy.co/contact-us' },
];

const Footer: React.FC = () => (
    <footer className="bg-black border-t border-white/10 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-5">
            
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Pioneering the Future of Immersive Experiences
                </h2>
                <p className="max-w-2xl mx-auto mb-8 text-gray-400">
                    Join our newsletter to stay updated with the latest in AR/VR technology, market trends, and game design from boxfy.
                </p>
                <form className="max-w-lg mx-auto flex items-center mb-12">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full bg-white/5 border border-white/20 rounded-l-full py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button 
                        type="submit" 
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-8 rounded-r-full hover:from-purple-700 hover:to-blue-600 transition-all"
                    >
                        <span>Subscribe</span>
                    </button>
                </form>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-12 border-t border-white/10 pt-12">
                <div>
                       <img src="/images/boxfy-morph-logo.png" alt="Morph Logo" className="h-8 w-64" />
                 
                    <p>Building the Future of Reality. We are India’s leading AR, VR, XR, and AI innovation studio, crafting powerful and interactive digital experiences.</p>
                </div>
                <div>
                     <h3 className="font-bold text-white text-lg mb-4">Useful Links</h3>
                     <ul className="space-y-2">
                        {usefulLinks.map(link => (
                            <li key={link.name}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{link.name}</a>
                            </li>
                        ))}
                     </ul>
                </div>
                 <div>
                    <h3 className="font-bold text-white text-lg mb-4">Get in Touch</h3>
                    <div className="space-y-2">
                        <p>📍 Location: SCO 64-65, Floor 4th, Sector 34A, Chandigarh, India</p>
                        <p>📞 Call: <a href="tel:+919115511252" className="hover:text-white">+91 91155 11252</a></p>
                        <p>📧 Email: <a href="mailto:info@boxfy.co" className="hover:text-white">info@boxfy.co</a></p>
                        <p>🌐 Website: <a href="https://www.boxfy.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">www.boxfy.co</a></p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Socials & Copyright */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* <div className="flex space-x-6">
                    <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></SocialIcon>
                    <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg></SocialIcon>
                    <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1.38 0-1.5.62-1.5 1.4V12h3l-.5 3h-2.5v6.8A10.01 10.01 0 0022 12z" /></svg></SocialIcon>
                </div> */}
                 <p className="text-sm text-gray-500 order-first sm:order-last">
                    &copy; {new Date().getFullYear()} boxfy. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;