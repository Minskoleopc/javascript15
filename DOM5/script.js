// retrive the elements 
let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')
// write eventlistener 

buttonA.addEventListener('click',function(){
    let text = inputText.value
    // create element
    let newList = document.createElement('li') // <li></li>
    newList.textContent = text // <li>Papaya</li>
    ulList.appendChild(newList)
    inputText.value = ""

})




//<li></li>
// add text to element <li>text</li>
// append to ulList


