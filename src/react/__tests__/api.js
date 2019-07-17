import {skills, getSkillsByPanes, compareByOrder} from '../api';

const api = getSkillsByPanes(skills);

describe('api', () => {
    it('getSkillsByPanes should return skills by order and left and right properties', () => {
        expect(api).toHaveProperty('left');
        expect(api).toHaveProperty('right');
    });

    it('compareByOrder should sort by order property', () => {
        const testArray = [
            {name: 'd', order: 4},
            {name: 'b', order: 2},
            {name: 'e', order: 5},
            {name: 'c', order: 3},
            {name: 'a', order: 1},
        ];
        const expected = [
            {name: 'a', order: 1},
            {name: 'b', order: 2},
            {name: 'c', order: 3},
            {name: 'd', order: 4},
            {name: 'e', order: 5},
        ];

        const actual = testArray.sort(compareByOrder);

        expect(actual).toEqual(expected);
    });
});
