import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';

const mountWrapper = mount(<Home/>);
const wrapper = shallow(<Home/>);

describe('<Home/>', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Home/>).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(2);
    });

    it('should render correctly with enzyme', () => {
        expect(wrapper.getElement()).toMatchSnapshot();
        expect(wrapper.getElement().props.children.length).toBe(2);
    });

    it('should render correctly with mount wrapper', () => {
        expect(mountWrapper.getElement()).toMatchSnapshot();
        expect(mountWrapper.children.length).toBe(1);
    });
});
