import React from 'react';
import {mount, shallow} from 'enzyme';
import ScrollDialog from './ScrollDialog';
import {Button, Dialog} from '@material-ui/core';

let wrapper;
let shallowWrapper;

beforeAll(() => {
    wrapper = mount(<ScrollDialog title={'testTitle123'}>testTitle456</ScrollDialog>);
    shallowWrapper = shallow(<ScrollDialog title={'test title'}>Some Text</ScrollDialog>);
});

describe('ScrollDialog', () => {
    it('should render correctly with enzyme', () => {
        expect(shallowWrapper.children.length).toBe(1);
        shallowWrapper.find(Button).at(0).simulate('click');
        expect(shallowWrapper.getElement()).toMatchSnapshot();
    });

    it('should render modal window with expected text and title if read more is clicked', () => {
        const button = wrapper.find(Button);
        button.simulate('click');
        const dialog = wrapper.find(Dialog);
        expect(wrapper.text()).toMatch('Read more');
        expect(dialog.text()).toMatch('testTitle123');
        expect(dialog.text()).toMatch('testTitle456');
    });

    it('should Dialog props["open"] toBeTruthy', () => {
        const button = wrapper.find(Button).at(0);
        button.simulate('click');
        const dialog = wrapper.find(Dialog);
        expect(dialog.props()['open']).toBeTruthy();
    });
});
