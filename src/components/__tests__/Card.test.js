import React from 'react';
import {shallow} from 'enzyme';
import Card from '../Card.react';

describe('Card', () => {

    it('renders', () => {
        const component = shallow(<Card id="test-card"/>);
        expect(component).to.be.ok;
    });
});
