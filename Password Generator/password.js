const generateBtn = document.querySelector('.generate-btn')
const passwordInput = document.querySelector('#password')
const copyIcon = document.querySelector('.copy-icon')

const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbol = '!@#$%^&*()_+{}[]<>?/|'
const allchars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?/|'

const lengthOfPassword = 12;

generateBtn.addEventListener('click',()=>{
    generatePassword()
})

function generatePassword(){
    let password =''
    password += UpperCase.at(Math.floor(Math.random() * UpperCase.length))
    password += lowerCase.at(Math.floor(Math.random() * lowerCase.length))
    password += numbers.at(Math.floor(Math.random() * numbers.length))
    password += symbol.at(Math.floor(Math.random() * symbol.length))
    while(lengthOfPassword > password.length){
        password += allchars.at(Math.floor(Math.random() * allchars.length))
    }

    passwordInput.value = password 
}

copyIcon.addEventListener('click',()=>{
    if(passwordInput.value === '') return ;
    navigator.clipboard.writeText(passwordInput.value)
    .then(()=>{
        let copymassage = document.querySelector('.copied-massage')
        copymassage.style.display = 'inline';

        setTimeout(()=>{
        copymassage.style.display = 'none'; 
        },1500)
    })
})