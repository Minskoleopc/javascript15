// program 1

//<h1 id = "one" , class ="two" , name ="three">HeadingOne</h1>

let headingOne = document.querySelector('h1')
let className = document.querySelector('.two')
let idName =  document.querySelector('#one')
let commF = document.querySelector('h1[name="three"]')

console.log(headingOne)
console.log(className)
console.log(idName)
console.log(commF)

headingOne.addEventListener('click',function(){
    headingOne.style.color = "red";
})


