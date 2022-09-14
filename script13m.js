//            0         1      2        3
let names = ["apple","mango","banana","grapes"]
console.log(names[0])

// loop 
for(let i = 0 ; i < 4 ; i++){
    //console.log(i)  
    console.log(names[i])
    // i -- 0
    // i -- 1
    // i -- 2
    // i -- 3
}

// Object ->
// Human --- amol (Object)
// Property ----> age , weight color,height
// Method ---> walk(),talk() , run()

// Vehicle --- Audi(Object)
// Property - color , regNo , type , modelNo 
// Method - start() , stop()

// Bank - ICIC type
// Property accNo , accName, bal 
// Method - deposit() , withdrawl()

// Array object

// Method Gym 
// Action ----> Excercise
// Retrn - Muscles

//              0       1         2        3
let fruits = ["apple","mango","banana","grapes"]
let a = fruits.length
console.log(a)

// Method 
// push()
// Action - add the element at last 
// Return - new length of array

let q1 = fruits.push('papaya')
console.log(q1)
console.log(fruits)

// [ 'apple', 'mango', 'banana', 'grapes', 'Papaya' ]
// Method - unshift()
// Action -- Add the element at start of array 
// Return - new length of array

let q2 = fruits.unshift('chikoo')
console.log(q2)
console.log(fruits)

//[ 'chikoo', 'apple', 'mango', 'banana', 'grapes', 'papaya' ]

// Method - includes()
// Action - Search for the element 
// Return - Boolean value

let q3 = fruits.includes('apple')
console.log(q3)

// length 
// push()
// unshift()
// includes()

// --------------------------------------------->
//             0         1         2         3
let cities = ["pune","banglore","kolkata","chennai"]
// Method pop()
// action - removes the last element 
// returns the same element 
let q4 = cities.pop()
console.log(q4)
console.log(cities)

// Method - shift()
// Action - removes the first element 
// returns - same element
// let q5 = cities.shift()
// console.log(q5)
// console.log(cities)

// //              0          1        2            3
// let country = ["india","pakistan","bangladesh","srilanka"]
// let q6 = country.reverse()
// console.log(q6)

// let q7 = country.sort()
// console.log(q7)

// concat()


let a1 = [1,2,3]
let a2 = [4,5,6]

let q8 = a1.concat(a2)
let q9 = a2.concat(a1)
console.log(q9)

// join()
//            0           1
let info = ["chinmay","deshpande" ,7709192441]
let q10 = info.join('-')  // "chinmay-deshpande-7709192441"
console.log(q10)
// slice()
//            0     1    2    3    4    5
let state = ["MH","MP","UP","RJ","GOA","UK"]
//           -6   -5   -4    -3   -2    -1

//state.slice(startindex, endIndex(not included))
let q11 = state.slice(1,5)
console.log(state.slice(1))
console.log(state.slice(2,5))
console.log(state.slice(-3))
console.log(state.slice(-6,-3))
console.log(state.slice(1,-3))
console.log(state.slice(-1,-3))

// indexOf()
//             0   1  2  3  4
let numbers = [22,33,44,55,66,77,88]
let q12 = numbers.indexOf(66)
let q13 = numbers.indexOf(79)
console.log(q12)
console.log(q13)

// flat()
//         0        1        2
//        0 1 2   0 1 2   0 1 2 
let n = [[1,2,3],[4,5,6],[7,8,9]]
console.log(n[0][1])
console.log(n[1][2])
console.log(n[2][0])
let q14 = n.flat()
console.log(q14)

// repeat --> 7:30pm





