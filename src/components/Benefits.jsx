import React from 'react';

const Benefits = () => {
    return (
        <section className="benefits" id="beneficios">
            <div className="container">
                <div className="benefits-grid">
                    <div className="benefits-content">
                        <h2 className="section-eyebrow">Ventajas</h2>
                        <h3 className="section-title">Por qué conviene</h3>
                        <p className="section-description">Una solución inteligente que combina practicidad, velocidad y
                            rentabilidad.</p>
                    </div>

                    <div className="benefits-list">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20" />
                                    <path
                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <div className="benefit-content">
                                <h4>Movilidad</h4>
                                <p>Mudala a otro terreno sin demoler nada. Ideal para proyectos escalables o cambios de
                                    ubicación.</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12,6 12,12 16,14" />
                                </svg>
                            </div>
                            <div className="benefit-content">
                                <h4>Velocidad</h4>
                                <p>Instalada y habitable en 24–36 horas. Sin meses de obra ni tiempos muertos.</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <div className="benefit-content">
                                <h4>Rentabilidad</h4>
                                <p>Perfecta para alquileres temporarios o renta continua. Recuperá tu inversión rápidamente.
                                </p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </div>
                            <div className="benefit-content">
                                <h4>Escalabilidad</h4>
                                <p>Podés comprar 1, 3 o 10 unidades e instalar un parque modular. Crecé a tu ritmo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
