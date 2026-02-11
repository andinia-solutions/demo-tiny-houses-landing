import React from 'react';

const Features = () => {
    return (
        <section className="features" id="caracteristicas">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-eyebrow">Características</h2>
                    <h3 className="section-title">Todo incluido, listo para habitar</h3>
                    <p className="section-description">Cada casa viene equipada con materiales de primera calidad y
                        terminaciones pensadas para durar.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M3 9h18" />
                                <path d="M9 21V9" />
                            </svg>
                        </div>
                        <h4 className="feature-card-title">Panel sándwich (EPS / MGO)</h4>
                        <p className="feature-card-text">Aislamiento térmico y acústico, acabado limpio y resistente.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 6l6 6-6 6" />
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                            </svg>
                        </div>
                        <h4 className="feature-card-title">Baño listo + termotanque</h4>
                        <p className="feature-card-text">Ducha con mampara, instalación eléctrica y sanitaria pre-armada.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="11" width="18" height="10" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <h4 className="feature-card-title">Aberturas de PVC y puerta de seguridad</h4>
                        <p className="feature-card-text">Mejor aislación y apertura con cerradura digital (opcional).</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path
                                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        <h4 className="feature-card-title">Cocina básica preinstalada</h4>
                        <p className="feature-card-text">Mesada, bacha y espacio para electrodomésticos listos para conectar.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                        <h4 className="feature-card-title">Instalación eléctrica completa</h4>
                        <p className="feature-card-text">Cableado, tomacorrientes y tablero listos para conectar a la red.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h4 className="feature-card-title">Estructura resistente</h4>
                        <p className="feature-card-text">Acero galvanizado preparado para lluvia, viento y traslados.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
