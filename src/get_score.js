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
    let right_answer = get_answer(question_code);
    let point = get_point(question_code);
    //用array转换为set的方式去掉重复答案

    if(question_code === '3.1' || question_code === '3.2') {
        if(right_answer.length !== answer_str.length) return 0;
        let isEqual = true;
        right_answer.split(',').forEach((it) => {
            isEqual = isEqual&&(answer_str.indexOf(it) !== -1)
        })

        score +=  isEqual? point:0;
    }
    else {
        let answer_set = new Set(answer_str.split(','));
        answer_set.forEach((it) => {
            score += right_answer.indexOf(it) !== -1 ? point / right_answer.split(',').length : 0;
        });
    }

    return score;
};








module.exports = get_score;