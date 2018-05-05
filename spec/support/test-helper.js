
let {answers} = require('../../src/answer');
let get_score = (qustion_answer_map)=>{
    return answers.get_score(qustion_answer_map);
}
let get_answer = (question_code) => {
    return answers.get_answer(question_code).answer;
};
let get_point = (question_code) => {
    return answers.get_answer(question_code).point
};

module.exports = {get_score,get_answer,get_point};