let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)


let x = "hello"
let x1 = 'hello1'
let x2 = `hello2`

console.log(x)
console.log(x1)
console.log(x2)


// number + number =====> number 
// string + number =====> string 
// number + string =====> string 
// string + string =====> string

let a = 10
let b = 20
let c = "hello"
let d = "h1"

console.log(a+b)
console.log(c+b)
console.log(a+c)
console.log(c+b)
console.log(a+b+c)
// number + number + string 
//  10     + 20    + hello
//       30        + hello 
//'30hello'
console.log(c+b+a)
// string + number + number
// 'hello'+  20    + 10
//    'hello20'    + 10
//      'hello2010'
 

// string concat

let firstN = "chinmay"
let lastN = "deshpande"
// My firstName is chinmay and last Name is deshpande

// old way 
console.log("My firstName is "+firstN+" and lastName is "+lastN)
// new way
console.log(`My firstName is ${firstN} and lastName is ${lastN}`)

