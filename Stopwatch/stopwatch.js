const hourElem = document.querySelector('.hour')
const minuteElem = document.querySelector('.minute')
const secondElem = document.querySelector('.second')
const startBtn  = document.querySelector('#startbtn')
const stopBtn  = document.querySelector('#stopbtn')
const resetBtn  = document.querySelector('#resetbtn')

let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;
let shouldStartTimer = true;


function settingInterval(){
    intervalId = setInterval(()=>{
    seconds++ 
    if(seconds < 10){
        secondElem.innerText = `0${seconds}`
    }else {
    secondElem.innerText = seconds
    }

    if(seconds === 60){
        seconds = 0;
        secondElem.innerText = `0${seconds}`
        minutes++

        if(minutes < 10){
            minuteElem.innerText = `0${minutes}`
        }else {
            minuteElem.innerText = minutes
        }
    }

    if(minutes === 60){
        minutes = 0;
        minuteElem.innerText = `0${minutes}`
        hours++

        if(hours < 10){
            hourElem.innerText = `0${hours}`
        }else{
            hourElem.innerText = hours
        }
    }
},1000)
}

function clearingInterval(){
    clearInterval(intervalId)
}

startBtn.addEventListener('click',()=>{
    if(shouldStartTimer){
        settingInterval()
        shouldStartTimer = false;
    }
})

stopBtn.addEventListener('click',()=>{
    if(!shouldStartTimer){
        clearingInterval()
        shouldStartTimer = true;
    }
})
resetBtn.addEventListener('click',()=>{
    clearingInterval()
    hours = 0;
    minutes = 0;
    seconds = 0;
    secondElem.innerText = `0${seconds}`
    minuteElem.innerText = `0${minutes}`
    hourElem.innerText = `0${hours}`
    shouldStartTimer = true;
})

