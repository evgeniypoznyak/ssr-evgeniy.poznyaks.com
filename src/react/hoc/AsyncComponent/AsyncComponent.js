import React, {useEffect, useState} from 'react';

const AsyncComponent = importComponent => {
    const [component, setComponent] = useState(null);
    useEffect(() => {
        if (!component) {
            importComponent().then(cmp => {
                setComponent({component: cmp.default});
            });
        }
    }, [component]);
    // importComponent().then(cmp => {
    //     setComponent({component: cmp.default});
    // });
    return props => {
        const C = component;
        return C ? <C {...props}/> : null;
    };
};

export default AsyncComponent;
