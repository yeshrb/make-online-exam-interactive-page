let {get_score,get_answer,get_point} = require('./support/test-helper');

describe('completion', () => {
    describe('answer', () => {
        it('should throw a error for quiestion not exist', () => {
            expect(()=>get_answer('ab')).toThrowError();
        });
        it('should be "统一建模语言" for quiestion 1.1', () => {
            expect(get_answer('1.1')).toBe('统一建模语言');
        });
        it('should be "封装性,继承性,多态性" for quiestion 1.2', () => {
            expect(get_answer('1.2')).toBe('封装性,继承性,多态性');
        });
    });

    describe('point', () => {
        it('should throw an error  for quiestion not exist ', () => {
            expect(()=>get_point('ab')).toThrowError();
        });
        it('should be 5 for answer 1.1" ', () => {
            expect(get_point('1.1')).toBe(5);
        });
        it('should be 15 for answer 1.2', () => {
            expect(get_point('1.2')).toBe(5);
        })
    });

    describe('get_score', () => {
        it('should be 0 for answer for 1.1 is ""', () => {
            expect(get_score({1.1:''})).toBe(0);
        });
        it('should be 5 for answer for 1.1 is "统一建模语言"', () => {
            expect(get_score({1.1:'统一建模语言'})).toBe(5);
        });
        it('should be 0 for answer for 1.1 is "统建语言"', () => {
            expect(get_score({1.1: '统建语言'})).toBe(0);
        });

        it('should be 0 for answer for 1.2 is ""', () => {
            expect(get_score({1.2: ''})).toBe(0);
        });

        it('should be 15 for answer for 1.2 is "封装性,继承性,多态性"', () => {

            expect(get_score({1.2: '封装性,继承性,多态性'})).toBe(15);
        });
        it('should be 10 for answer for 1.2 is "封装性,多态性"', () => {
            expect(get_score({1.2: '封装性,多态性'})).toBe(10);
        });
        it('should be 5 for answer for 1.2 is "多态性"', () => {
            expect(get_score({1.2: '多态性'})).toBe(5);
        });
        it('should be 5 for answer for 1.2 is "多态性,多态性"', () => {
            expect(get_score({1.2: '多态性,多态性'})).toBe(5);
        });
        it('should be 20 for answer for 1.1 and 1.2 with all right answer', () => {
            expect(get_score({
                1.2: '封装性,继承性,多态性',
                1.1: '统一建模语言'
            })).toBe(20);
        });
        it('should be 0 for answer for 1.1  and 1.2 all wrong', () => {
            expect(get_score({
                1.2: '封装封装性,多封装性',
                1.1: '统一言'
            })).toBe(0);
        });
        it('should be 15 for answer for 1.1 not right and 1.2 all right', () => {
            expect(get_score({
                1.2: '封装性,继承性,多态性',
                1.1: '统语言'
            })).toBe(15);
        });
        it('should be 15 for answer for 1.1 right and 1.2 2/3 right', () => {
            expect(get_score({
                1.2: '封装性,多态性',
                1.1: '统一建模语言'
            })).toBe(15);
        });

    });

});
