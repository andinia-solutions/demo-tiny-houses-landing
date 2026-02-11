import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const videoRef = useRef(null);

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
                        Casa plegable 20FT · 37 m²
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
                        <span className="price-value">USD 29.900</span>
                        <span className="price-note">— puesta en la puerta de tu casa (no incluye platea o pilotes)</span>
                    </p>

                    <div className="hero-cta-group">
                        <a href="https://wa.me/54911XXXXXXXX?text=Hola%20quiero%20info%20sobre%20Casa%20Plegable%2020FT%20(37m2).%20Estoy%20en%3A%20[CIUDAD]&utm_source=landing&utm_medium=web&utm_campaign=plegable20ft"
                            className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chateá con nuestro agente de ventas ahora
                        </a>
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
