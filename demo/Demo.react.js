import React, {Component} from 'react';
import {Card, Accordion, Tabs} from '../src';
import '!style!css!./demo.css'; // eslint-disable-line

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

        const tabs = [
          {'label': 'Control', 'icon': 'https://images-plotly.imgix.net/static/marketing/dash/direct-control-icon.png?auto=compress&auto=format', 'value': '1'},
          {'label': 'Symbols', 'icon': 'https://images-plotly.imgix.net/static/marketing/dash/composable-icon.png?auto=compress&auto=format', 'value': '2'},
          {'label': 'Other options', 'value': '3'},
          {'icon': 'https://cdn.rawgit.com/plotly/dash-docs/b1178b4e/images/dash-logo-stripe.svg', 'value': '4'}
        ];

        const tabStyle = {
          'borderRight': 'thin lightgrey solid',
          'textAlign': 'left',
          'backgroundColor': '#072146'
        }

        const tabsStyle = {
          'backgroundColor': '#004481',
          'color': 'white',
          'margin': '5px'
        }

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

        return (
            <div>
                <h1>grasia-dash-components Demo</h1>

                <hr/>
                <h2>Simple Accordion</h2>
                <Accordion
                    id="test-tree-view"
                    label="Test"
                    accordionFixedWidth="200"
                >
                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                </Accordion>
                <Accordion
                    id="test-tree-view2"
                    label="Test2"
                    itemClassName='styledAccordion_item'
                    childrenClassName='styledAccordion_list'
                    className='styledAccordion'
                >
                    <p>Option 4</p>
                    <p>Option 5</p>
                    <p>Option 6</p>
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

                <h2>Horizontal Tabs</h2>
                <Tabs
                    id='horizontal-tabs'
                    value='2'
                    vertical={false}
                    tabs={tabs}
                    style={tabStyle}
                    tabsStyle={tabsStyle}
                    selectedTabStyle={{backgroundColor: 'pink'}}
                />

            <h2>Vertical Tabs</h2>
                <Tabs
                    id='vertical-tabs'
                    value='2'
                    vertical={true}
                    tabs={tabs}
                    style={tabStyle}
                    tabsStyle={tabsStyle}
                    selectedTabStyle={{backgroundColor: 'pink'}}
                />

            </div>
        );
    }
}

export default Demo;
