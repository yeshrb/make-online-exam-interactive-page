
let {get_score,get_answer,get_point} = require('./support/test-helper');
describe('true-false', () => {
    describe('answer', () => {
       it('should be "false" for quiestion 4.1', () => {
            expect(get_answer('4.1')).toBe('false');
        });
        it('should be "true" for quiestion 4.2', () => {
            expect(get_answer('4.2')).toBe('true');
        });


    });

    describe('point', () => {

        it('should be 10 for quiestion 4.1 ', () => {
            expect(get_point('4.1')).toBe(10);
        });
        it('should be 10 for quiestion 4.2 exist ', () => {
            expect(get_point('4.2')).toBe(10);
        });

    });

    describe('get_score', () => {
        it('should be 10 for answer for 4.1 is "false"', () => {
            expect(get_score({4.1: 'false'})).toBe(10);
        });

        it('should be 0 for answer for 4.1 is "true"', () => {
            expect(get_score({4.1: 'true'})).toBe(0);
        });
        it('should be 0 for answer for 4.1 is "A"', () => {
            expect(get_score({4.1: 'A'})).toBe(0);
        });

        it('should be 10 for answer for 4.2 is "true"', () => {
            expect(get_score({4.2: 'true'})).toBe(10);
        });

        it('should be 0 for answer for 4.2 is "false"', () => {
            expect(get_score({4.2: 'false'})).toBe(0);
        });
        it('should be 0 for answer for 4.2 is "Abadda"', () => {
            expect(get_score({4.2: 'Abadda'})).toBe(0);
        });
        it('should be 20 for answer for 4.1 and 4.2 are right' , () => {
            expect(get_score({
                4.1: 'false',
                4.2: 'true'
            })).toBe(20);
        });
        it('should be 10 for answer for 4.1 is "false"(right) and 4.2 is "false"(wrong)' , () => {
            expect(get_score({
                4.1: 'false',
                4.2: 'false'
            })).toBe(10);
        });
        it('should be 10 for answer for 4.1 is "true"(wrong) and 4.2 is "true"(right)' , () => {
            expect(get_score({
                4.1: 'true',
                4.2: 'true'
            })).toBe(10);
        });
        it('should be 0 for answer for 4.1 is "true"(wrong) and 4.2 is "false"(wrong)' , () => {
            expect(get_score({
                4.1: 'true',
                4.2: 'false'
            })).toBe(0);
        });


    });

});
