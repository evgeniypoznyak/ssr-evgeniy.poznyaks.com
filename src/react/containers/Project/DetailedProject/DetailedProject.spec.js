import React from 'react';
import {shallow} from 'enzyme';
import {skills} from '../../../shared/api';
import {Divider, Paper} from '@material-ui/core';
import DetailedProject from './DetailedProject';

let wrapper;

const longDescription = skills.slice()[0].projects[0].longDescription;

beforeAll(() => {
    wrapper = shallow(<DetailedProject description={longDescription}/>);
});

describe('<DetailedProject/>', () => {
    it('renders correctly', () => {
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders Paper', () => {
        expect(wrapper.find(Paper)).toHaveLength(2);
    });

    it('renders Divider', () => {
        expect(wrapper.find(Divider)).toHaveLength(2);
    });
});
