import React, { useState } from 'react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
                        <p className="section-description">Escribinos por WhatsApp y un agente te responde en minutos. O dejanos
                            tus datos y te contactamos nosotros.</p>

                        <a href="https://wa.me/54911XXXXXXXX?text=Hola%20quiero%20info%20sobre%20Casa%20Plegable%2020FT%20(37m2).%20Estoy%20en%3A%20[CIUDAD]&utm_source=landing&utm_medium=web&utm_campaign=plegable20ft"
                            class="btn btn-primary btn-lg contact-whatsapp" target="_blank" rel="noopener">
                            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chateá con nuestro agente de ventas ahora
                        </a>

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

                        <p className="form-privacy">Al enviar, aceptás que te contactemos por WhatsApp o email.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
