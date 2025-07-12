
// var cutIcon = document.querySelector('.toast::after')

const verticalPosition = document.querySelector('.vertical-position')
const horizontalPosition = document.querySelector('.horizontal-position')
const toastType = document.querySelector('.toast-type')
const toastButton = document.querySelector('.toast-but')
const toastContainer = document.querySelector('.toast-cont')
const inputValue = document.querySelector('#inputValue')
const toastrange = document.querySelector('#toast-range')

function animation(element){
    element.classList.add('toleft')
    setTimeout(()=>{
    element.classList.remove('toleft')
    element.classList.add('toright')
    setTimeout(()=>{
        element.remove()
    },380)
    },toastrange.value*100)
}

toastButton.addEventListener('click',()=>{
    var toastDiv = document.createElement('div')
    toastDiv.classList.add('toast')
    toastDiv.innerText = inputValue.value
    toastContainer.append(toastDiv)
    animation(toastDiv)
    
    if(toastType.value === 'success'){
        toastDiv.classList.add('success')
    }else if(toastType.value === 'error'){
        toastDiv.classList.add('error')
    }else if(toastType.value === 'warning'){
        toastDiv.classList.add('warning')
    }else{
        toastDiv.classList.add('info')
    }

    if(verticalPosition.value === 'right'){
        toastContainer.classList.add('right')
    }else{
        toastContainer.classList.remove('right')
    }

    if(horizontalPosition.value === 'bottom'){
        toastContainer.classList.add('bottom')
    }else{
        toastContainer.classList.remove('bottom')
    }
})
