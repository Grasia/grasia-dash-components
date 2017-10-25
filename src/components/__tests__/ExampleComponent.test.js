import React from 'react';
import {shallow} from 'enzyme';
import ExampleComponent from '../ExampleComponent.react';
import Card from '../Card.react';

describe('ExampleComponent', () => {

    it('renders', () => {
        const component = shallow(<ExampleComponent label="Test label"/>);
        expect(component).to.be.ok;
    });
});

describe('Card', () => {

    it('renders', () => {
        const component = shallow(<Card id="test-card"/>);
        expect(component).to.be.ok;
    });
});
