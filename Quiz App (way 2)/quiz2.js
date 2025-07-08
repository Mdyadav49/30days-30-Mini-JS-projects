const multipleQnA =[{
    question:"Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
},
{
    question:"Which is the largest animal in the world?",
    answer:"Blue Whale",
    options:["Blue Whale","Elephant","Shark","Giraffe"]
},
{
    question:"Which planet is known as the Red Planet?",
    answer:"Mars",
    options:["Venus","Saturn","Mars","Jupiter"]
},
{
    question:"What is the chemical symbol for water?",
    answer:"H2O",
    options:["H2O","O2","NaCl","CO2"]
},
{
    question:"What is the capital of India?",
    answer:"Delhi",
    options:["Mumbai","Delhi","lucknow","kolkata"]   
},
{
    question:" Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
},
{
    question:" Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
},
{
    question:" Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
},
{
    question:" Which is the smallest country in the world?",
    answer:"vatican City",
    options:["Vatican City","Nepal","Bhutan","Sri Lanka"]
}
]

const optionsParent= document.querySelector('.options-parent')
const nextBtn = document.querySelector('.next-btn')
const questionText = document.querySelector('.question-text')
const scoreParent = document.querySelector('.score-parent')
const quizParent = document.querySelector('.quiz-parent')
const ansDisplay = document.querySelector('.ans-display')
const totatQuestion = document.querySelectorAll('.total-ques')
const playBtn = document.querySelector('.play-btn')
const currentQuetionParent = document.querySelector('.current-quetion-parent')
const currentQuestion = document.querySelector('.current-question')


totatQuestion[0].innerText = multipleQnA.length;

let optionList = [] 
let totatQuestionCount = multipleQnA.length;
let multipleQnAIndex = 0;
let rightAnsCount = 0;

optionsParent.addEventListener('click',(e)=>{
    if(e.target.tagName ==='BUTTON'){ 
        nextBtn.style.display = 'block';
        if(e.target.innerText.toLowerCase() === multipleQnA[multipleQnAIndex].answer.toLowerCase() ){
            e.target.classList.add('right-ans')
            rightAnsCount++
        }else{
            e.target.classList.add('wrong-ans')
        }
            Array.from(optionsParent.children).forEach((button)=>{
                if(button.innerText.toLowerCase() === multipleQnA[multipleQnAIndex].answer.toLowerCase()){
                    button.classList.add('right-ans')
                }
                button.disabled = true;
            })
        
    }
})

function createNextQnA(){
    nextBtn.style.display = 'none';
    currentQuetionParent.style.display= 'block'
    currentQuestion.innerText = multipleQnAIndex + 1; 
    questionText.innerText =  (multipleQnAIndex + 1) + ". " +multipleQnA[multipleQnAIndex].question
    optionsParent.innerHTML = ''
    multipleQnA[multipleQnAIndex].options.forEach((eachbutton)=>{
        let button = document.createElement('button')
        button.innerText = eachbutton;
        button.classList.add('btn')
        optionsParent.appendChild(button)
    })
}

nextBtn.addEventListener('click',(e)=>{
    multipleQnAIndex++
    if(multipleQnAIndex < multipleQnA.length){
        createNextQnA()
    }else{
        quizParent.style.display='none';
        ansDisplay.innerText = rightAnsCount;    
        totatQuestion[1].innerText = totatQuestionCount;
        scoreParent.style.display = 'block';
        playBtn.innerHTML = 'Play Again'
    }
})
playBtn.addEventListener('click',()=>{
    multipleQnAIndex = 0;
    rightAnsCount = 0;
    quizParent.style.display='block';
    scoreParent.style.display = 'none';
    createNextQnA()
})
