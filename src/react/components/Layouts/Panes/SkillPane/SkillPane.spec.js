import React from 'react';
import {mount, shallow} from 'enzyme';
import SkillPane from './SkillPane';
import {skills, getSkillsByPanes} from '../../../../api';
import {MemoryRouter} from 'react-router-dom';

let wrapperLeft;
let wrapperRight;
const styles = {
    Paper: {
        marginTop: 5,
        marginBottom: 10,
    },
};
const data = {
    rawData: skills,
    filteredData: getSkillsByPanes(skills),
};


beforeAll(() => {
    wrapperLeft = mount(<MemoryRouter><SkillPane styles={styles} skills={data.filteredData.left}/></MemoryRouter>);
    wrapperRight = mount(<MemoryRouter><SkillPane styles={styles} skills={data.filteredData.right}/></MemoryRouter>);
});

describe('SkillPane', () => {
    it('should render correctly with enzyme mount', () => {
        expect(wrapperLeft.children.length).toBe(1);
        expect(wrapperRight.children.length).toBe(1);
    });
    it('should be text PHP and Angular on the page', () => {
        expect(wrapperLeft.text()).toMatch('PHP');
        expect(wrapperRight.text()).toMatch('Angular');
    });
});
