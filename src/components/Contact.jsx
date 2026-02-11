import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { openChat } = useChat();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const urlParams = new URLSearchParams(window.location.search);
        data.utm_source = urlParams.get('utm_source') || 'landing';
        data.utm_medium = urlParams.get('utm_medium') || 'web';
        data.utm_campaign = urlParams.get('utm_campaign') || 'plegable20ft';

        console.log('Form data:', data);

        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // In a real app, you would reset the form here or redirect
            setTimeout(() => {
                setIsSuccess(false);
                e.target.reset();
            }, 3000);
        }, 1500);
    };

    return (
        <section className="contact" id="contacto">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-content">
                        <h2 className="section-eyebrow">Contacto</h2>
                        <h3 className="section-title">¿Listo para dar el paso?</h3>
                        <p className="section-description">Hablá con nuestro asistente virtual y despejá tus dudas al instante. O dejanos
                            tus datos y te contactamos nosotros.</p>

                        <button
                            onClick={openChat}
                            className="btn btn-primary btn-lg contact-agent"
                        >
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Hablá con nuestro asistente virtual
                        </button>

                        <div className="contact-divider">
                            <span>o dejá tus datos</span>
                        </div>
                    </div>

                    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre completo</label>
                            <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="tel" id="telefono" name="telefono" required placeholder="+54 9 11 1234-5678" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="localidad">Localidad</label>
                                <input type="text" id="localidad" name="localidad" required placeholder="Ciudad, Provincia" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje (opcional)</label>
                            <textarea id="mensaje" name="mensaje" rows="3"
                                placeholder="Contanos sobre tu proyecto..."></textarea>
                        </div>

                        <div className="form-group form-checkbox">
                            <input type="checkbox" id="cotizacion" name="cotizacion" />
                            <label htmlFor="cotizacion">Quiero cotización con transporte incluido</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={isSubmitting} style={isSuccess ? { background: '#10B981' } : {}}>
                            {isSubmitting ? (
                                <>
                                    <svg className="btn-icon spinning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg> Enviando...
                                </>
                            ) : isSuccess ? (
                                <>
                                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" /></svg> ¡Enviado!
                                </>
                            ) : (
                                <>
                                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22,2 15,22 11,13 2,9 22,2" />
                                    </svg>
                                    Enviar consulta
                                </>
                            )}
                        </button>

                        <p className="form-privacy">Al enviar, aceptás que te contactemos por los medios proporcionados.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
