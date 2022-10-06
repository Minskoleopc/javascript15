
// style css cannot be retrives using style.css property
let headOne = document.querySelector('h1')
let buttonA = document.querySelector('button')
console.log(headOne.style)
let style = getComputedStyle(headOne)
console.log(style)


// inlines css ---- you retrive this
// let headTwo = document.querySelector('h2')
// console.log(headTwo.style)
// headTwo.style.color = "blue"


// actions 
//click
// buttonA.addEventListener('click',function(){
//     headOne.style.color = "red";
// })

// //dblclick()
// buttonA.addEventListener('dblclick',function(){
//     headOne.style.color = "purple";
// })
// //mouseover
// buttonA.addEventListener('mouseover',function(){
//     headOne.style.color = "orange";
// })
// // mouseout 
// buttonA.addEventListener('mouseout',function(){
//     headOne.style.color = "blue";
// })

// reload
// alert()
// confirm()
// propmpt()

//console.log(window)

// buttonA.addEventListener('click',function(){
//     window.alert("Hello")
// })

// buttonA.addEventListener('click',function(){
//     window.confirm("Hello")
// })

// buttonA.addEventListener('click',function(){
//     window.prompt("Please Enter you name ...")
// })

// buttonA.addEventListener('click',function(){
//     window.location.reload()
// })

// scrollIntoView

let IdElement  = document.querySelector('#two')
buttonA.addEventListener('click',function(){
    //window.scrollTo(IdElement)
    IdElement.scrollIntoView()
})
