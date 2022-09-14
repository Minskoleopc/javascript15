// 9 am -->    actual difference for and while loop , array , object 
// 8.00 am --> actual difference for and while loop , array , object 
// 9.00 am  --> sunday

// for(intilialzation ; conditionCheck ; increment/decrement){
//     //statments
// }

// // // intilization 

// // while(condition){
// //     // statments 
// //     // increment/ decrement
// // }

// // if else
// // 5 chances --- coin toss - head break  finite chance  ======> for
// // toss until  the head comes ----- chances till condition is mate ===> while loop
// // code randomNumber --- (1,2,3,4,5,6) --- dice

// console.log(Math.floor(23.5)) // 23
// console.log(Math.ceil(44.5)) // 45
// console.log(Math.round(44.4)) // 44
// console.log(Math.random())  // 0 -1
// console.log(Math.random()*6)  // 0 - 6 // 
// console.log(Math.floor(Math.random()*6)+1)

// one 

// let randomNumber = Math.floor(Math.random()*6)+1 // 3
// console.log(randomNumber)
// let userInput = prompt('Enter any number between 1 to 6') //3
// if(randomNumber == userInput){
//     console.log('you guess is correct')
// }
// else {
//     console.log('you guess is incorrect')
// }
//randomNumber == userInput ?console.log('Guess is correct'):console.log('Guess is incoorect')


// five chances 

// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// for(let i = 1 ; i <= 5 ; i++){
//     //console.log(i) 1-5
//     //console.log('hello') // print hello 5 tyms
//     let userInput = prompt('Enter any number between 1 to 6')
//     if(userInput == randomNumber){
//         console.log('Guess is correct')
//         break
//     }
//     else {
//         console.log('Guess is incorrect , please try again')
//     }
// }

// until condition is met 
let randomNumber2 = Math.floor(Math.random()*6)+1 // 3
console.log(randomNumber2)
let userInput;
//console.log(userInput) undefined
while(userInput != randomNumber2){
    userInput = prompt('Enter any number between 1 to 6') // 3
    if(userInput == randomNumber2){
        console.log('Guess is correct')
    }
    else {
        console.log('Guess is incorrect')
    }
}

// 7:30pm





