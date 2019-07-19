import React from 'react';
import Home from '../Home';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Home', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Home/>).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(2);
    });

    it('should render correctly with enzyme', () => {
        const wrapper = shallow(<Home/>);
        // console.log(wrapper.getElement().props.children.length);
        expect(wrapper.getElement()).toMatchSnapshot();
        expect(wrapper.getElement().props.children.length).toBe(2);
    });
});
