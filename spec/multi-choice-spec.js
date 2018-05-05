let {get_score,get_answer,get_point} = require('./support/test-helper');
describe('multi-choice', () => {
    describe('answer', () => {
       it('should be "A,B,D" for quiestion 3.1', () => {
            expect(get_answer('3.1')).toBe('A,B,D');
        });
        it('should be "A,B,C" for quiestion 3.2', () => {
            expect(get_answer('3.2')).toBe('A,B,C');
        });


    });

    describe('point', () => {

        it('should be 10 for quiestion 3.1 ', () => {
            expect(get_point('3.1')).toBe(10);
        });
        it('should be 10 for quiestion 2.2 ', () => {
            expect(get_point('3.2')).toBe(10);
        });

    });

    describe('get_score', () => {
        it('should be 10 for answer for 3.1 is "A,B,D"', () => {
            expect(get_score({3.1: 'A,B,D'})).toBe(10);
        });
        it('should be 10 for answer for 3.1 is "B,A,D"', () => {
            expect(get_score({3.1: 'B,A,D'})).toBe(10);
        });
        it('should be 10 for answer for 3.1 is "B,D,A"', () => {
            expect(get_score({3.1: 'A,B,D'})).toBe(10);
        });
        it('should be 0 for answer for 3.1 is not "A,B,C,D"', () => {
            expect(get_score({3.1: 'A,B,C,D'})).toBe(0);
        });
        it('should be 0 for answer for 3.1 is not "A,B,C"', () => {
            expect(get_score({3.1: 'A,B,C'})).toBe(0);
        });
        it('should be 0 for answer for 3.1 is not "A,B"', () => {
            expect(get_score({3.1: 'A,B'})).toBe(0);
        });
        it('should be 0 for answer for 3.1 is not "B"', () => {
            expect(get_score({3.1: 'B'})).toBe(0);
        });

        it('should be 10 for answer for 3.2 is "A,B,C"', () => {
            expect(get_score({3.2: 'A,B,C'})).toBe(10);
        });
        it('should be 10 for answer for 3.2 is "B,A,C"', () => {
            expect(get_score({3.2: 'B,A,C'})).toBe(10);
        });
        it('should be 0 for answer for 3.2 is "A,B,C,D"', () => {
            expect(get_score({3.2: 'A,B,C,D'})).toBe(0);
        });
        it('should be 0 for answer for 3.2 is "A,B,D"', () => {
            expect(get_score({3.2: 'A,B,D'})).toBe(0);
        });
        it('should be 0 for answer for 3.2 is "D,B,D"', () => {
            expect(get_score({3.2: 'D,B,D'})).toBe(0);
        });
        it('should be 0 for answer for 3.2 is "B,B,D"', () => {
            expect(get_score({3.2: 'B,B,D'})).toBe(0);
        });
        it('should be 0 for answer for 3.2 is "B,B,B"', () => {
            expect(get_score({3.2: 'B,B,D'})).toBe(0);
        });
        it('should be 0 for answer for 3.2 is "A,B,D"', () => {
            expect(get_score({3.2: 'A,B,D'})).toBe(0);
        });
        it('should be 0 for answer for 3.2 is "A,B"', () => {
            expect(get_score({3.2: 'A,B'})).toBe(0);
        });
        it('should be 0 for answer for 3.2 is "A"', () => {
            expect(get_score({3.2: 'A'})).toBe(0);
        });

        it('should be 20 for answer for 3.1 and 3.2 with all right answer', () => {
            expect(get_score({
                3.1: 'A,B,D',
                3.2: 'A,B,C'
            })).toBe(20);
        });
        it('should be 10 for answer for 3.1 is "A,B,D"(right) and 3.2 is "A,B,D" (wrong)', () => {
            expect(get_score({
                3.1: 'A,B,D',
                3.2: 'A,B,D'
            })).toBe(10);
        });
        it('should be 10 for answer for 3.1 is "A,B,C"(wrong) and 3.2 is "A,B,C" (right)', () => {
            expect(get_score({
                3.1: 'A,B,C',
                3.2: 'A,B,C'
            })).toBe(10);
        });
    });

});
