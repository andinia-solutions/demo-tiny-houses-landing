import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonios">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-eyebrow">Testimonios</h2>
                    <h3 className="section-title">Casos de éxito</h3>
                    <p className="section-description">Conocé las experiencias de quienes ya eligieron su casa plegable.</p>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <svg className="testimonial-quote" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p>"Compré 3 unidades para alquilar en un terreno familiar. El retorno fue más rápido de lo que
                                esperaba y la instalación fue impecable."</p>
                        </div>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                <span>MG</span>
                            </div>
                            <div className="testimonial-info">
                                <strong>Martín G.</strong>
                                <span>Inversor — Neuquén</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <svg className="testimonial-quote" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p>"No podía pagar alquiler y construir al mismo tiempo. Con la casa plegable me mudé sin gastos
                                simultáneos. Fue mi solución perfecta."</p>
                        </div>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                <span>LC</span>
                            </div>
                            <div className="testimonial-info">
                                <strong>Laura C.</strong>
                                <span>Propietaria — San Martín de los Andes</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card testimonial-card-cta">
                        <div className="testimonial-content">
                            <h4>¿Tenés un proyecto similar?</h4>
                            <p>Contanos tu caso y te asesoramos sin compromiso.</p>
                            <a href="https://wa.me/54911XXXXXXXX?text=Hola%20quiero%20info%20sobre%20Casa%20Plegable%2020FT%20(37m2).%20Estoy%20en%3A%20[CIUDAD]&utm_source=landing&utm_medium=web&utm_campaign=plegable20ft"
                                class="btn btn-primary" target="_blank" rel="noopener">
                                Enviar mi consulta
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
