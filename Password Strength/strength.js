const eyeImg = document.querySelector('#eye-png')
const passwordFeild = document.querySelector('#password')
const passwordContainer = document.querySelector('.password-cont')
const statusMessage = document.querySelector('.status-message')

eyeImg.addEventListener('click', () => {  
    const isPassword = passwordFeild.type === 'password';
    passwordFeild.type = isPassword ? 'text' : 'password';
    eyeImg.src = isPassword ? 'images/eye-open.png' : 'images/eye-close.png';
    
});

passwordFeild.addEventListener('input',()=>{
    let passLength = passwordFeild.value.length
    if(passLength < 4){
        passwordContainer.style.borderColor= '#ff5925' 
        statusMessage.innerText = 'password is weak'
        statusMessage.style.color= '#ff5925' 
    }else if(passLength >= 4 && passLength < 8){
        passwordContainer.style.borderColor= 'yellow'
        statusMessage.innerText = 'password is medium'
        statusMessage.style.color= 'yellow'     
    }else if(passLength > 8){
        passwordContainer.style.borderColor= '#26d730' 
        statusMessage.innerText = 'password is strong'
        statusMessage.style.color= '#26d730' 
    }
    
})




