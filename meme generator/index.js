const imgContainer = document.querySelector('#imgcon')
const generateButton = document.querySelector('#genButton')
const memetitle = document.querySelector('#memetitle')

async function memeGen(){
    try{
        const response = await fetch('https://meme-api.com/gimme/wholesomememes');
        const data = await response.json();
        memetitle.innerText = data.title
        imgContainer.src = data.url
}catch{
    console.log(`typeError: something is wrong`)
}
}
setTimeout(()=>memeGen() ,200)

generateButton.addEventListener('click',()=> 
    memeGen()
)



