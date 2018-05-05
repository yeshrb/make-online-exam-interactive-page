
let {get_score,get_answer,get_point} = require('./support/test-helper');

describe('short-answer', () => {
    answer_str = `模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。`
    describe('answer', () => {
       it('should be "false" for quiestion 5.1', () => {
            expect(get_answer('5.1')).toBe(answer_str);
       });
    });

    describe('point', () => {
        it('should be 20 for quiestion 5.1 ', () => {
            expect(get_point('5.1')).toBe(20);
        });

    });

    describe('get_score', () => {
        it('should be 20 for answer for 5.1 is equal answer_str', () => {
            expect(get_score({5.1: answer_str})).toBe(20);
        });

        it('should be 0 for answer for 5.1 is "asdfoasdufsiofuiosafusad"', () => {
            expect(get_score({5.1: 'asdfoasdufsiofuiosafusad'})).toBe(0);
        });

    });

});
