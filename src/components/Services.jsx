import React, { Component } from 'react';
import './Styles/Services.css';

class Services extends Component {

    
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return ( 
        <div className="container">
            <div className="row mt-5 pt-5 pb-5 mb-5">
            {this.props.data.map((item, index) => {
            return (
            <div key={`${index.id}`} className="col-md-4">
              <hr className="line-services"/>
              <h2 className="name-service pt-5 pb-3 pl-3">{item.name}</h2>
              <ul className="list font-weight-normal pr-3">
                  <li className="pb-1">{item.item1}</li>
                  <li className="pb-1">{item.item2}</li>
                  <li className="pb-1">{item.item3}</li>
              </ul>
            </div>
             )

            })}
          </div>
        </div>
         );
    }
}
 
export default Services;