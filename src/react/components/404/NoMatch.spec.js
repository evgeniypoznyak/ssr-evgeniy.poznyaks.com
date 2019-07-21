import React from 'react';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';
import NoMatch from './NoMatch';

let tree;
let wrapper;
let shallowWrapper;

beforeAll(() =>{
    tree = renderer.create(<NoMatch/>).toJSON();
    wrapper = mount(<NoMatch/>);
    shallowWrapper = shallow(<NoMatch/>);
});

describe('Home', () => {
    it('should render correctly with enzyme', () => {
        expect(tree.children.length).toBe(1);
        expect(shallowWrapper.getElement()).toMatchSnapshot();
    });
    it('should be text with "404" and child == 1 in 404 page', () => {
        expect(wrapper.text()).toMatch('404');
    });
});
