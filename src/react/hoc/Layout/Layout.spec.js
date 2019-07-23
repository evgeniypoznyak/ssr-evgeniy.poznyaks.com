import React from 'react';
import {shallow, mount} from 'enzyme';
import {Dummy} from './Dummy';



describe('../Dummy', () => {
    it('renders correctly', () => {
        const mockFunction = jest.fn();
        jest.mock('./Dummy', () => ({
            dummyClick: mockFunction,
        }));
        const shallowRender = shallow(<Dummy/>);

        const mountRender = mount(<Dummy/>);
        // const mountRender = mount(<Dummy onClick={mockFunction}/>);
        // shallowRender.setProps({dummyClick: mockFunction});
        // const mock = jest.spyOn(Dummy, 'dummyClick');
        // const mock = jest.spyOn(Dummy, 'dummyClick');

        shallowRender.simulate('click');
        // mountRender.simulate('click');
        mountRender.children().simulate('click');
        // const instance = mountRender.root();
        // console.log(mountRender.props('dummyClick'));
        mountRender.update();
        // mock.mockImplementation(() => {});
        expect(mockFunction).toHaveBeenCalled();
        // mock.mockRestore();
        mountRender.update();
        // console.log(mountRender.children().simulate('click'));
    });

    it('should render correctly with enzyme', () => {

    });
});
