import React, { Component } from 'react';
import Imagen1 from '../images/imagen1.jpeg';
import './Styles/App.css';


class Neumomed extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <div className="jumbotron jumbotron-fluid h-150 w-auto p-4 p-md-5">
        <div className="row align-items-center">
          <div className="content col-md-6 col-12 px-0 pt-3">
            <hr className="line" />
            <p className="display-7 my-3 text-secondary"><strong>ECOPAISA</strong></p>
            <h1 className="display-4 text-success">¿Quiénes somos?</h1>
            <h5 className="lead mb-0  text-secondary">Bienvenidos a EcoPaisa. Somos una empresa 100% Colombiana; nace como una empresa familiar con la
            intención de darle un segundo uso y aprovechamiento a los materiales siguiendo los lineamientos propuestos
            por los objetivos de desarrollo Sostenible (ODS), con el fin de aportar al manejo adecuado de los residuos
            sólidos en la ciudad de Medellín, es construida por paisas para el pueblo antioqueño, ha crecido con la
            intensión de prestar servicios ambientales a las comunidades y a empresas en pro de la construcción de una
            ciudad sostenible.</h5>
          </div>
          <div className="col-md-6 col-12 px-0 pt-3">
            <img className="rounded-pill img-fluid mx-auto d-block font-weight-normal ml-5" width="540" height="370" src={Imagen1} alt="Responsive image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Neumomed;