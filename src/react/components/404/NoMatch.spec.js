import React from 'react';
import {shallow} from 'enzyme';
import NoMatch from './NoMatch';

let wrapper;

beforeAll(() =>{
    wrapper = shallow(<NoMatch/>);
});

describe('<NoMatch/>', () => {
    it('should render correctly with enzyme', () => {
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.getElement()).toMatchSnapshot();
    });
    it('should be text with "404" and child == 1 in 404 page', () => {
        expect(wrapper.text()).toMatch('404');
    });
});
