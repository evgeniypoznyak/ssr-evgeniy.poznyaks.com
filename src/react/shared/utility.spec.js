import {browserLanguage, checkValidity, getRandomString, updateObject} from './utility';

describe('StateManager', () => {
    it('should return checkValidity with required=true works', () => {
        const rules = {
            required: true,
        };
        expect(checkValidity(' test', {...rules})).toBeTruthy();
        expect(checkValidity('1', {...rules})).toBeTruthy();
        expect(checkValidity(1, {...rules})).toBeTruthy();
        expect(checkValidity(null, {...rules})).toBeFalsy();
        expect(checkValidity(undefined, {...rules})).toBeFalsy();
        expect(checkValidity('', {...rules})).toBeFalsy();
        expect(checkValidity(' ', {...rules})).toBeFalsy();
    });

    it('should return checkValidity with minLength=5 works', () => {
        const rules = {
            maxLength: 5,
        };
        expect(checkValidity(' test', {...rules})).toBeTruthy();
        expect(checkValidity('1', {...rules})).toBeTruthy();
        expect(checkValidity(1, {...rules})).toBeTruthy();
        expect(checkValidity(null, {...rules})).toBeFalsy();
        expect(checkValidity(undefined, {...rules})).toBeFalsy();
        expect(checkValidity('', {...rules})).toBeFalsy();
        expect(checkValidity(' ', {...rules})).toBeFalsy();
        expect(checkValidity('12345', {...rules})).toBeTruthy();
        expect(checkValidity('hello-world!', {...rules})).toBeFalsy();
    });

    it('should return checkValidity with minLength=3 works', () => {
        const rules = {
            minLength: 3,
        };
        expect(checkValidity(' ab', {...rules})).toBeFalsy();
        expect(checkValidity('1', {...rules})).toBeFalsy();
        expect(checkValidity(1, {...rules})).toBeFalsy();
        expect(checkValidity(null, {...rules})).toBeFalsy();
        expect(checkValidity(undefined, {...rules})).toBeFalsy();
        expect(checkValidity('', {...rules})).toBeFalsy();
        expect(checkValidity(' ', {...rules})).toBeFalsy();
        expect(checkValidity('12345', {...rules})).toBeTruthy();
        expect(checkValidity('hello-world!', {...rules})).toBeTruthy();
    });

    it('should work checkValidity with isEmail', () => {
        const rules = {
            isEmail: true,
        };
        expect(checkValidity(' ab', {...rules})).toBeFalsy();
        expect(checkValidity('1', {...rules})).toBeFalsy();
        expect(checkValidity(1, {...rules})).toBeFalsy();
        expect(checkValidity(null, {...rules})).toBeFalsy();
        expect(checkValidity(undefined, {...rules})).toBeFalsy();
        expect(checkValidity('', {...rules})).toBeFalsy();
        expect(checkValidity(' ', {...rules})).toBeFalsy();
        expect(checkValidity('12345', {...rules})).toBeFalsy();
        expect(checkValidity('hello-world!', {...rules})).toBeFalsy();
        expect(checkValidity('test@', {...rules})).toBeFalsy();
        expect(checkValidity('test@mail', {...rules})).toBeFalsy();
        expect(checkValidity('test@mail.com', {...rules})).toBeTruthy();
    });

    it('should work checkValidity with isNumeric', () => {
        const rules = {
            isNumeric: true,
        };
        expect(checkValidity(' ab', {...rules})).toBeFalsy();
        expect(checkValidity('1', {...rules})).toBeTruthy();
        expect(checkValidity(1, {...rules})).toBeTruthy();
        expect(checkValidity(null, {...rules})).toBeFalsy();
        expect(checkValidity(undefined, {...rules})).toBeFalsy();
        expect(checkValidity('', {...rules})).toBeFalsy();
        expect(checkValidity(' ', {...rules})).toBeFalsy();
        expect(checkValidity('12345', {...rules})).toBeTruthy();
        expect(checkValidity('hello-world!', {...rules})).toBeFalsy();
        expect(checkValidity('test@', {...rules})).toBeFalsy();
        expect(checkValidity('test@mail', {...rules})).toBeFalsy();
        expect(checkValidity('test@mail.com', {...rules})).toBeFalsy();
    });

    it('Should updateObject work', () => {
        const oldObj = {
            a: 1,
            c: 4,
        };
        const newObj = {
            a: 2,
            b: 3,
        };
        const expected = {
            a: 2,
            b: 3,
            c: 4,
        };
        const actual = updateObject(oldObj, newObj);
        expect(expected).toEqual(actual);
    });

    it('Should browserLanguage work', () => {
        const actual = browserLanguage();
        expect(actual.length > 0).toBeTruthy();
        expect(actual).toEqual('en-US');
    });

    it('Should getRandomString work with 1000 random examples', () => {
        for (let i = 0; i < 1000; i++) {
            const expected = getRandomString(9);
            const actual = getRandomString(9);
            expect(actual).not.toEqual(expected);
        }
    });
});


