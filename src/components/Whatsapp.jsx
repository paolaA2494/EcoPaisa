import React, { Component } from 'react';
import './Styles/Whatsapp.css';


class Whatsapp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
          <a href="https://api.whatsapp.com/send?phone=573126507145&text=Hola%20EcoPaisa%2C%20quiero%20conocer%20sus%20servicios." className="float" target="_blank">
          <i className="fa fa-whatsapp my-float"></i>
        </a>
      </>
    );
  }
}

export default Whatsapp;










