let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


function renderOneToy(toys){
const card = document.createElement('div')
card.classList.add('card')
const header = document.createElement('h2')
header.textContent = `${toys.name}`
card.appendChild(header)
const img =document.createElement('img')
img.setAttribute("src",`${toys.image}`)
img.classList.add('toy-avatar')
card.appendChild(img)
const numLikes = document.createElement('p')
numLikes.textContent = `${toys.likes} Likes`
card.appendChild(numLikes)
const likeButton = document.createElement('button')
likeButton.classList.add('like-btn')
likeButton.setAttribute("id",`${toys.id}`)
likeButton.textContent = "Like ❤️"
card.appendChild(likeButton)

document.querySelector('#toy-collection').appendChild(card)
}




function getInfo (){
  fetch("http://localhost:3000/toys")
.then(res => res.json())
.then(toys => toys.forEach(toys => renderOneToy(toys)))

};
getInfo()

// const oldButton = document.querySelector('.submit')
// const newButton = document.createElement('button')
// oldButton.parentNode.replaceChild(newButton, oldButton)
// newButton.classList.add('submit')
// newButton.textContent = "Create Toy"

const nameInput = document.querySelectorAll('input')[0]
const imgInput = document.querySelectorAll('input')[1]
const toyForm = document.getElementsByClassName('add-toy-form')


function makeNewToy(toyform){
  console.log(JSON.stringify(toyform))
}
toyForm.addEventListener('submit', (e) =>{

  e.preventDefault()

  let toyObj = {
nameInput:e.target.name.value,
imgInput:e.target.img_url.value
}
renderOneToy(toyObj)
createNewToy(toyobj)
})

function createNewToy(toyObj){
  console.log(JSON.stringify(toyObj))
}
