export function keyboardKeys(event) {
    return !(event && event.type && event.key)
        ? false
        : (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'));
}

export const processToggleDrawer = (setState, state) => {
    return (side, open) => {
        return event => {
            if (!keyboardKeys(event)) setState({...state, [side]: open});
        };
    };
};
