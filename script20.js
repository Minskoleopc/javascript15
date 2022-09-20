// let x = 10
// console.log(x)
// x = 400
// console.log(x)


//program 1
let a = 900
let b = a
console.log(b)
console.log(a)

a = 800
console.log(a) // 800
console.log(b) // 900

// program2
//             0         1     2 
let names = ["chinmay", "ram", "sarika"]
console.log(names)
let list = names

console.log(names)
console.log(list)

names[0] = "amit"
console.log(list)
console.log(names)

// program 3 

let info = {
    firstName: "chinmay",
    lastName: "despande"
}

let info2 = info
info2.firstName = "tanmay"
console.log(info)
console.log(info2)

// Function are called as first class function in javascript
// string as parameter to function and string as return type

function Greet(word) {
    console.log(`Hello ${word} !`)
    return `Hello ${word} !`
}
let q1 = Greet('chinmay')
console.log(q1)
console.log(typeof q1)

// number as parameter to function and number as return type 
function Addition(x, y) {
    return x + y
}
let q2 = Addition(12, 10)
console.log(q2)
console.log(typeof q2)

// boolean as a parameter to function and boolean as return type
function canDrive(above18) {
    if (above18) {
        console.log(`can drive `)
        return true
    }
    else {
        console.log('can not drive')
        return false
    }

}
let q4 = canDrive(false)
console.log(q4)

// array as a parameter to function and array as return type 
let marks = [45, 33, 44, 55, 66, 45, 65, 76, 88]
function above40(arr) {
    let q5 = arr.filter(function (el) {
        return el > 40 // [45,55,66,45,65,76,88]
    })
    return q5
}
let q6 = above40(marks)
console.log(q6)

// object as parameter to function and object as return type 

let student = {
    firstName: "chinmay",
    lastName: "deshpande"
}

function addCity(obj) {
    obj.city = "pune"
    return obj
}
let obj = addCity(student)
console.log(obj)


// let qq = 10 
// console.log(qq)


// let add = function(x,y){
//     return x + y
// }
// console.log(add)
// let q7 = add(12,14) // calling the function
// console.log(q7)

// function as a parameter to another function

let x = 10
console.log(x)

let addition = function(x,y){
    return x + y
}

function add(x,y,fn){
    // let x = 12
    // let y = 13
    // let fn = function(x,y){
    // return x + y
    //}
   let z =  fn(x,y)
   return z
}
let q10 = add(12,13,addition)
console.log(q10)

// Difference between printing definition and calling function
// console.log(addition)
// let x1 = addition(12,2) //calling the function
// console.log(x1) // 14

// function as a return type from another function
function multiplication(x,y){
    console.log(x*y) // 36
    return function(){
        console.log('retuen')
    }
}
let q11 = multiplication(12,3)
console.log(q11)

// let q11 = function(){
//     console.log('returned')
// }
q11() // call