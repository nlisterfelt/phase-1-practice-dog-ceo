//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all"
let images = []
let breeds =[]
let dropDownLetter = 'a'

function init(){
    const dropDownMenu = document.getElementById('breed-dropdown')

    fetch(imgUrl)
    .then(resp=>resp.json())
    .then(data => addImg(data.message))

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => addBreed(data.message))

    document.addEventListener('click', e => {
        const parentID = e.target.parentNode.id
        if(parentID==='dog-breeds'){
           e.target.style.color = 'blue' 
        }  
    })

    dropDownMenu.addEventListener('change',e => {
        dropDownLetter = e.target.value
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => addBreed(data.message))
    })
}
document.addEventListener('DOMContentLoaded', init)

function addImg(data){
    const imgObj = document.getElementById('dog-image-container')
    data.forEach(img => {
        const image = document.createElement('img')
        image.src = img 
        imgObj.appendChild(image)
    })
}   

function addBreed(obj){
    const dogBreedsContainer = document.getElementById('dog-breeds')
    dogBreedsContainer.innerHTML = ''
    breeds = Object.keys(obj)
    breeds.forEach(breed => {
        const firstLetter = breed.charAt(0)
        if(firstLetter===dropDownLetter){
            const breedHolder = document.createElement('li')
            
            breedHolder.innerText = breed
            dogBreedsContainer.appendChild(breedHolder)
        }
    })
}

