
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#addButton')

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newE = document.createElement('li') // <li></li>
    newE.textContent = text  // <li>papaya</li>
    ulList.appendChild(newE)
    inputText.value = ""
    
})
