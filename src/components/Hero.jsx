import React, { useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';

const Hero = () => {
    const videoRef = useRef(null);
    const { openChat } = useChat();

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.style.opacity = '0';
            video.style.transform = 'translateY(20px)';

            setTimeout(() => {
                video.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                video.style.opacity = '1';
                video.style.transform = 'translateY(0)';
            }, 200);
        }
    }, []);

    return (
        <section className="hero" id="inicio">
            <div className="container hero-grid">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-icon">🏡</span>
                        <span>Showroom en Neuquén (con cita previa) — Vení a verla</span>
                    </div>

                    <h1 className="hero-title">
                        TinyHouses plegable 20FT · 37 m²
                        <span className="hero-title-accent">Móvil, lista para vivir</span>
                    </h1>

                    <p className="hero-subtitle">
                        <span className="subtitle-item"><svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12,6 12,12 16,14" />
                        </svg> Montaje en 24–36 h</span>
                        <span className="subtitle-divider">·</span>
                        <span className="subtitle-item"><svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2">
                            <rect x="1" y="3" width="15" height="13" />
                            <polygon points="16,8 20,8 23,11 23,16 16,16 16,8" />
                            <circle cx="5.5" cy="18.5" r="2.5" />
                            <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg> Se instala en 1 día</span>
                        <span className="subtitle-divider">·</span>
                        <span className="subtitle-item"><svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2">
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg> Podés moverla cuando quieras</span>
                    </p>

                    <ul className="hero-features">
                        <li>
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22,4 12,14.01 9,11.01" />
                            </svg>
                            <span><strong>Instalación en 1 día</strong> — lista para vivir</span>
                        </li>
                        <li>
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22,4 12,14.01 9,11.01" />
                            </svg>
                            <span><strong>Fácil traslado a tu terreno</strong> — podés moverla cuando quieras</span>
                        </li>
                        <li>
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22,4 12,14.01 9,11.01" />
                            </svg>
                            <span><strong>Materiales pensados para durar:</strong> aislación y resistencia ante lluvia y
                                viento</span>
                        </li>
                    </ul>

                    <p className="hero-price">
                        <span className="price-label">Precio referencial:</span>
                        <span className="price-value">USD 32.000</span>
                        <span className="price-note">— puesta en la puerta de tu casa (no incluye platea o pilotes)</span>
                    </p>

                    <div className="hero-cta-group">
                        <button
                            onClick={openChat}
                            className="btn btn-primary btn-lg"
                        >
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Hablá con nuestro asistente virtual
                        </button>
                        <a href="#ficha-tecnica" className="btn btn-secondary btn-lg">
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14,2 14,8 20,8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10,9 9,9 8,9" />
                            </svg>
                            Descargar ficha técnica (PDF)
                        </a>
                    </div>

                    <div className="hero-trust">
                        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <p>Visitalo en nuestra sucursal: <strong>Parque Industrial Neuquén</strong> (con cita previa) — <a href="#ubicacion"
                            className="trust-link">Ver ubicación y horarios</a></p>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image-wrapper">
                        <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline poster="images/hero_cube.png">
                            <source
                                src="https://res.cloudinary.com/dl5qhxy7n/video/upload/v1770256775/3D_Tiny_house3_tr9gm2.mov"
                                type='video/quicktime' />
                            <source
                                src="https://res.cloudinary.com/dl5qhxy7n/video/upload/v1770210966/3D_Tiny_house3_yokxli.webm"
                                type="video/webm" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <div className="hero-image-reflection"></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Descubrí más</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
