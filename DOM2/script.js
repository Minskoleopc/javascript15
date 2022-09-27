
document.querySelector('h1')
.addEventListener('click',function(){
    document.querySelector('h1').textContent = "ram"
})

//<p id ="paraOne" class = "paraTwo" name = "paraThree" >Retrive element</p>

// tagName 

let byTagName = document.querySelector('p')
console.log(byTagName)

// id
let byId = document.querySelector('#paraOne')
console.log(byId)

// class
let byClass = document.querySelector('.paraTwo')
console.log(byClass)
// commonformula
// tagName[attribute="value"]

let byCommonF = document.querySelector('p[name="paraThree"]')
console.log(byCommonF)