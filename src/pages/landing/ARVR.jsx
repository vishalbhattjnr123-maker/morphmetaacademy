import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import WhyVR from './components/WhyVR';
import TechStack from './components/TechStack';
import DiscoverAdventures from './components/DiscoverAdventures';
import BlogPreview from './components/BlogPreview';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Modal from './components/Modal';

const ARVRPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-black font-sans">
            <Nav onOpenModal={openModal} />
            <main>
                <Hero onOpenModal={openModal} />
                <Services />
                <Features />
                <WhyVR onOpenModal={openModal} />
                <TechStack />
                <DiscoverAdventures />
                <BlogPreview />
                <Testimonials />
            </main>
            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default ARVRPage;