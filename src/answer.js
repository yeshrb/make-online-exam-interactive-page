const answers = {
    1.1: {
        answer: '统一建模语言',
        point: 5,
    },
    1.2: {answer: '封装性,继承性,多态性', point: 15},
    2.1: {answer: 'B', point: 10},
    2.2: {answer: 'A', point: 10},
    3.1: {
        answer: 'A,B,D',
        point: 10
    },
    3.2: {answer: 'A,B,C', point: 10},
}
const get_answer = function (qustionCode) {
    return (answers[qustionCode] ? answers[qustionCode].answer : '');
}
const get_point = function (qustionCode) {

    return (answers[qustionCode] ? answers[qustionCode].point : 0);

}
// const compute_point_of_completion = function (answer_str, answer) {
//     let score = 0;
//     //用array转换为set的方式去掉重复答案
//     let set = new Set(answer_str.split(','));
//     set.forEach((it) => {
//         score += compute_point(it, answer)
//     });
//     return score;
// }
//
// const compute_point = function (it, answer) {
//     return is_anwser_right(answer, it) ? get_point(answer) / get_answer(answer).split(',').length : 0;
//
// };
// const is_anwser_right = function is_anwser_right(answer, answer_it) {
//     return answer.indexOf(answer_it) !== -1;
// }


module.exports = {get_answer, get_point};