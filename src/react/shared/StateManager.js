import {createContext} from 'react';

export const sortSkills = skills => {
    const sortedSkills = skills.slice().sort(compareByOrder);
    return sortedSkills.reduce((acc, curr) => {
        if (curr['panel'] === 'left') {
            acc['left'].push(curr);
        }
        if (curr['panel'] === 'right') {
            acc['right'].push(curr);
        }
        return acc;
    }, {left: [], right: []});
};

export const compareByOrder = (a, b) => {
    if (a.order < b.order) {
        return -1;
    }
    if (a.order > b.order) {
        return 1;
    }
    return 0;
};

export const State = createContext(null);
