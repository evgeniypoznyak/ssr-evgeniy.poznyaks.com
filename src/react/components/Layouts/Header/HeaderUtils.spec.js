import {keyboardKeys, processToggleDrawer} from './HeaderUtils';

describe('HeaderUtils', () => {
    it('Should keyboardKeys return true', () => {
        const event = {
            type: 'keydown',
            key: 'Tab',
        };
        expect(keyboardKeys(event)).toBeTruthy();
    });

    it('Should keyboardKeys return false', () => {
        const event = {
            type: '',
            key: '',
        };
        expect(keyboardKeys(event)).toBeFalsy();
    });

    it('Should setState called', () => {
        const mockState = jest.fn();
        processToggleDrawer(mockState, {})()();
        expect(mockState).toHaveBeenCalled();
    });
});


