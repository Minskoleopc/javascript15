// // program 1
// //                0    1     2   3
// let birthYear = [1989,1990,1991,1992]
// let ages = []
// // age = currentYear - birthYear
// //[33,32,31,30]

// for(let i = 0 ; i < birthYear.length ; i++){
//     //console.log(i)
//     //console.log(2022 - birthYear[i])
//     let calA = 2022 - birthYear[i]
//     ages.push(calA)
// }
// console.log(ages)

// // program2 

// let sum = [11,22,33,44,55]
// let tenM = []
// //[110,220,330,440,550]
// for(let i = 0 ; i < sum.length ; i++){
//     //console.log(i)
//     //console.log(sum[i])
//     //console.log(sum[i] * 10)
//     c10 = sum[i] * 10
//     tenM.push(c10)
// }
// console.log(tenM)

// // program 3 
// //           0  1  2  3   4  5 6  7
// let marks = [22,33,44,22,33,44,55,77]
// let above40 = []
// //[44,44,55,77]

// for(let i = 0 ; i < marks.length ; i++){
//     //console.log(i)
//     //console.log(marks[i])

//     if(marks[i] > 40){
//         above40.push(marks[i])
//     }
// }
// console.log(above40)
// // program 4

// let marks2 = [11,22,33,44] // 110
// let sumA = 0
// for(let i = 0 ; i < marks2.length ; i++){
//     //console.log(i)
//     //console.log(marks[i])
//     sumA = sumA + marks2[i]
//     //       0   +  11   =====> 11
//     //       11  +  22   =====> 33
//     //       33  +  33   =====> 66
//     //       66  +  44   =====> 110 
// }
// console.log(sumA)

// // program 5
// let cities = ["pune","mumbai","nagpur","wardha"]
// for(let i = 0 ; i < cities.length ; i++){
//     console.log("welcome "+cities[i])
// }

let birthYear = [1989,1990,1991,1992]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    let ag = 2022 - birthYear[i]
    ages.push(ag)
}
console.log(ages)

// Array 

let q1 = birthYear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2022 - el  
   //(2022-1989)
   //(2022-1990)
   //(2022 -1991)
   //(2022-1190)
})
console.log(q1)


let addTwo = [22,33,44,55]
// [24,35,46,57]
let q2 = addTwo.map(function(el,index,arr){
    return el + 2
})
console.log(q2)


// program 2

let marks = [22,33,44,22,33,44,55,77]
let above40 = []

for(let i = 0 ;i < marks.length ; i++){
    if(marks[i] > 40){
        above40.push(marks[i] ) 
    }
}
console.log(above40)

let q3 = marks.filter(function(el,index,arr){
    return el > 40
})
console.log(q3)

// program 3

let sum = [11,22,33,44,55]
let total = 0

for(let i = 0 ; i < sum.length ; i++){
    total = total + sum[i]
    //       0   +    11    =====>>   11
    //       11  +    22    =====>>   33
    //       33  +    33    ======>   66
    //       66  +   44     =====>  110
    //       110  +  55     ======> 165
}
console.log(total)

// reduce 

let q4 = sum.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q4)

// ------ map --- array 
//------- filter ---- array 
// ------reduce ------ value

// program4 

let cities = ["pune","nagpur","wardha","banglore"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+cities[i])
}

cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program5 

let j = [22,33,44,11,22,33,44,55,66,77,33]

let q6 = j.filter(function(el,index,arr){
    return el > 40
})
console.log(q6)

let q7 = j.find(function(el,index,arr){
    return el > 40
})
console.log(q7)

let q8 = j.findIndex(function(el,index,arr){
    return el > 40
})
console.log(q8)

// map(), filter(),reduce(),forEach(),find(),findIndex()
// some() , every() ----> boolean (true or false)


let w = [22,33,44,55,66,22,33,44,55,6]
let q9 = w.every(function(el,index,arr){
    return el > 10
})
console.log(q9)

let q10 = w.some(function(el,index,arr){
    return el > 10000
})
console.log(q10)