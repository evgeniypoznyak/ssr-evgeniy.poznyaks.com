import React from 'react';
import {mount, shallow} from 'enzyme';
import App from './App';
import {MemoryRouter, Route} from 'react-router-dom';
import {getSkillsByPanes, skills} from '../shared/api';
import Layout from '../hoc/Layout/Layout';

let wrapper;
let mountWrapper;

const context = {
    data: {
        rawData: skills,
        sortedData: getSkillsByPanes(skills),
    },
};

beforeAll(() => {
    wrapper = shallow(<App/>);
    mountWrapper = mount(<MemoryRouter><App context={context}/></MemoryRouter>);
});

describe('<App/>', () => {
    it('renders correctly', () => {
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('should render App with routes and children', () => {
        const route = mountWrapper.find(Route);
        expect(route).toHaveLength(2);
        expect(route.children).toHaveLength(1);
    });

    it('should render App with Layout and children', () => {
        const layout = mountWrapper.find(Layout);
        expect(layout).toHaveLength(1);
        expect(layout.children).toHaveLength(1);
    });
});


