const display = document.querySelector('#display')
const operatorList = ["+","*","/","-","."]

let strictNumber = false;
let strictOperator = false;

function appendNumbersToDisplay(Input){
    if(!strictNumber){
    display.value += Input
    strictOperator = false;
}
}

function appendOperatorToDisplay(operator){
    if(["+","*","/"].includes(operator) && display.value.length === 0 ) return
    if (operator === "." && display.value.at(-1) === ".") return;   

    if(operator === '-' && display.value.at(-1) === "*") {
        strictOperator = false
    }

    if(!strictOperator){
        display.value += operator
        strictOperator = true
        strictNumber = false
    }
}


function clearDisplay(){
    display.value = ''
    strictNumber = false;
    strictOperator = false;
}


function DeleteLastInput(){
    if(display.value.length == 0) return 
    display.value = (display.value).toString().slice(0,-1)
    strictOperator = operatorList.includes(display.value.at(-1))
}


function calculate(){
    if(display.value.length === 0) return 
    if(operatorList.includes(display.value.at(-1))) return
    try{
        display.value = eval(display.value)
        strictNumber = true;
    }catch(err){
        display.value="error"
    }
}
