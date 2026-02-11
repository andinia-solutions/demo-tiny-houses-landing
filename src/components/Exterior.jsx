import React from 'react';

const Exterior = () => {
    return (
        <section className="exterior-block" id="exterior">
            <div className="container">
                <div className="exterior-grid">
                    <div className="exterior-image-wrapper">
                        <img src="https://res.cloudinary.com/dl5qhxy7n/image/upload/v1770211795/ext_front_rv80zf.webp"
                            alt="Fachada exterior casa plegable 20FT desplegada" className="exterior-image" loading="lazy" />
                        <div className="exterior-caption">
                            <span>Tiny House Plegable de 37 m² — versión 20FT (villa)</span>
                        </div>
                    </div>
                    <div className="exterior-content">
                        <div className="exterior-tagline">
                            <h2 className="section-eyebrow">Así funciona</h2>
                            <p className="exterior-hook">Llega plegada.<br /><span className="highlight">Se
                                despliega.</span><br />Vivís.</p>
                        </div>
                        <p className="exterior-description">
                            Tu casa llega en un contenedor, compacta y lista para desplegar. En menos de 36 horas tenés 37
                            m² habitables con todo lo necesario para empezar a vivir.
                        </p>
                        <a href="https://wa.me/54911XXXXXXXX?text=Hola%20quiero%20info%20sobre%20Casa%20Plegable%2020FT%20(37m2).%20Estoy%20en%3A%20[CIUDAD]&utm_source=landing&utm_medium=web&utm_campaign=plegable20ft"
                            className="btn btn-primary" target="_blank" rel="noopener">
                            Quiero saber más
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exterior;
