import React, { Component } from 'react';
import Area from './Area'
import {store} from '../store/createStore';

class Container extends Component {
    render() {
        return(
            <div id="container">
                <Area store={store} i='0' color='#FF7360'></Area>
                <Area store={store} i='1' color='#FFF0C6'></Area>
                <Area store={store} i='2' color='#FFF9FA'></Area>
                <Area store={store} i='3' color='#53E5ED'></Area>
            </div>
        )
    }
}

export default Container;