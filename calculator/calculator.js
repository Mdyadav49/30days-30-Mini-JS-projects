const display = document.querySelector('#display')
const buttonsContainer = document.querySelector('.buttons-container')
const evaluate = document.querySelector('#equals')

let expression;
let onlyOperator = false;
buttonsContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'INPUT' && (e.target.value !== '=') && e.target.value !== 'AC' && e.target.value !== 'DE'){
        display.value += e.target.value
       expression = display.value 
    }else if(e.target.value === '='){   
        let result = eval(expression)
        display.value = result; 
        
    }
})
evaluate.addEventListener('click',()=>{
    if(display.value){
        // console.log(num)
    }
})