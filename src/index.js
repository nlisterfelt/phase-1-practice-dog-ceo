console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
function init(){
    fetch(imgUrl)
    .then(resp=>resp.json())
    .then(data => addImg(data.message))
}
document.addEventListener('DOMContentLoaded', init)

function addImg(data){
    let imgObj = document.getElementById('dog-image-container')
    for(let i=0; i<parseInt(data.length); i++){
        const image = document.createElement('img')
        image.src = data[i]
        imgObj.appendChild(image)
        console.log(imgObj)
    }
}   
