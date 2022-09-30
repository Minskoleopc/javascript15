
let headingOne = document.querySelector('h1')
let buttonA = document.querySelector('button')
let paraE = document.querySelector('#one')
//<p id = "one"  class = "two" name = "nm">para</p>

console.log(headingOne)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    headingOne.style.color ="red";
    paraE.textContent = "Chinmay D";
})
console.log(paraE.textContent)












// let info = {
//     fullName:"Chinmay D"
// }
// console.log(info.fullName)
// console.log(info['fullName'])
// // update 
// info.fullName = "Poorva V"
// info['fullName'] = "Poorva V"