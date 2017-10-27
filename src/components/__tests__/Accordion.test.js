import React from 'react';
import {shallow} from 'enzyme';
import TreeView from '../Accordion.react';

describe('TreeView', () => {

    it('renders', () => {
        const component = shallow(
            <TreeView id="test-tree-view" label="Test TreeView" collapsed={false}>
                Test
            </TreeView>
    );
        expect(component).to.be.ok;
    });
});
