import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {getSkillsByPanes, skills} from '../../../api';
import Main from './Main';
import SkillPane from '../Panes/SkillPane/SkillPane';
import CenterPane from '../Panes/CenterPane/CenterPane';


const context = {
    data: {
        rawData: skills.pop(),
        sortedData: getSkillsByPanes(skills),
    },
};

const wrapper = mount(<MemoryRouter><Main context={context}>TEST</Main></MemoryRouter>);

describe('Main', () => {
    it('should render correctly with enzyme', () => {
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.getElement()).toMatchSnapshot();
    });
    it('should be tested text on the page', () => {
        const grid = wrapper.find(Grid);
        const skillPane = wrapper.find(SkillPane);
        const centerPane = wrapper.find(CenterPane);
        expect(grid.at(0).text()).toMatch('PHP');
        expect(skillPane.at(0).text()).toMatch('PHP');
        expect(skillPane.at(1).text()).toMatch('Angular');
        expect(centerPane.text()).toMatch('TEST');
    });
});
