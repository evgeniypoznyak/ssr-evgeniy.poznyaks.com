import React from 'react';
import Header from './Header';
import {skills, getSkillsByPanes} from '../../../api';
// import TestRenderer from 'react-test-renderer';
import {shallow} from 'enzyme';

const context = {
    data: {
        rawData: skills,
        data: getSkillsByPanes(skills),
    },
};


jest.mock('react', () => {
    return {
        useContext: () => ({test: 'test'}),
        createContext: () => ({test: 'test'}),
        forwardRef: () => jest.fn(),
        createElement: () => jest.fn(<div>Test</div>),
    };
});

jest.mock('@material-ui/core/IconButton', () => {
    return {
        prototype: () => jest.fn(),
    };
});

jest.mock('@material-ui/core/Button', () => {
    return {
        prototype: () => jest.fn(),
    };
});

jest.mock('@material-ui/core/ListItem', () => {
    return {
        prototype: () => jest.fn(),
    };
});
jest.mock('@material-ui/core/Drawer', () => {
    return {
        prototype: () => jest.fn(),
    };
});

jest.mock('@material-ui/icons/Menu', () => {
    return {
        memo: () => jest.fn(),
    };
});
jest.mock('@material-ui/icons/MoveToInbox', () => {
    return {
        memo: () => jest.fn(),
    };
});

jest.mock('@material-ui/icons/Mail', () => {
    return {
        memo: () => jest.fn(),
    };
});

jest.mock('react-router-dom', () => {
    return {
        hasOwnProperty: () => jest.fn(),
    };
});


describe('Header', () => {
    it('renders correctly', () => {
        const context = {
            data: {
                rawData: skills,
                data: getSkillsByPanes(skills),
            },
        };

        // const element = new TestRenderer.create(
        //     <Header/>,
        // );

        // useContextMock.mockReturnValue(context);
        // const element = new ShallowRenderer().render(
        //     <Header/>,
        // );

        const element = shallow(<Header/>);
        console.log(element);
    });
});
