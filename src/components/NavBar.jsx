import React from 'react';
import Logo from '../images/Logo-Oficial-sin-bordes.png';
import './Styles/App.css';
import { Link } from 'react-router-dom';




function NavBar () {
     return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
        <img className="my-0 mr-md-auto font-weight-normal ml-5" width="80" height="50" src={Logo} alt="Responsive image"/>
        <nav className="my-2 my-md-0 mr-md-5 pr-5">
        <Link className="text-decoration-none" to="/home"><a className="nav text-decoration-none" href="#">INICIO</a></Link>
        </nav>
      </div>
    );
}


export default NavBar;

