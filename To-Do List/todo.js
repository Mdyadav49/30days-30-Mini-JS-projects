const addBtn = document.querySelector('.addBtn')
const inputField = document.querySelector('.inputField')
const taskParent = document.querySelector('.task-parent')


window.addEventListener('DOMContentLoaded',()=>{
    taskParent.innerHTML = localStorage.getItem('task') || '';
});

addBtn.addEventListener('click',(e)=>{
    if(inputField.value ===''){
        alert ("You must write something")  
    }else{
        let li = document.createElement('li')
        li.innerText = inputField.value;
        let span = document.createElement('span')   
        span.innerHTML = '&times;'
        li.append(span) 
        taskParent.append(li)   
        inputField.value ='';
        setData()
    }
})

taskParent.addEventListener('click',(e)=>{
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("checked"); 
        setData()    
    }else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove() 
        setData()
    }
})
function setData(){
    localStorage.setItem('task' , taskParent.innerHTML)
}

