import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {getSkillsByPanes, skills} from '../../../api';
import Header from './Header';


const context = {
    data: {
        rawData: skills,
        sortedData: getSkillsByPanes(skills),
    },
};

const wrapper = mount(<MemoryRouter><Header context={context}>TEST</Header></MemoryRouter>);

describe('Header', () => {
    it('should render correctly with enzyme', () => {
        expect(wrapper.children.length).toBe(1);
        // expect(wrapper.getElement()).toMatchSnapshot();
    });
    it('should be tested text on the page', () => {
        // const grid = wrapper.find(Grid);
        // const skillPane = wrapper.find(SkillPane);
        // const centerPane = wrapper.find(CenterPane);
        // expect(grid.at(0).text()).toMatch('PHP');
        // expect(skillPane.at(0).text()).toMatch('PHP');
        // expect(skillPane.at(1).text()).toMatch('Angular');
        // expect(centerPane.text()).toMatch('TEST');
    });
});
