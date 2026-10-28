import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './icons';

interface NavProps {
    onOpenModal: () => void;
}

const Nav: React.FC<NavProps> = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                       <img src="/images/boxfy-morph-logo.png" alt="Morph Logo" className="h-8 w-64" />
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button
                            onClick={onOpenModal}
                            className="hidden sm:inline-block border-2 border-white/50 text-white font-bold py-2 px-5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Get a Quote
                        </button>
                         <a 
                            href="https://wa.me/919815489999?text=Hello!%20I'm%20interested%20in%20your%20AR/VR%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white font-bold rounded-full flex items-center hover:bg-green-600 transition-all transform hover:scale-105 p-3 sm:py-2 sm:px-5 sm:space-x-2">
                            <WhatsAppIcon className="w-5 h-5" />
                            <span className="hidden sm:inline">Connect on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;