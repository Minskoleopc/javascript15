
// <h3 id = "one" class = "two"  name ="nm">Heading One</h3>
let byId = document.querySelector('#one')
let byClass = document.querySelector('.two')
let tagName = document.querySelector('h3')
let byCommF = document.querySelector('h3[name="nm"]')

console.log(byId)
console.log(byClass)
console.log(tagName)
console.log(byCommF)

tagName.addEventListener('click',function(){
    tagName.style.color = "red"
})



let info = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan",
        father:"shirish"
    }

}
info.parent.mother = "kanchan s"


