
const answers = {
    1.1: {answer:'统一建模语言',point:5},
    1.2: {answer:'封装性,继承性,多态性',point:15},
    2.1:{answer:'B',point:10},
    2.2:{answer:'A',point:10},
    3.1:{answer:'A,B,D',point:10},
    3.2:{answer:'A,B,C',point:10},
}
const get_answer = function (qustionCode) {
    return (answers[qustionCode] ? answers[qustionCode].answer :'');
}
const get_point =function (qustionCode) {

    return (answers[qustionCode] ? answers[qustionCode].point :0);

}

module.exports = { get_answer,get_point};