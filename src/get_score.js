let {get_answer, get_point} = require('./answer');
/*
 * get_score 获得答卷的得分
 * @parameter qustion_answer_map 题号和答案的键值对
 * 如{1.1 : 'aaa','1.2':'bbb'}
 * @ return score 根据答案返回得分
 */
const get_score = function (qustion_answer_map) {
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
 * @ return score 得分
 */
const get_score_of_one_qustion = function (question_code, answer_str) {
    let score = 0;
    //用array转换为set的方式去掉重复答案
    let set = new Set(answer_str.split(','));
    set.forEach((it) => {
        score += compute_point(it, question_code)
    });
    return score;
}

let compute_point = function (it, question_code) {
    return is_anwser_right(question_code, it) ? get_point(question_code) / get_answer(question_code).split(',').length : 0;

};

/*
 * is_anwser_right 这是个助手方法，判断提交的答案是正确
 * @parameter question_code 题目的编号，1.1 表示第一大题中第一小题
 * @parameter answer_str 对应提交的答案
 * @ return score 得分
 */
const is_anwser_right = function is_anwser_right(question_code, answer) {
    return get_answer(question_code).indexOf(answer) !== -1;
}




module.exports = get_score;