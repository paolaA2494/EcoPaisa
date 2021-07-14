import React, { Component } from 'react';
import Banner from './Banner';
import Hay from './Hay';
import Values from './Values';
import { data } from '../utils/mocks/data';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Banner data = {data.banner}/>
                <Hay /> 
                <Values data = {data.values}/>
            </div>
        );
    }
}

export default Home;