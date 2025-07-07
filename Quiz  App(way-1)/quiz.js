const optionParent = document.querySelector('.option-parent')
const h4Question = document.querySelector('#question')
const nextBtn = document.querySelector('.next-btn')
const scoreParent = document.querySelector('.score-parent')
const rightAns = document.querySelector('.right-ans')
const totalQues = document.querySelector('.total-ques')
const playAgainBtn = document.querySelector('.play-btn')

const allQuestion = [{
    question:"1. Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
},
{
    question:"2. Which is the largest animal in the world?",
    answer:"Blue Whale",
    options:["Blue Whale","Elephant","Shark","Giraffe"]
},
{
    question:"3. Which planet is known as the Red Planet?",
    answer:"Mars",
    options:["Venus","Saturn","Mars","Jupiter"]
},
{
    question:"4. What is the chemical symbol for water?",
    answer:"H2O",
    options:["H2O","O2","NaCl","CO2"]
},
{
    question:"5. What is the capital of India?",
    answer:"Delhi",
    options:["Mumbai","Delhi","lucknow","kolkata"]   
},
{
    question:"6. Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
},
{
    question:"7. Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
},
{
    question:"8. Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
},
{
    question:"9. Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
}
]

var allOption = [];
let rightAnsCount = 0;
let currentQuestionIndex = 0;
let firstClick = false;

function renderQuestion(allQuestion,currentQuestionIndex){
    optionParent.innerHTML =''
    nextBtn.style.display = 'none';
    let currentQuesObj = allQuestion[currentQuestionIndex]
    h4Question.innerText = currentQuesObj.question;
    currentQuesObj.options.forEach((option)=>{
        let p = document.createElement('p')
        p.innerText = option
        optionParent.appendChild(p)
    })  
    allOption = Array.from(optionParent.children)
    firstClick = false;
}
renderQuestion(allQuestion,currentQuestionIndex)

optionParent.addEventListener('click',(e)=>{
    if(e.target.tagName === 'P'){
        if(firstClick) return ;
        nextBtn.style.display = 'block';
        if(e.target.innerText.toLowerCase() === allQuestion[currentQuestionIndex].answer.toLowerCase()){
            e.target.classList.add('right-ans');
            rightAnsCount++       
        }else{
            e.target.classList.add('wrong-ans')
            allOption.forEach(para => {
                if(para.innerText.toLowerCase() === allQuestion[currentQuestionIndex].answer.toLowerCase()){
                    para.classList.add('right-ans')
                }   
            });
        }  
        firstClick = true;
    }
},{
    capture:false,
})

nextBtn.addEventListener('click',()=>{
   if(currentQuestionIndex < allQuestion.length-1){
    currentQuestionIndex++
    renderQuestion(allQuestion,currentQuestionIndex)
   }else{
    rightAns.innerText = rightAnsCount;
    totalQues.innerText = allQuestion.length;
    scoreParent.style.display ='block'
    optionParent.parentElement.style.display = 'none'

   }
})

playAgainBtn.addEventListener('click',()=>{
    scoreParent.style.display ='none'
    optionParent.parentElement.style.display = 'block'
    currentQuestionIndex = 0;
    renderQuestion(allQuestion,currentQuestionIndex)
})

