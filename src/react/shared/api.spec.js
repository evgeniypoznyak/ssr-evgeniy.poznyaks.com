import {getSkillsByPanes, sortByOrder, fetchSkills} from './api';
import {skills} from './initialData/skills';

const api = getSkillsByPanes(skills);

describe('api', () => {
    it('getSkillsByPanes should return skills by order and left and right properties', () => {
        expect(api).toHaveProperty('left');
        expect(api).toHaveProperty('right');
    });

    it('sortByOrder should sort by order property', () => {
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

        const actual = testArray.sort(sortByOrder);

        expect(actual).toEqual(expected);
    });

    it('Should fetchSkill return Promise', () => {
        const promise = fetchSkills();
        promise.then(data => {
            expect(data).toHaveProperty('rawData');
            expect(data).toHaveProperty('sortedData');
            expect(data.sortedData).toHaveProperty('left');
            expect(data.sortedData).toHaveProperty('right');
        });
    });
});
