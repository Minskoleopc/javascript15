


// what is element??
//  <p id="one" class="three" name="nm">Para</p> //html element
// attribute id, class , name
// values   -one  three   nm
// tagName  - p
// Para
// html element --- type ---- object -- property and method

// retrive element ?? (css selector)

// tagName
let paraElement = document.querySelector('p')
//let paraElements = document.querySelectorAll('p')
console.log(paraElement)
//console.log(paraElements)
// id 
let elementByID = document.querySelector('#one')
console.log(elementByID)
// class
let byClassName = document.querySelector('.three')
console.log(byClassName)
// commonFormula
// tagName[attribur = "value"]
let  byCommonF = document.querySelector('p[name = "nm"]')
console.log(byCommonF)
let byC = document.querySelector('.app')
console.log(byC)
let fE = document.querySelector('.fruit')
console.log(fE)
let hE =document.querySelectorAll('.fruit')
console.log(hE)
let bothCE = document.querySelector('li[class ="fruit app"]')
console.log(bothCE)

//<h3 id = "a" class ="b" name="nm">head3</h3>

// tagName
let headThree = document.querySelector('h3')
// id 
let idElement = document.querySelector('#a')
// class
let classElement = document.querySelector('.b')
let cFv = document.querySelector('h3[name="nm"]')

console.log(cFv)
console.log(classElement)
console.log(idElement)
console.log(headThree)

//event -- click , dblclick , mouseover , mouse

// program1
headThree.addEventListener('click',function(){
    headThree.style.color = "blue";
})


// Object 
let info = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan",
        father:"shirish"
    }
}
info.parent.mother = "kanchan s"
console.log(info)