
// DOM --- document object model


// selecting the element (retrive the element retrive)

// what is element??
//<p id = "two"  class = "three" name = "nm">para2</p>
// p  tagName
// attribute id , class name and two three ,nm are values respectively
// para2 - htmltext
// all above is htmlelement ---> object --> property and method

// byTagName
let byTagName = document.querySelector('p')
console.log(byTagName)

// byId
let byId = document.querySelector('#two')
console.log(byId)
// byClass
let byClassName = document.querySelector('.three')
console.log(byClassName)
//byCommonF
// tagName[attribute='value']
let byCommF = document.querySelector('p[class="three"]')
console.log(byCommF)

let firstElement = document.querySelector('li')
console.log(firstElement)

let allLi = document.querySelectorAll('li')
console.log(allLi)

// program 1
// click , dblcick , mouseover , mouseout

byId.addEventListener('dblclick',function(){
    byId.style.color = "orange";
})

let info = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan",
        father:"mother"
    }
} 
info.parent.mother = "kanchan s"

