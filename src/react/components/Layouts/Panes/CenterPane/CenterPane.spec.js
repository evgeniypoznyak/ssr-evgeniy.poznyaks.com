import React from 'react';
import {mount} from 'enzyme';
import CenterPane from './CenterPane';

let wrapper;
const styles = {
    CenterPane: {
        height: '100%',
        padding: 20,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
};

beforeAll(() => {
    wrapper = mount(<CenterPane styles={styles}>test</CenterPane>);
});

describe('CenterPane', () => {
    it('should render correctly with enzyme mount', () => {
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.getElement()).toMatchSnapshot();
    });
    it('should be text test on the page', () => {
        expect(wrapper.text()).toMatch('test');
    });
});
