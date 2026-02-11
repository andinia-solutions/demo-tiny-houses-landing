import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import Exterior from './components/Exterior';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Specs from './components/Specs';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Lightbox from './components/Lightbox';

import './index.css';

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dl5qhxy7n/image/upload/v1770211796/interior_kitchen_ujqlvx.webp",
        alt: "Interior: cocina integrada de casa plegable 37m2",
        caption: "Cocina integrada y distribución optimizada para 37 m²"
    },
    {
        src: "https://res.cloudinary.com/dl5qhxy7n/image/upload/v1770211795/bathroom_gd4qo4.webp",
        alt: "Baño equipado con mampara y termotanque",
        caption: "Baño equipado — mampara, bacha y termotanque"
    },
    {
        src: "https://res.cloudinary.com/dl5qhxy7n/image/upload/v1770211794/other_one_for__use_gjfcgz.webp",
        alt: "Vista adicional del interior de la casa plegable",
        caption: "Espacios amplios y luminosos"
    }
];

function App() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = useCallback((index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, []);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    // Scroll Animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const animateOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatableElements = document.querySelectorAll(
            '.feature-card, .gallery-item, .benefit-item, .testimonial-card, .faq-item'
        );

        animatableElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.5s ease ${index % 3 * 0.1}s, transform 0.5s ease ${index % 3 * 0.1}s`;
            animateOnScroll.observe(el);
        });

        // Add the animate-in styles dynamically if not in CSS
        // But better to check if it's already in index.css?
        // It was added by script in original code.
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            animateOnScroll.disconnect();
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return (
        <>
            <Hero />
            <Exterior />
            <Features />
            <Gallery onOpen={openLightbox} />
            <Benefits />
            <Specs />
            <Testimonials />
            <Comparison />
            <Faq />
            <Contact />
            <Footer />
            <ChatAssistant />

            <Lightbox
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                currentImage={galleryImages[currentImageIndex]}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}

export default App;
