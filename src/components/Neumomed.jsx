import React, { Component } from 'react';
import Imagen1 from '../images/_MG_5091.JPG';
import './Styles/App.css';


class Neumomed extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <div className="jumbotron jumbotron-fluid h-150 w-auto p-4 p-md-5 text-white bg-dark">
        <div className="row align-items-center">
        <div className="content col-md-6 col-12 px-0 pt-3">
          <hr className="line"/>
          <p className="display-7 my-3"><strong>NEUMOMED</strong></p>
          <h1 className="display-4">Neumomed IPS</h1>
          <h5 className="lead mb-0">ofrece una atención integral a pacientes con enfermedades respiratorias y trastornos del sueño.</h5>
        </div>
        <div className="col-md-6 col-12 px-0 pt-3">
        <img className="rounded-pill img-fluid mx-auto d-block font-weight-normal ml-5" width="540" height="370" src={Imagen1} alt="Responsive image"/>
        </div>
        </div>
      </div> 
      );
    }
}
 
export default Neumomed;