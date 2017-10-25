import React, {Component} from 'react';
import {Card} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }


    render() {

        const data = [
            {label: 'Contributors', data: '2 000 000'},
            {label: 'Editions', data: '90 000 000'},
            {label: 'Pages', data: ' 200 000'}
        ];

        return (
            <div>
                <h1>grasia-dash-components Demo</h1>

                <hr/>
                <h2>Card with image</h2>
                <Card
                    id="test-card"
                    img="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"
                    data={data}
                    style={{ backgroundColor: '#004481', color:'white', border: '1px lightgrey solid' }}
                    url="https://www.wikipedia.org/"
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam mi, vehicula mollis libero at, congue tristique purus. Vivamus rhoncus tincidunt luctus.'
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
