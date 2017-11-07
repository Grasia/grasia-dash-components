import React from 'react';
import {shallow} from 'enzyme';
import CollapsableChecklist from '../CollapsableChecklist.react';

describe('CollapsableChecklist', () => {

    it('renders', () => {
        const values = []
        const options = [
                        {label: '', value:'1'},
                        {label:'', value:'2', children:[(<div></div>)]}
                    ]
        const component = shallow(
            <CollapsableChecklist
                id="test-tree-view"
                values={values}
                children={options}
            />
    );
        expect(component).to.be.ok;
    });
});
