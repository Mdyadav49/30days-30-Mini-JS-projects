const span = document.querySelector('span')

let wordsList = ['Mohit Yadav', "Developer.","Student.","Coder."]
let wordListIndex = 0;
let wordsIndex = 0;
let reversevalue = false;
var scape = 0;

setInterval(()=>{
    if(scape){
    scape--
    return
    }
    if(!reversevalue){
        scape = 2
        span.innerText = span.innerText + wordsList[wordListIndex][wordsIndex]
        wordsIndex++
    }else{
        span.innerText = span.innerText.slice(0,span.innerText.length - 1)
        wordsIndex--
    }
    if(wordsIndex === wordsList[wordListIndex].length){
        reversevalue = true;
        scape = 5
    }
    if(span.innerText.length == 0){
        reversevalue = false;
        wordsIndex = 0;
        wordListIndex++
    }
    if(wordListIndex == wordsList.length){
        wordListIndex = 0;
    }
},100)

