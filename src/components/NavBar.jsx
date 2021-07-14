import React from 'react';
import Logo from '../images/EcoPaisa_Logo.png';
import './Styles/App.css';
import { Link } from 'react-router-dom';




function NavBar() {
  return (
    <div className="d-flex justify-content-between flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <div className="d-flex  align-items-center">
        <img className="my-0 mr-md-auto font-weight-normal" width="180" height="180" src={Logo} alt="..."></img>
        <span className="nav">EcoPaisa</span>
      </div>
      <nav className="my-2 my-md-0 mr-md-3 d-flex">
        <Link className="nav p-2" to="/home">Inicio</Link>
        <Link className="nav p-2" to="/home">Misión y Visión</Link>
        <Link className="nav p-2" to="/home">Portafolio</Link>
      </nav>
    </div>
  );
}


export default NavBar;

