
class Answer {
    constructor(answer, point) {
        this.answer = answer;
        this.point = point;
    }
    compute_score(ans_str) {
        return compute_point_must_equal(this.answer, this.point, ans_str);
    }
}
class BlankAnswer extends Answer {
    constructor(answer) {
        super(answer, POINT_BLANK);
    }
    compute_score(ans_str) {
        return compute_point_partial_item_equal(this.answer, this.point, ans_str);
    }

}
class SingleChoiceAnswer extends Answer {
    constructor(answer) {
        super(answer, POINT_SINGLE_CHOICE);
    }
}
class MultiChoiceAnswer extends Answer {
    constructor(answer) {
        super(answer, POINT_MULTI_CHOICE);
    }
    compute_score(ans_str) {
        return compute_point_every_item_equal(this.answer, this.point, ans_str);
    }
}
class TrueFalseAnswer extends Answer {
    constructor(answer) {
        super(answer, POINT_TRUE_FLASE );
    }
}
class ShortAnswer extends Answer {
    constructor(answer) {
        super(answer, POINT_SHORT_ANSWER );
    }
}
const POINT_BLANK = 5;
const POINT_SINGLE_CHOICE = 10;
const POINT_MULTI_CHOICE = 10;
const POINT_TRUE_FLASE = 10;
const POINT_SHORT_ANSWER = 20;

let compute_point_partial_item_equal = function (right_answer, point, answer_str) {
    let score = 0;
    if (!answer_str) return 0;
    //用array转换为set的方式去掉重复答案
    let answer_set = new Set(answer_str.split(','));
    answer_set.forEach((it) => {
        score += right_answer.indexOf(it.trim()) !== -1 ? point : 0;
    });
    return score;
};
let compute_point_every_item_equal = function (right_answer, point, answer_str) {
    if (right_answer.length !== answer_str.length) return 0;
    let isEqual = true;
    right_answer.split(',').forEach((it) => {
        isEqual = isEqual && (answer_str.indexOf(it) !== -1)
    })
    return isEqual ? point : 0;
};
let compute_point_must_equal = function (right_answer, point, ans_str) {
    return right_answer === ans_str ? point : 0;
}

const answers = {
    1.1: new BlankAnswer('统一建模语言'),
    1.2: new BlankAnswer('封装性,继承性,多态性'),

    2.1: new SingleChoiceAnswer('B'),
    2.2: new SingleChoiceAnswer('A'),

    3.1:new MultiChoiceAnswer('A,B,D'),
    3.2:new MultiChoiceAnswer('A,B,C'),

    4.1: new TrueFalseAnswer('false'),
    4.2: new TrueFalseAnswer('true'),

    5.1: new ShortAnswer('模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'),

    get_answer(qustionCode) {
        return this[qustionCode];
    },
    get_score(qustion_answer_map) {
        return _get_score(qustion_answer_map);
    }
}
const get_answer_obj = function (qustionCode) {
    return answers[qustionCode];
}
const get_answer = function (qustionCode) {
    return (answers[qustionCode] ? answers[qustionCode].answer : '');
}
const get_point = function (qustionCode) {

    return (answers[qustionCode] ? answers[qustionCode].point : 0);

}

const _get_score = function (qustion_answer_map) {
    let score = 0;
    score = Object.keys(qustion_answer_map).reduce((accum, key) => {
        accum += get_score_of_one_qustion(key, qustion_answer_map[key]);
        return accum;
    }, 0);
    return score;
}


/*
 * get_score_of_one_qustion 获得某个题的得分
 * @parameter question_code 题目的编号，1.1 表示第一大题中第一小题
 * @parameter answer_str 对应提交的答案
 * @ return 得分
 */
const get_score_of_one_qustion = function (question_code, answer_str) {
    return answers.get_answer(question_code).compute_score(answer_str) || 0;
};






module.exports = {get_answer, get_point, get_answer_obj,answers};