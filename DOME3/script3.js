
let buttonA = document.querySelector('button')
let headone = document.querySelector('h1')
let inputT= document.querySelector('input')

buttonA.addEventListener('click',function(){
    let colorText = inputT.value
    headone.style.color = colorText
    inputT.value = ""
})


