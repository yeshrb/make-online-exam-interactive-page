let fs = require("fs");
let {get_answer, get_point} = require('../src/answer');
let get_score = require('../src/get_score')

describe('single-choice', () => {
    describe('answer', () => {
       it('should be B for quiestion 2.1', () => {
            expect(get_answer('2.1')).toBe('B');
        });
        it('should be A for quiestion 2.2', () => {
            expect(get_answer('2.2')).toBe('A');
        });


    });

    describe('point', () => {

        it('should be 10 for quiestion 2.1 exist ', () => {
            expect(get_point('2.1')).toBe(10);
        });
        it('should be 10 for quiestion 2.2 exist ', () => {
            expect(get_point('2.2')).toBe(10);
        });

    });

    describe('get_score', () => {
        it('should be 10 for answer for 2.1 is "B"', () => {
            expect(get_score({2.1: 'B'})).toBe(10);
        });
        it('should be 0 for answer for 2.1 is not "B"', () => {
            expect(get_score({1.1: 'A'})).toBe(0);
            expect(get_score({1.1: 'C'})).toBe(0);
            expect(get_score({1.1: 'D'})).toBe(0);
            expect(get_score({1.1: 'E'})).toBe(0);
        });
        it('should be 10 for answer for 2.2 is "A"', () => {
            expect(get_score({2.2: 'A'})).toBe(10);
        });
        it('should be 0 for answer for 2.2 is Not "A"', () => {
            expect(get_score({1.1: 'B'})).toBe(0);
            expect(get_score({1.1: 'C'})).toBe(0);
            expect(get_score({1.1: 'D'})).toBe(0);
            expect(get_score({1.1: 'E'})).toBe(0);
        });

        it('should be 20 for answer for 2.1 and 2.2 with all right answer', () => {
            expect(get_score({
                2.1: 'B',
                2.2: 'A'
            })).toBe(20);
        });
        it('should be 0 for answer for 2.1  and 2.2  wrong', () => {
            expect(get_score({
                2.1: 'A',
                2.2: 'B',
            })).toBe(0);
        });
        it('should be 10 for answer for 2.1 is "A"(wrong)  and 2.2 is "A" (right)', () => {
            expect(get_score({
                2.1: 'A',
                2.2: 'A'
            })).toBe(10);
        });
        it('should be 10 for answer for 2.1 right and 2.2 not right', () => {
            expect(get_score({
                2.1: 'B',
                2.2: 'B'
            })).toBe(10);
        });

    });

});
