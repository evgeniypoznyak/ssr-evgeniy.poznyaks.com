import React from 'react';
import {shallow} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {getSkillsByPanes, skills} from '../../../api';
import Header from './Header';


const context = {
    data: {
        rawData: skills,
        sortedData: getSkillsByPanes(skills),
    },
};

const wrapper = shallow(<MemoryRouter><Header context={context}>TEST</Header></MemoryRouter>);

describe('Header', () => {
    it('should render correctly with enzyme', () => {
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.find(Header).getElement()).toMatchSnapshot();
    });
});
