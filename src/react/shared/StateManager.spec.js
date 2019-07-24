import {sortSkills, compareByOrder} from './StateManager';

const unsortedSkills = [
    {name: 'd', order: 4, panel: 'right'},
    {name: 'b', order: 2, panel: 'left'},
    {name: 'e', order: 5, panel: 'right'},
    {name: 'c', order: 3, panel: 'left'},
    {name: 'a', order: 1, panel: 'right'},
];

const leftSortedSkills = [
    {name: 'b', order: 2, panel: 'left'},
    {name: 'c', order: 3, panel: 'left'},
];

const rightSortedSkills = [
    {name: 'a', order: 1, panel: 'right'},
    {name: 'd', order: 4, panel: 'right'},
    {name: 'e', order: 5, panel: 'right'},
];

const unsortedArray = [
    {name: 'd', order: 4},
    {name: 'b', order: 2},
    {name: 'e', order: 5},
    {name: 'c', order: 3},
    {name: 'a', order: 1},
    {name: 'f', order: 5},
];
const sortedArray = [
    {name: 'a', order: 1},
    {name: 'b', order: 2},
    {name: 'c', order: 3},
    {name: 'd', order: 4},
    {name: 'e', order: 5},
    {name: 'f', order: 5},
];

describe('StateManager', () => {
    it('getSkillsByPanes should return skills by order and left and right properties', () => {
        expect(sortSkills(unsortedSkills)).toHaveProperty('left');
        expect(sortSkills(unsortedSkills)).toHaveProperty('right');
        expect(sortSkills(unsortedSkills).left).toEqual(leftSortedSkills);
        expect(sortSkills(unsortedSkills).right).toEqual(rightSortedSkills);
    });

    it('sortByOrder should sort by order property', () => {
        expect(unsortedArray.sort(compareByOrder)).toEqual(sortedArray);
    });
});


