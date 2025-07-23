const body = document.querySelector("body")
const modeOfBody = document.querySelector("#light")
const modeOfContainer = document.querySelector("#lightcont")
const container = document.querySelector(".child2")

var modeValue = JSON.parse(localStorage.getItem("mode")) || {parentmode: "0",childmode:"0"}

if(modeValue.parentmode == "1"){
    body.classList.add("block")
    modeOfBody.checked = true
}else body.classList.remove("block")


if(modeValue.childmode == "1"){
    container.classList.add("block1")
    modeOfContainer.checked = true
}else container.classList.remove("block1")

modeOfBody.addEventListener('click',(e)=>{
    body.classList.toggle("block")
    modeValue.parentmode = body.classList.contains("block") ? "1" : "0";
    localStorage.setItem("mode",JSON.stringify(modeValue))
})
modeOfContainer.addEventListener('click',(e)=>{
    container.classList.toggle("block1")
    modeValue.childmode = container.classList.contains("block1") ? "1" : "0";
    localStorage.setItem("mode",JSON.stringify(modeValue))
})