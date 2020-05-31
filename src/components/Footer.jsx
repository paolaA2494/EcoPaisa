import React, { Component } from 'react';
import './Styles/Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    
    render() { 
        return (
        <div className="contain w-auto px-4 text-white">
        <div className="row align-items-center">
        <div className="content col-md-3 col-12 pt-3">
          <h2 className="display-5"><strong>Medellín</strong></h2>
          <h5 className=""><small>Calle 19A # 44-25 Local 206 Edificio Salud y Servicios.</small></h5 >
        </div>
        <div className="content col-md-3 col-12 pt-3">
          <h2 className="display-5"><strong>Rionegro</strong></h2>
          <h5 className=""><small>Carrera 55 A #35- 2027, piso 4 Cs 402-404  Torre 2, City Médica.</small></h5>
        </div>
        <div className="map col-md-6 col-12 pt-3 text-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.31487959094!2d-75.5769736847493!3d6.222146328318234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429ccb1d365cb%3A0xf0f5815194e96cbd!2sNEUMOMED!5e0!3m2!1ses-419!2sco!4v1590797656430!5m2!1ses-419!2sco" 
        width="647" height="307" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" alt="Responsive image"></iframe>
        </div>
        </div>
        <div className="row">
        <div className="content col-12 text-center mt-5 ">
        <h5><Link to="/home"><a><span className="name">Neumomed</span></a></Link> | Todos los derechos reservados 2020</h5>
        </div>
        </div>
      </div> 
          );
    }
}
 
export default Footer;