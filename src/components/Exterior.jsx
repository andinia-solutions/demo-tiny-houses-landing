import React from 'react';
import { useChat } from '../context/ChatContext';

const Exterior = () => {
    const { openChat } = useChat();
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
                        <button onClick={openChat} className="btn btn-primary">
                            Hable con nuestro asistente virtual
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exterior;
