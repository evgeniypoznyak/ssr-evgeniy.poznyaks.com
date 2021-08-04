import React, {Fragment} from 'react';
import {shallow} from 'enzyme';
import Layout from './Layout';
import Header from '../../components/Layouts/Header/Header';
import Main from '../../components/Layouts/Main/Main';
import Footer from '../../components/Layouts/Footer/Footer';

let wrapper;

export function mockComponent(componentName) {
    return props => {
        return (
            <Fragment>{componentName}</Fragment>
        );
    };
}

jest.mock(
    '../../components/Layouts/Header/Header', () => {
        return mockComponent('Header');
    },
);
jest.mock(
    '../../components/Layouts/Main/Main', () => {
        return mockComponent('Main');
    },
);

beforeAll(() => {
    wrapper = shallow(<Layout>test</Layout>);
});

describe('<Layouts/>', () => {
    it('renders correctly', () => {
        expect(wrapper.children.length).toBe(1);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('should render Header', () => {
        const header = wrapper.find(Header);
        expect(header).toHaveLength(1);
    });

    it('should render Main', () => {
        const header = wrapper.find(Main);
        expect(header).toHaveLength(1);
    });

    it('should render Footer', () => {
        const header = wrapper.find(Footer);
        expect(header).toHaveLength(1);
    });
});


