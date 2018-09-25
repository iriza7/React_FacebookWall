//Core
import React, {Component} from 'react';

//Instruments
import Styles from './styles.m.css';

import avatar from 'theme/assets/lisa';

export default class StatusBar extends Component {
    render () {
        return  (    
            <section className= {Styles.statusBar}>
                <button>
                    <img src = {avatar} />
                    <span>Lida</span>
                    &nbsp;
                    <span>Simm</span>
                </button>
            </section>
        
       );
    }
    
}