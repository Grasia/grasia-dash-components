import React from 'react';
import {shallow} from 'enzyme';
import Accordion from '../Accordion.react';

describe('Accordion', () => {

    it('renders', () => {
        const component = shallow(
            <Accordion id="test-tree-view" label="Test TreeView" collapsed={false}>
                Test
            </Accordion>
    );
        expect(component).to.be.ok;
    });
});
