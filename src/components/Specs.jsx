import React from 'react';
import { useChat } from '../context/ChatContext';

const Specs = () => {
    const { openChat } = useChat();
    return (
        <section className="specs" id="ficha-tecnica">
            <div className="container">
                <div className="specs-grid">
                    <div className="specs-content">
                        <h2 className="section-eyebrow">Especificaciones</h2>
                        <h3 className="section-title">Ficha técnica</h3>
                        <p className="section-description">Todos los detalles técnicos de la Casa Plegable 20FT.</p>

                        <a href="#" className="btn btn-primary specs-download" onClick={(e) => {
                            e.preventDefault();
                            openChat();
                        }}>
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7,10 12,15 17,10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Descargar ficha técnica (PDF)
                        </a>

                        <p className="specs-legal">* Especificaciones sujetas a confirmación en cotización.</p>
                    </div>

                    <div className="specs-table-wrapper">
                        <table className="specs-table">
                            <tbody>
                                <tr>
                                    <th>Superficie</th>
                                    <td><strong>37 m²</strong></td>
                                </tr>
                                <tr>
                                    <th>Dimensiones (expandida)</th>
                                    <td>~6300 × 5900 × 2480 mm</td>
                                </tr>
                                <tr>
                                    <th>Dimensiones (plegada)</th>
                                    <td>W2200 × L5900 × H2480 mm</td>
                                </tr>
                                <tr>
                                    <th>Peso</th>
                                    <td>~1600–2800 kg</td>
                                </tr>
                                <tr>
                                    <th>Aislamiento</th>
                                    <td>EPS / Lana de vidrio / MGO (según versión)</td>
                                </tr>
                                <tr>
                                    <th>Piso</th>
                                    <td>Fire-proof board + PVC</td>
                                </tr>
                                <tr>
                                    <th>Incluye</th>
                                    <td>Baño, cocina básica preinstalada, termotanque</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specs;
