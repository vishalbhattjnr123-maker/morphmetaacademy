import React, { useState } from 'react';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import DiscoverAdventures from './components/DiscoverAdventures';
import UseCases from './components/UseCases';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import BlogPreview from './components/BlogPreview';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Modal from './components/Modal';
import MetaSeo from '../../../Components/MetaSEO';

const JobOriented = () => {

      const seo = {
   "title": "100% Job Oriented Courses in Chandigarh",
  "description": "India’s best AR, VR, XR & AI studio. boxfy creates immersive experiences using AR, VR, MR, Metaverse & AI for education, tourism & enterprise.",
  "keywords": "India’s best AR, VR, XR & AI studio. boxfy creates immersive experiences using AR, VR, MR, Metaverse & AI for education, tourism & enterprise.",
};

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-black font-sans landing">
            
      <MetaSeo meta={seo} />
            <Nav onOpenModal={openModal} />
            <main>
                <Hero onOpenModal={openModal} />
                <Stats />
                <Services />
                <UseCases />
                <Industries />
                {/* <DiscoverAdventures /> */}
                {/* <Features /> */}
                <WhyChooseUs />
                <TechStack />
                <BlogPreview />
                <Testimonials />
            </main>
            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default JobOriented;