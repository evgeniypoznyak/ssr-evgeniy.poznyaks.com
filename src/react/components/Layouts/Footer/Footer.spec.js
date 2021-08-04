import React from 'react';
import {mount, shallow} from 'enzyme';
import Footer from './Footer';

let wrapper;
let shallowWrapper;

beforeAll(() => {
    wrapper = mount(<Footer/>);
    shallowWrapper = shallow(<Footer/>);
});

describe('Footer', () => {
    it('should render correctly with enzyme', () => {
        expect(shallowWrapper.children.length).toBe(1);
        expect(shallowWrapper.getElement()).toMatchSnapshot();
    });
    it('should be text on the page', () => {
        expect(wrapper.text()).toMatch('Item');
    });
});
