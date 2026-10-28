import React, { useState, useEffect } from 'react';
import { WhatsAppIcon, MenuIcon, CloseIcon } from './icons';

interface NavProps {
    onOpenModal: () => void;
}

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Industries', href: '#industries' },
    { name: 'Blog', href: '#blog' },
];

const Nav: React.FC<NavProps> = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <a href="#" className="flex-shrink-0" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                                <img src="/images/boxfy-morph-logo.png" alt="Morph Logo" className="h-8 w-64" />
                 
                        </a>
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-300 hover:text-white transition-colors duration-300">
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center space-x-4">
                            <button
                                onClick={onOpenModal}
                                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-2 px-5 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                            >
                                Get a Quote
                            </button>
                            <a 
                                href="https://wa.me/919815489999?text=Hello!%20I'm%20interested%20in%20your%20AR/VR%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                                aria-label="Connect on WhatsApp"
                            >
                                <WhatsAppIcon className="w-6 h-6" />
                            </a>
                        </div>

                        {/* Mobile Menu Button & CTAs */}
                        <div className="md:hidden flex items-center space-x-2">
                            <button
                                onClick={onOpenModal}
                                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Get a Quote
                            </button>
                             <a 
                                href="https://wa.me/919815489999?text=Hello!%20I'm%20interested%20in%20your%20AR/VR%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600 transition-all transform hover:scale-105"
                                aria-label="Connect on WhatsApp"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                            </a>
                            <button onClick={() => setIsMenuOpen(true)} className="text-white p-1" aria-label="Open menu">
                                <MenuIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-lg" onClick={() => setIsMenuOpen(false)}></div>
                <div className="relative bg-black w-80 h-full float-right p-8 flex flex-col">
                    <button onClick={() => setIsMenuOpen(false)} className="self-end mb-8 text-white" aria-label="Close menu">
                        <CloseIcon className="w-7 h-7" />
                    </button>
                    <nav className="flex-grow flex flex-col space-y-6 text-xl">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-300 hover:text-white">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Nav;