// parameter and return type to funcion 

// number as parameter to function and number as return type 
function add(x,y){
    return x + y
}
let a = add(12,34)
console.log(a)
console.log(typeof a)
// string as a parameter and string as a return type 
function Greet(word){
    return `hello ${word}`
}
let q2 = Greet('chinmay')
console.log(q2)
console.log(typeof q2)

// boolean as a parameter to function and boolean as return type

function canDrive(ageAbove18){
    if(ageAbove18){
        console.log('you can drive')
        return true
    }
    else {
        console.log('you cannot drive')
        return false
    }
}
let q3 = canDrive(false)
console.log(q3)

// program 4 
// array as a parameter to function and array as return type
let aa = [11,22,33,44]
function addTwoToAll(arr){
    let qq1 = arr.map(function(el){
        return el + 2
    })
    return qq1
}
let q4 = addTwoToAll(aa)
console.log(q4)

//program 5
// object as a parameter to function and object as return type

let vehicle = {company:'audi',color:'blue'}
function changeColor(obj){
    obj.color = "red"
    return obj
}
let q5 = changeColor(vehicle)
console.log(q5)

// function as parameter to another function 
let x  = 10
console.log(x)

let sub = function(x,y){
    return x - y
}


function Subtraction(x,y,fn){
    //let x = 12
    //let y = 6
//     let fn = function(x,y){
//     return x - y
// }
    let qq2 = fn(x,y)
    return qq2
}
let q9 = Subtraction(12,6,sub)
console.log(q9)

// function as return type from another function
function greetHello(){
    return function(){
        console.log('Hello hi bye')
    }
}
let a11 = greetHello()
console.log(a11)

// let a11 = function(){
//     console.log('Hello hi bye')
// }

a11()


// Revision
//console.log(sub)
// let q7 = sub(12,6)
// console.log(q7)
// function as a return type 



// function declartion 
// function add(x,y){
//     return x + y
// }

// let q111 = add(12,4)
// console.log(q111)


// function expression
// let add = function(x,y){
//     return x + y
// }
// let aaa = add(12,34)
// console.log(aaa)


// arrow function
// let add = (x,y)=>{
//     return x + y
// }
// let aaa = add(12,34)
// console.log(aaa)


// 8.00 am 
// 7:30 pm





