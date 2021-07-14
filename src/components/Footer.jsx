import React, { Component } from 'react';
import './Styles/Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    
    render() { 
        return (
        <div className="contain w-auto px-4 text-white">
        <div className="row align-items-center">
        <div className="content col-12 col-sm-12 col-md-6 col-12 pt-3">
          <h2 className="display-5"><strong>Medellín</strong></h2>
          <h5 className=""><small>Calle 120 #52-86 Barrio el Playón.</small></h5 >
          <h5 className=""><small>Tel:(+57) 3166650717 ó(+57) 3126507145</small></h5 >
          <h5 className=""><small>e-mail: ecopaisasas@gmail.com.</small></h5 >
        </div>
        <div className="map col-12 col-sm-12 col-md-12 col-lg-6 pt-3 text-center">
        <iframe className="map-adress" title="map-adress" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6813666399166!2d-75.5585449852304!3d6.305528395436453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMTkuOSJOIDc1wrAzMycyMi45Ilc!5e0!3m2!1sen!2sco!4v1626290754166!5m2!1sen!2sco"
         width="647" height="307" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" alt="Responsive image"></iframe>
        </div>
        </div>
        <div className="row">
        <div className="content col-12 text-center mt-5 ">
        <h5><Link to="/home"><span className="name">EcoPaisa</span></Link> | Todos los derechos reservados 2021</h5>
        </div>
        </div>
      </div> 
          );
    }
}
 
export default Footer;