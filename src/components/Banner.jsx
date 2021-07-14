import React, { Component } from 'react';


class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

      <div id="myCarousel" className="carousel slide text-secondary" data-ride="carousel">
        <ol className="carousel-indicators">
          {this.props.data.map((item, index) => {
            return (
              <li key={`item-${index}`} data-target="#myCarousel" data-slide-to={item.slide}
               className={item.state}></li>

            )

          })}
        </ol>
        <div className="carousel-inner">
          {this.props.data.map((param, params) => {
            return (

              <div key={`param-${params}`} className={param.className}>
                <a href={param.ref} target="_blank" >
                  <img className="bd-placeholder-img" width="100%" height="100%" src={param.image} /></a>
              </div>

            )

          })}

        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only ">Next</span>
        </a>
      </div>

    );
  }
}

export default Banner;