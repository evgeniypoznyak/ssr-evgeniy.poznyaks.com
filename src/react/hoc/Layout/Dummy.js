import Button from '@material-ui/core/Button';
import React from 'react';

export const Dummy = props => {
    const dummyClick = () => {
        console.log('Clicked!');
    };

    return (<div >
        I'm dummy div
        <Button href={null} onClick={dummyClick}>I'm button</Button>
    </div>);
};