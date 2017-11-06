import React, {Component} from 'react';
import {Card, Accordion, CollapsableChecklist} from '../src';

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

        const cardWithImage = (
            <Card
                id="test-card"
                img="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"
                data={data}
                style={{ backgroundColor: '#004481', color:'white', border: '1px lightgrey solid' }}
                url="https://www.wikipedia.org/"
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam mi, vehicula mollis libero at, congue tristique purus. Vivamus rhoncus tincidunt luctus.'
            />
        );

        const applesDescription = (<div style={{marginLeft: '20px', marginBottom: '20px'}}>
                                        <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Apples.jpg/97px-Apples.jpg" alt="Apples.jpg" /></p>
                                        <p>This option selects the best and most fancy apples in the world</p>
                                    </div>);

        const orangesDescription = (<p style={{marginLeft: '15px'}}>There is no oranges available. Please come back in oranges season.</p>);

        const option1 = {'label': 'Melons', 'value': 'melons', 'disabled': false}
        const option2 = {'label': 'Apples', 'value': 'apples',
                        'children': applesDescription,
                        'collapseChildrenButton': true,
                        initiallyCollapsed: false
                        }
        const option3 = {'label': 'Oranges', 'value': 'oranges', 'disabled': true,
                        'children': orangesDescription,
                        'collapseChildrenButton': true,
                        initiallyCollapsed: true
                        }
        const option4 = {'label': 'wikipedia', 'value': 'wikipedia', disabled: false,
                        children: cardWithImage,
                        collapseChildrenButton: true
                        }

        return (
            <div>
                <h1>grasia-dash-components Demo</h1>
                <hr/>

                <h2>Collapsable Checklist</h2>
                <CollapsableChecklist
                    id="collapsable-checklist"
                    values={[]}
                    options={[option1, option2, option3, option4]}
                    labelStyle= {{'display': 'block'}}
                />

                <h2>Simple Accordion</h2>
                <Accordion
                    id="test-tree-view"
                    label="Test"
                >
                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                </Accordion>
                <hr/>

                <hr/>
                <h2>Accordion with Cards inside</h2>
                <Accordion
                    id="test-tree-view-2"
                    label="Cards"
                >
                    {cardWithImage}
                    {cardWithImage}
                    {cardWithImage}
                </Accordion>
                <hr/>

                <h2>Card with image</h2>
                {cardWithImage}
                <hr/>
            </div>
        );
    }
}

export default Demo;
