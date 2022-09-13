// String 
// Javascript --- > object , property and method
// method action and return type 

let firstName = "chinmay"
let a = firstName.toUpperCase()
console.log(a)

let lastName = "Deshpande"
let b = lastName.toLowerCase()
console.log(b)


let fatherName  = "shirish"
let c =fatherName.includes('s')
console.log(c)
let d = fatherName.includes('ris')
console.log(d)
let e = fatherName.includes('S')
console.log(e)

let fruit = "Apple"
let q1 = fruit.startsWith("App")
console.log(q1)
let q2 = fruit.startsWith("Bpp")
console.log(q2)

let q3 = fruit.endsWith('e')
console.log(q3)
let q4 = fruit.endsWith('ple')
console.log(q4)

let q5 = fruit.endsWith('PLE')
console.log(q5)

let vegetable = "tomato"
console.log(vegetable.length)

// -----------------------------------------> 


let car = "Audi"
// string stores the value by index
// 0 1 2 3
// A u d i

console.log(car[0])
console.log(car[2])
console.log(car[car.length-1])
// length -1 is always the last index

let w1 = car.indexOf('u')
console.log(w1)

let w2 = car.indexOf('I')
console.log(w2)

let surname = "DESHPANDE"

// 0   1   2   3   4   5   6   7   8
// D   E   S   H   P   A   N   D   E
//-9  -8  -7  -6  -5  -4  -3  -2   -1

//surname.slice(startIndex, endIndex(not inclusive))

let w3 = surname.slice(3)
console.log(w3)
console.log(surname.slice(4,8))
console.log(surname.slice(6))
console.log(surname.slice(2,5))
console.log(surname.slice(-4))
console.log(surname.slice(-8,-4))
console.log(surname.slice(1,-4))
console.log(surname.slice(-7,4))
console.log(surname.slice(-1,-4))

// slice() , indexof()

let j = " Ninad"
console.log(j.length)
let w5 = j.trimStart()
console.log(w5.length)

let j2 = " Ninad "
console.log(j2.length) //  7
let w6 = j2.trimEnd()
console.log(w6.length) // 6

let j3 = " Ninad "
console.log(j3.length) // 7
let w7 = j3.trim()
console.log(w7.length)  //5

//charAt
// 0 1 2 
// R a m
let j4 = "Ram"
let tt = j4.charAt(2)
console.log(typeof j4)
console.log(tt)
