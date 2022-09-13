// actual difference between for and while 
// syntax difference between whhile and for 


//intialization

// while(conditionCheck){
//     //statements
//     increment/ decrement

// }


let i = 1
while(i <= 3){
    console.log("hello")
    i ++   // 2 //3 // 4
}

// print 1 to 5 using loop

let i1 = 1

while(i1 <= 5){
    console.log(i1)
    i1 ++
}

// print 1 to 10 using while loop

let i2 = 1
while(i2 <= 10){
    console.log(i2)
    i2 ++
}

// pring 10 to 1 using while loop
let i3 = 10
while(i3 >= 1){
    console.log(i3)
    i3 --
}

// print the table to 3

// let i4 = 3
// while(i4 <= 30){
//     console.log(i4)
//     i4 = i4 + 3
// }

// break statement with while 
// let i5 = 5
// while(i5 >= 1){
//     console.log(i5) // 5 ,4,3,2
//     if(i5 == 2){
//         break;
//     }
//     i5 --  // 4 // 3 // 2
// }

// continue with while loop


// let i6 = 1

// while(i6 <= 5){
//     if(i6 == 3){
//         i6 ++ // 4
//         continue
//     }
//     console.log(i6) // 1 // 2 //4 // 5
//     i6 ++ // 2 // 3 // 5 // 6
// }

// Math object 


console.log(Math.floor(12.4)) // 12
console.log(Math.floor(13.7)) // 13
console.log(Math.floor(-13.7)) //-14

console.log(Math.ceil(23.6))  // 24
console.log(Math.ceil(-23.6)) // -23
console.log(Math.ceil(44.5)) // 45

console.log(Math.round(34.6)) // 35