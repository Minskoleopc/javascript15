

// string 

let firstName = "chinmay"
let firstName2 = 'amol'
let firstName3 = `sarika`

let city = "pune"
console.log(city)

// 0  1  2  3 
// p  u  n  e

console.log(city[0])
console.log(city[1])

// Object ----

// Type 
// Introvert     Extrovert
// speaks less  speaks more
// calm          loud
// less social   more


let x1 = 10   // 23.4,55,66,77
console.log(typeof x1)

let x2 = "chinmay"
console.log(typeof x2)

let x3 = true
console.log(typeof x3)


// Object 

// Human -- amol
//property -- age , weight , height ,color
//walk(),talk()

// Vehicle - Audi 
// property - color , modelNo , type , 
// method - stat() ,stop()

// Bank - ICIC
// property - accNo , accName , bal , address ,IFSC
// method - deposit(), withdrawl()

// method - Gym 
// action excercise 
// return muscles

let country = "India"
let q1  = country.toUpperCase()
console.log(q1)

let q2 = country.toLowerCase()
console.log(q2)

let q3 = country.includes('d')
console.log(q3)

let q4 = country.includes('dia')
console.log(q4)

//country = "India"

// 0  1  2  3  4
// I  n  d  i  a
//-5 -4 -3 -2 -1  // slice

let q5 = country.indexOf('n')
console.log(q5)

let q6 = country.indexOf('O')
console.log(q6)

//country = "India"
// 0  1  2  3  4
// I  n  d  i  a
//-5 -4 -3 -2 -1  // slice

let q7 = country.startsWith('I')
let q8 = country.startsWith('Ind')
console.log(q7)
console.log(q8)

let q9 = country.endsWith('a')
let q10= country.endsWith('Dia')
console.log(q9)
console.log(q10)

let fName = " ninad"
console.log(fName.length)
let q11 = fName.trimStart()
console.log(q11.length)

let fName2 = " ninad "
console.log(fName.length) //7
let q12 = fName.trimEnd()
console.log(q12.length)

let fName3 = " ninad "
console.log(fName3.length) //7
let q13 = fName3.trim()
console.log(q13.length) // 5

let fName4 = "amol"
// 0 1 2 3
// a m o l 

let a1 = fName4.charAt(1)
console.log(a1)



let country2 = "India"
// 0  1  2  3  4
// I  n  d  i  a
//-5 -4 -3 -2 -1  // slice

//country2.slice(startIndex,endIndex(not inclusive))

console.log(country2.slice(2))
console.log(country2.slice(1,4))
console.log(country2.slice(2,4))
console.log(country2.slice(-4))
console.log(country2.slice(-4,-1))
console.log(country2.slice(1,-1))
console.log(country2.slice(-5,-1))
console.log(country2.slice(-5,0))
console.log(country2.slice(-1,-4))











