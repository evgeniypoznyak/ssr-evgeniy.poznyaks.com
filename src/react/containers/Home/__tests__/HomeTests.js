import React from 'react';
import Home from '../Home';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';
// setup file
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// test file
import { shallow, mount, render } from 'enzyme';

describe('Home', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Home/>).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(2);
    });

    it('should render correctly', () => {
        const wrapper = shallow(<Home/>);
        console.log(wrapper);
    });
});
