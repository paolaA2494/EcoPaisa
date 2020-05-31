import React, { Component } from 'react';
import Banner from './Banner';
import Neumomed from './Neumomed';
import Services from './Services';
import { data } from '../utils/mocks/data';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Banner data = {data.banner}/>
                <Neumomed /> 
                <Services data = {data.services}/>
            </div>
        );
    }
}

export default Content;