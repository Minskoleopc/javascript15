
// console.log(Math.floor(23.4)) // 23
// console.log(Math.ceil(23.7)) // 24
// console.log(Math.round(23.3)) // 23
// console.log(Math.round(23.5)) // 24

// console.log(Math.random())  // 0 --- 1
// console.log(Math.random()*6)// 0 - 6 
// console.log(Math.floor(Math.random()*6)) // 0 , 1 , 2 , 3, 4, 5
// console.log(Math.floor(Math.random()*6)+1)// 1,2,3,4,5,6


// program 1 (once chance)
// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput = prompt('Please Enter any number between 1 to 6')
// if(randomNumber == userInput){
//     console.log("Guess is correct")
// }
// else {
//     console.log("Guess is incorrect")
// }

//randomNumber == userInput ? console.log('Guess is correct'):console.log('Guess is incorrect')


// Program 2(5times)
// let randomNumber = Math.floor(Math.random()*6)+1 // 2
// console.log(randomNumber)
// for(let i = 1  ; i <= 5 ; i++){
//     //console.log(i)
//     //console.log('hello')
//     let userInput = prompt('Please Enter any number between 1 to 6') //2
//     if(randomNumber == userInput){
//         console.log('Guess is correct')
//         break
//     }
//     else {
//         console.log('Guess is incorrect')
//     }

// }

// program 3 (till condition is meet)

let randomNumber = Math.floor(Math.random()*6)+1 // 2
console.log(randomNumber)
let userInput;
console.log(userInput) // undefined

while(userInput != randomNumber){
    userInput = prompt('Please Enter any number between 1 to 6') //2
    if(userInput == randomNumber){
        console.log('Guess is correct')
    }
    else {
        console.log('Guess is incorrect')
    }
}


https://reqres.in     /api/users     ?page=2  // API 
// Basel url           resource       queryparameter   --- Pagewise  GEt