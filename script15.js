// //program 1
// let birthyear =  [1989,1990,1991,1992]
// let age = []
// // [33,32,31,30]
// for(let i = 0 ; i < birthyear.length ; i++){
//     //console.log(i)
//     //console.log(birthyear[i])
//     console.log(2022 - birthyear[i])
//     let ag = 2022 - birthyear[i]
//     age.push(ag)
// }
// console.log(age)

// let q1 = birthyear.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return 2022 - el
// })
// console.log(q1)

// // program 2 

// let d = [11,22,33,44]
// //[13,24,35,46]
// let q2 = d.map(function(el,index,arr){
//     return el + 2
// })
// console.log(q2)

// // program 3

// let marks = [22,33,44,55,22,33,44,55,66,77]
// let above40 = []
// for(let i = 0 ; i < marks.length ; i++){
//     //console.log(i)
//     //console.log(marks[i])
//     if(marks[i] > 40){
//         above40.push(marks[i])
//     }
// }
// console.log(above40)

// let q3 = marks.filter(function(el,index,arr){
//     return el > 40
// })
// console.log(q3)

// // program3

// let mks = [11,22,33] // 6
// let sum = 0
// for(let i = 0 ; i < mks.length ; i++){
//    // console.log(i)
//    // console.log(mks[i])
//    sum = sum + mks[i]
//    //     0  +  11   ====> 11
//    //     11 +  22   ====> 33
//    //     33 +  33   ====> 66
// }
// console.log(sum)

// let q4 = mks.reduce(function(acc,el,index,arr){
//     return acc + el // 11 , 33 , 66
// },0)
// console.log(q4)

// // program 4 

// let names = ["chinmay","dinesh","ram"]
// for(let i = 0 ; i < names.length ; i++){
//     console.log("welcome "+names[i])
// }
// names.forEach(function(el,index,arr){
//     console.log("welcome "+ el)
// })

// // program 5
// //        0  1  2  3  4
// let n = [22,33,44,22,32]
// // [33,44,32]
// let q5 = n.filter(function(el,index,arr){
//     return el > 30
// })
// console.log(q5)

// let q6 = n.find(function(el,index,arr){
//     return el > 30
// })
// console.log(q6)

// let q7 = n.findIndex(function(el,index,arr){
//     return el > 30
// })
// console.log(q7)

// n = [2,33,44,22,32]

// let q8 = n.every(function(el,index,arr){
//     return el > 10
// })
// console.log(q8)

// let q9 = n.some(function(el,index,arr){
//     return el > 100
// })
// console.log(q9)

// // map(), filter(), reduce(), forEach(),find(),findIndex(),some(),every()


// let o = [3,9,77,88,99]
// let q12 = o.filter(function(el){
//     return el % 3 == 0
// })
// console.log(q12)

let h = "I am learning javascript and javascript is fun"
let q7 = h.replaceAll('javascript','python')
console.log(q7)