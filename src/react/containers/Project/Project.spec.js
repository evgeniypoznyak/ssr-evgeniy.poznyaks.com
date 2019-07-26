import React from 'react';
import {mount, shallow} from 'enzyme';
import {skills} from '../../shared/api';
import {Grid} from '@material-ui/core';
import Project from '../Project/Project';
import ScrollDialog from '../../components/UI/Dialog/ScrollDialog';
import DetailedProject from './DetailedProject/DetailedProject';

let wrapper;
let mountWrapper;

const project = skills.slice()[0].projects[0];

beforeAll(() => {
    wrapper = shallow(<Project project={project}/>);
    mountWrapper = mount(<Project project={project}/>);
});

describe('<Project/>', () => {
    it('renders correctly', () => {
        expect(wrapper.children.length).toBe(1);
        expect(mountWrapper.find(Grid)).toHaveLength(1);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders ScrollDialog', () => {
        const scrollDialog = mountWrapper.find(ScrollDialog);
        expect(mountWrapper.text()).toMatch('.');
        expect(scrollDialog).toHaveLength(1);
    });

    it('renders DetailedProject', () => {
        const detailedProject = wrapper.find(DetailedProject);
        expect(detailedProject).toHaveLength(1);
    });
});
