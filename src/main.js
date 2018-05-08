// const main = require('./main/main');
//
// main();
const {answers} = require('./answer');
var anwser_map = {};
var q_a_map = {};
window.onload = function () {
    window.document.getElementById("submit").onclick = submit;
}

var submit = function () {
    set_question_answer();
    let score = answers.get_score(anwser_map);
    document.getElementById('result').innerHTML = `得分：${score}`;
};
let set_question_answer = function () {
    anwser_map = {};
    var elements_input = document.getElementsByTagName('input');
    for (let i = 0; i < elements_input.length; i++) {
        if (elements_input[i].type === 'text') {
            setData(elements_input[i]);
            continue;
        }
        if (elements_input[i].type === 'radio') {
            setRadioData(elements_input[i]);
            continue;
        }
        if (elements_input[i].type === 'checkbox') {
            setCheckBoxData(elements_input[i]);
            continue;
        }
    }

    let elements_textarea = document.getElementsByTagName('textarea');
    for (let i = 0; i < elements_textarea.length; i++) {
        setData(elements_textarea[i])
    }
};
let idreg = /(^\d+\.\d+)\.\d+$/;
let setData = function (element) {
    let matches = element.id.match(idreg);
    if (matches) {
        anwser_map[matches[1]]
            ? anwser_map[matches[1]] += (element.value.length ? `,${element.value}` : '')
            : anwser_map[matches[1]] = element.value;
    }


}


let setRadioData = function (element) {
    if (element.checked)
        setData(element);
    else {
        q_a_map[element.id] = undefined;
    }
}
let setCheckBoxData = function (element) {
    if (element.checked)
        setData(element);
}


