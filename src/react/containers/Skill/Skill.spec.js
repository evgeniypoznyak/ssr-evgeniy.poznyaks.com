import React from 'react';
import {mount, shallow} from 'enzyme';
import {getSkillsByPanes, skills} from '../../shared/api';
import Skill from './Skill';
import {State} from '../../shared/StateManager';
import {Grid} from '@material-ui/core';

let wrapper;
let mountWrapper;

const context = {
    data: {
        rawData: skills,
        sortedData: getSkillsByPanes(skills),
    },
};
const props = {
    history: {
        location: {
            pathname: 'www/php',
        },
    },
};

beforeAll(() => {
    wrapper = shallow(<State.Provider value={{...context}}><Skill history={props.history}/></State.Provider>);
    mountWrapper = mount(<State.Provider value={{...context}}><Skill history={props.history}/></State.Provider>);
});

describe('<Skill/>', () => {
    it('renders correctly', () => {
        expect(wrapper.children.length).toBe(1);
        expect(mountWrapper.find(Grid)).toHaveLength(6);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders correctly2', () => {
        expect(mountWrapper.text()).toMatch('PHP');
    });
});


