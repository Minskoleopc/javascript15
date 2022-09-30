
let buttonA = document.querySelector('button')
let inputT = document.querySelector('input')
let headingOne = document.querySelector('h1')

console.log(buttonA)
console.log(inputT)
console.log(headingOne)

buttonA.addEventListener('click',function(){
    let colorText = inputT.value
    headingOne.style.color = colorText
    inputT.value = ""
})