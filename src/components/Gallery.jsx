import React from 'react';

const Gallery = ({ onOpen }) => {
    return (
        <section className="gallery" id="galeria">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-eyebrow">Interior</h2>
                    <h3 className="section-title">Cada metro, aprovechado al máximo</h3>
                    <p className="section-description">Espacios diseñados para vivir cómodo, con distribución inteligente y
                        terminaciones de calidad.</p>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item gallery-item-large" onClick={() => onOpen(0)}>
                        <img src="https://res.cloudinary.com/dl5qhxy7n/image/upload/v1770211796/interior_kitchen_ujqlvx.webp"
                            alt="Interior: cocina integrada de casa plegable 37m2" loading="lazy" />
                        <div className="gallery-overlay">
                            <span className="gallery-caption">Cocina integrada y distribución optimizada para 37 m²</span>
                            <button className="gallery-zoom" aria-label="Ver imagen completa">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    <line x1="11" y1="8" x2="11" y2="14" />
                                    <line x1="8" y1="11" x2="14" y2="11" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="gallery-item" onClick={() => onOpen(1)}>
                        <img src="https://res.cloudinary.com/dl5qhxy7n/image/upload/v1770211795/bathroom_gd4qo4.webp"
                            alt="Baño equipado con mampara y termotanque" loading="lazy" />
                        <div className="gallery-overlay">
                            <span className="gallery-caption">Baño equipado — mampara, bacha y termotanque</span>
                            <button className="gallery-zoom" aria-label="Ver imagen completa">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    <line x1="11" y1="8" x2="11" y2="14" />
                                    <line x1="8" y1="11" x2="14" y2="11" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="gallery-item" onClick={() => onOpen(2)}>
                        <img src="https://res.cloudinary.com/dl5qhxy7n/image/upload/v1770211794/other_one_for__use_gjfcgz.webp"
                            alt="Vista adicional del interior de la casa plegable" loading="lazy" />
                        <div className="gallery-overlay">
                            <span className="gallery-caption">Espacios amplios y luminosos</span>
                            <button className="gallery-zoom" aria-label="Ver imagen completa">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    <line x1="11" y1="8" x2="11" y2="14" />
                                    <line x1="8" y1="11" x2="14" y2="11" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
