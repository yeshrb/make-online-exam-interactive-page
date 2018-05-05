// const main = require('./main/main');
//
// main();
//const {answers} = require('./src/answer');
var anwser_map = {};
window.onload = function () {
    window.document.getElementById("submit").onclick = submit;
    var elements_input = document.getElementsByTagName('input');

    for(let i=0;i<elements_input.length;i++){
        if(elements_input[i].type==='text') {
            elements_input[i].onblur = ()=>{getTextData(elements_input[i])} ;
            continue;
        }
        if(elements_input[i].type==='radio') {
            elements_input[i].onblur = ()=>{getRadioData(elements_input[i])};
            continue;
        }
        if(elements_input[i].type==='checkbox') {
            elements_input[i].onblur = ()=> {getCheckBoxData(elements_input[i])}
            continue;
        }
    }

    let elements_textarea =  document.getElementsByTagName('textarea');
    for(let i = 0; i<elements_textarea.length; i++){
        elements_textarea[i].onblur = ()=>{getTextData(elements_textarea[i])}
    }


}
var submit = function () {
    //let score = answers.get_score(anwser_map);
    alert('hello')
    console.log(anwser_map);

}

let idreg = /(^\d+\.\d+)\.\d+$/;
let getTextData = function (element) {
    let matches = element.id.match(idreg);
    if (matches) {
        anwser_map[matches[1]]
            ? anwser_map[matches[1]] += ','+ element.value
            : anwser_map[matches[1]] = element.value;
    }
}
let getRadioData = function (element) {
    if(element.checked)
        getTextData(element);
}
let getCheckBoxData = function (element) {
    if(element.checked)
        getTextData(element);
}


