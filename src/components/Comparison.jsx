import React from 'react';

const Comparison = () => {
    return (
        <section className="comparison" id="comparativa">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-eyebrow">Comparativa</h2>
                    <h3 className="section-title">Casa plegable vs. obra tradicional</h3>
                    <p className="section-description">Mirá las diferencias clave y por qué cada vez más gente elige la solución
                        modular.</p>
                </div>

                <div className="comparison-table-wrapper">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Característica</th>
                                <th className="highlight-col">Casa Plegable 20FT</th>
                                <th>Obra Tradicional</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tiempo de instalación</td>
                                <td className="highlight-col"><strong>24–36 horas</strong></td>
                                <td>6–12 meses</td>
                            </tr>
                            <tr>
                                <td>Costo inicial</td>
                                <td className="highlight-col"><strong>Desde USD 35.000</strong></td>
                                <td>Variable, generalmente mayor</td>
                            </tr>
                            <tr>
                                <td>Movilidad</td>
                                <td className="highlight-col"><strong>100% transportable</strong></td>
                                <td>Fija al terreno</td>
                            </tr>
                            <tr>
                                <td>Permisos</td>
                                <td className="highlight-col"><strong>Simplificados</strong></td>
                                <td>Trámites extensos</td>
                            </tr>
                            <tr>
                                <td>Equipamiento incluido</td>
                                <td className="highlight-col"><strong>Sí, lista para vivir</strong></td>
                                <td>Adicional / separado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
