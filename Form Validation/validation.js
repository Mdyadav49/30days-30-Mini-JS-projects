const fullName = document.querySelector('#full-name')
const phoneNo = document.querySelector('#phone-no')
const EmailId = document.querySelector('#Email')
const message = document.querySelector('#massage')
const submitBtn = document.querySelector('.submit')

const nameError = document.querySelector('.name-error')
const emailError = document.querySelector('.email-error')
const phoneError = document.querySelector('.phone-error')
const messageError = document.querySelector('.message-error')
const submitError = document.querySelector('.submit-error')

let namestatus = false;
let emailstatus = false;
let phonestatus = false;
let messagestatus = false;
fullName.addEventListener('input',()=>{
    if(fullName.value.length === 0){
        nameError.innerText = 'Name is required'
    }else if(!fullName.value.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)){
        nameError.innerText = 'write full name';
    }else{
        nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #10e55a;"></i>'
        namestatus = true;
    }
})

phoneNo.addEventListener('input',(e)=>{
    e.target.value = e.target.value.replace(/\D/g, '');
    if(phoneNo.value.length == 0){
        phoneError.innerText ='phone no is required' 
    }else if(phoneNo.value.length < 10){
       phoneError.innerText ='phone no should be 10 digits' 
    }else{
        phoneNo.value = `${phoneNo.value.slice(0,3)}-${phoneNo.value.slice(3,6)}-${phoneNo.value.slice(6)}`
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #10e55a;"></i>'
        phonestatus = true;
    }
})


EmailId.addEventListener('input',(e)=>{
    const emailValue = e.target.value;
    if(emailValue.length == 0){
        emailError.innerText = 'Email id required'
    }else if(!emailValue.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerText = 'Envalid Email id';
    }else{
        emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #10e55a;"></i>'
        emailstatus = true;
    }
})

message.addEventListener('input',()=>{  
    if(message.value.length == 0){
        messageError.innerText = 'Message is required'
    }else if(message.value.length < 30){
        let requiredLength = 30 - message.value.length
        messageError.innerText = `${requiredLength} character are required `
    }else{
        messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #10e55a;"></i>'
        messagestatus = true;
    }
})

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault(); 
    if(!(messagestatus && phonestatus && emailstatus && namestatus)){
        submitError.style.display = 'block';
        submitError.innerText = 'Please fix error to submit';
        setTimeout(function(){
           submitError.style.display = 'none'; 
        },2000)
    }else{
        submitError.style.display = 'block'; 
        submitError.style.color = 'green';
        submitError.innerText = 'submitted';
    }
})

