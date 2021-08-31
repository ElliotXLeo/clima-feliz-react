import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({ resultado }) => {

  const { name, main } = resultado;

  const temperaturaReferencia = 273.15;

  if (!name) {
    return null;
  }

  return (
    <section className="card-panel white cols12">
      <div className="black-text text-center">
        <h2 className="card-panel__nombre">{name}</h2>
        <h3 className="card-panel__temperatura">Temperatura: {parseFloat(main.temp - temperaturaReferencia).toFixed(2)} <span>&#x2103;</span></h3>
        <div>Temperatura máxima: {parseFloat(main.temp_max - temperaturaReferencia).toFixed(2)} <span>&#x2103;</span></div>
        <div>Temperatura mínima: {parseFloat(main.temp_min - temperaturaReferencia).toFixed(2)} <span>&#x2103;</span></div>
        <div>Presión: {main.pressure} mb</div>
        <div>Humedad: {main.humidity} %</div>
      </div>
    </section>
  );
}

Clima.propTypes = {
  resultado: PropTypes.object.isRequired
}

export default Clima;