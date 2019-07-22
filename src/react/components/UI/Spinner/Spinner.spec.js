import React from 'react';
import {shallow} from 'enzyme';
import Spinner from './Spinner';

let shallowWrapper;

beforeAll(() => {
    shallowWrapper = shallow(<Spinner/>);
});

describe('Spinner', () => {
    it('should render correctly with enzyme', () => {
        expect(shallowWrapper.children.length).toBe(1);
        expect(shallowWrapper.getElement()).toMatchSnapshot();
    });
});
