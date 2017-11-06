import React from 'react';
import {shallow} from 'enzyme';
import CollapsableChecklist from '../CollapsableChecklist.react';

describe('CollapsableChecklist', () => {

    it('renders', () => {
        const values = []
        const options = [{label: '', value:'1'},
                        {label:'', value:'2', collapsable:true, children:[(<div></div>)]}]
        const component = shallow(
            <CollapsableChecklist
                id="test-tree-view"
                values={values}
                options={options}
            />
    );
        expect(component).to.be.ok;
    });
});
