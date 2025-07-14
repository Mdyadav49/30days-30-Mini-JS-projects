const generateBtn = document.querySelector('.generate-btn')
const outputImage = document.querySelector('.output-image')
const inputData = document.querySelector('[type="text"]')

generateBtn.addEventListener('click',()=>{
    if(inputData.value.length > 0 ){  
        generate(inputData.value)
    }
})

async function generate(value) {
    try{
        const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}&bgcolor=255-255-0`);
        console.log(response)
        outputImage.src = response.url
    }catch(error){
        console.log('fetch failed:',error);
    }
}