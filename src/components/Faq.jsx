import React from 'react';

const Faq = () => {
    return (
        <section className="faq" id="preguntas">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-eyebrow">FAQ</h2>
                    <h3 className="section-title">Preguntas frecuentes</h3>
                    <p className="section-description">Resolvemos las dudas más comunes sobre la Casa Plegable 20FT.</p>
                </div>

                <div className="faq-list">
                    <details className="faq-item">
                        <summary className="faq-question">
                            <span>¿Cuánto tarda la instalación?</span>
                            <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6,9 12,15 18,9" />
                            </svg>
                        </summary>
                        <div className="faq-answer">
                            <p>1–1.5 días (en condiciones normales de terreno). En instalaciones complejas puede requerir
                                más tiempo, pero siempre trabajamos para minimizar los plazos.</p>
                        </div>
                    </details>

                    <details className="faq-item">
                        <summary className="faq-question">
                            <span>¿Hace falta obra?</span>
                            <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6,9 12,15 18,9" />
                            </svg>
                        </summary>
                        <div className="faq-answer">
                            <p>Recomendamos platea o pilotes para una base estable. Nosotros enviamos equipo de instalación
                                para montar y nivelar. Si lo preferís, podemos coordinar la mano de obra completa.</p>
                        </div>
                    </details>

                    <details className="faq-item">
                        <summary className="faq-question">
                            <span>¿Cómo resiste la lluvia y el viento a largo plazo?</span>
                            <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6,9 12,15 18,9" />
                            </svg>
                        </summary>
                        <div className="faq-answer">
                            <p>La estructura y el revestimiento en PVC están diseñados para resistir lluvia y viento
                                ordinario; el panel sándwich aporta aislación térmica excelente. Para datos de certificación
                                y cálculo de cargas, consultá nuestra ficha técnica.</p>
                        </div>
                    </details>

                    <details className="faq-item">
                        <summary className="faq-question">
                            <span>¿Necesito permiso municipal?</span>
                            <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6,9 12,15 18,9" />
                            </svg>
                        </summary>
                        <div className="faq-answer">
                            <p>Depende del municipio. En muchos casos se instala sobre platea sin obra pesada; recomendamos
                                verificar normativa local — podemos asesorarte en el proceso.</p>
                        </div>
                    </details>

                    <details className="faq-item">
                        <summary className="faq-question">
                            <span>¿Se puede personalizar?</span>
                            <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6,9 12,15 18,9" />
                            </svg>
                        </summary>
                        <div className="faq-answer">
                            <p>Sí: color de panel, acabados interiores y opcionales como cerradura digital o doble
                                acristalamiento mejorado. Consultanos para conocer todas las opciones.</p>
                        </div>
                    </details>

                    <details className="faq-item">
                        <summary className="faq-question">
                            <span>¿Precio y transporte?</span>
                            <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6,9 12,15 18,9" />
                            </svg>
                        </summary>
                        <div className="faq-answer">
                            <p>Precio referencia: <strong>USD 29.900 puesta en la puerta de tu casa</strong> (no incluye
                                platea o pilotes). La cotización final incluye transporte y aranceles según ubicación.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;
