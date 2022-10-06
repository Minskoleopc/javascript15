let headOne = document.querySelector('h1')
//console.log(headOne.style)
// read only mode // style.css
//console.log(getComputedStyle(headOne))
let headTwo = document.querySelector('h2')
//console.log(headTwo.style)

// button
let buttonB = document.querySelector('button')

// Events 
// click , dblclick , mouseover , mouseout , reload , scrollIntoView
// alert() , cofirm() , prompt()

buttonB.addEventListener('click', function () {
    let headTwo = document.querySelector('h2')
    headTwo.style.color = "red"
})

buttonB.addEventListener('dblclick', function () {
    let headTwo = document.querySelector('h2')
    headTwo.style.color = "purple"
})

buttonB.addEventListener('mouseover', function () {
    let headTwo = document.querySelector('h2')
    headTwo.style.color = "green"
})

buttonB.addEventListener('mouseout', function () {
    let headTwo = document.querySelector('h2')
    headTwo.style.color = "yellow"
})

// window

// let alertButton = document.querySelector('.alert')
// alertButton.addEventListener('click',function(){
//     alert('Hello i am js alert')
// })

// let confirmButton = document.querySelector('.confirm')
// confirmButton.addEventListener('click',function(){
//     confirm('I am new to js ... is it okay?')
// })

// let promptButton = document.querySelector('.prompt')
// promptButton.addEventListener('click',function(){
//     let userCity = prompt('Please type you city')
//     document.write(`<h1>${userCity}</h1>`)
// })

let readButton = document.querySelector('.reload')
readButton.addEventListener('click',function(){
    window.location.reload()
})

let neLi = document.querySelector('#one')
let scrollButton = document.querySelector('.scrollv')
scrollButton.addEventListener('click',function(){
    neLi.scrollIntoView()
})