let headThree =document.querySelector('h3')
let para = document.querySelector('p')
let buttonA = document.querySelector('button')

console.log(headThree)
console.log(para)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    para.textContent = "abhisha"
    headThree.style.color = "green"
})






// explaination
// console.log(para.textContent)
// console.log(para['textContent'])
// para.textContent = "Abhisha"

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// info.firstName = "sarika"
// console.log(info)