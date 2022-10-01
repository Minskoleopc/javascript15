

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('#addButton')
let input = document.querySelector('input')

buttonA.addEventListener('click',function(){
    let text = input.value
    let newE = document.createElement('li') // <li></li>
    newE.textContent = text
    ulList.appendChild(newE)
    input.value = ""
})