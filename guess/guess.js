let number = Math.floor(Math.random()* 101);
const input = document.querySelector('[type="number"]')
const Congrats = document.querySelector("#congrats")
const guess = document.querySelector("#guess")
const start = document.querySelector('[type="reset"]')

input.addEventListener("change",(e)=>{
    guess.innerText = guess.innerText + e.currentTarget.value + ","
    switch(true){
        case (e.currentTarget.value == number): {
            Congrats.innerText = "You got it! Congrats"  
            break
        }
        case (e.currentTarget.value > number): {
            Congrats.innerText = "too high"  
            break
        }
        case (e.currentTarget.value < number): {
            Congrats.innerText = "too low"  
            break
        }
    }
})
if(input.value == ''){
    start.addEventListener('click',()=>{
        input.value = '';
        Congrats.innerText =''
        guess.innerText = ''
        
    })
}

