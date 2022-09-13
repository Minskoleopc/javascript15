// String .. regular expression 
// why functions?

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let s = 100
let t = 50

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// keyword fn Name   (parameter)
function Calculator(x,y){ // blocks
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)   // statements
    console.log(x/y)
    console.log(x%y) 
}
Calculator(90,45) // function call via passing argument
Calculator(12,6)
Calculator(120,60)

// 3 basic function


// function without parameter and without return type 
function add(){
    console.log(9+9)
}
add()
add()
add()
add()

// function with parameter and without return type
function addB(x,y){
    console.log(x+y)
}
addB(12,6)
addB(1,3)
addB(11,3)

// function with parameter and with return type
function addC(a,b){
    return  a + b
}
let q1 = addC(1,4)
console.log(q1) // 5
console.log(q1+q1) // 10
console.log(q1-5) // 0
// different ways to write function 

// function declaration
function sub(x,y){
    return x - y
}
let q2 = sub(100,50)
console.log(q2)

// function expression
let suba = function (x,y){
    return x - y
}
let q3 = suba(100,50)
console.log(q3)

// arrow function 
let subc =  (x,y)=>{
    return x - y
}
let q4 = subc(100,50)
console.log(q4)

// comparison operator 




// logical  operator




// conditional statement