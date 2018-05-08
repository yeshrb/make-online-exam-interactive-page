let fs = require("fs");
let {answers} = require('../src/answer')
describe('main()', () => {
    let answer_all_right = {
        1.1: '统一建模语言',
        1.2: '封装性,继承性,多态性',

        2.1: 'B',
        2.2: 'A',

        3.1:'A,B,D',
        3.2:'A,B,C',

        4.1: 'false',
        4.2: 'true',

        5.1: '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。',

    };
    let answer_all_blank = {
        1.1: '',
        1.2: '',
        5.1: '',

    };
    let answer_partial_right = {
        1.1:'',
        1.2: '封装性,继承性',
        5.1:'',



    };

    it('should pass', () => {
      expect(fs.statSync("index.html").isFile()).toBe(true);
    });

    it('should be 100 with all right answer', ()=>{
        expect(answers.get_score(answer_all_right)).toBe(100);
    })
    it('should be 10 with answer_partial_right', ()=>{
        expect(answers.get_score(answer_partial_right)).toBe(10);
    })

});
