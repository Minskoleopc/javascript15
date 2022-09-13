let x = 10
console.log(x)
//            0         1        2         3
let names = ["apple","mango","banana", "grapes"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

// printing all elements of array
for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 , 1 , 2 , 3
    // i ---- 0
    // i -----1
    // i -----2
    // i -----3
    console.log(names[i])
}
//             0         1       2        3
let fruits = ["apple",'mango',"banana","grapes"]

// Type -- human -----> amol(object)
// property -- height weight  color age
// method - talk(),walk()

// Vehicle -- Audi 
// property -- color , regNo , modelNo ,type 
// method -- start() , stop()

// Bank --- ICICI
// property -- accNo , accName , bal 
// method deposit() , withdrawl()

// Object -- property and method
// Method - action and return 

// Gym ---
// action - exercise 
// return - muscle

// property --- length
//                   0        1         2         3
let vegetables = ["tomato","potato","brinjal","cabbage"]
let a1 = vegetables.length
console.log(a1)


// Method 24
//             0        1       2
let cities = ["pune","jaipur","nagpur"]
console.log(cities[0])
console.log(cities.length)
//push()
// action - add the element at last
// return - new length of array
let a2 = cities.push('wardha')
console.log(a2)
console.log(cities)
// unshift()
// action - add the element at first 
// return - new length of array
// [ 'pune', 'jaipur', 'nagpur', 'wardha' ]

let a3 = cities.unshift('mumbai')
console.log(a3)
console.log(cities)

// includes
// action - search for the element
// return -- if element is found return true else return false
//[ 'mumbai', 'pune', 'jaipur', 'nagpur', 'wardha' ]

let a4 = cities.includes('Pune')
console.log(a4)

// push(), unshift() , includes()
// pop() and shift()
//              0           1         2         3
let country = ["india","srilanka","pakistan","bangladesh"]

//pop()
//action - removes the last element 
//return - returns the last element

let a5 = country.pop()
console.log(a5)
console.log(country)

//shift()
//[ 'india', 'srilanka', 'pakistan' ]
// action - removes the  first element 
// return the same element

let a6 = country.shift()
console.log(a6)
console.log(country)

// length 
// push() ---> new length
// unshift() ----> new length
// pop() ----- same element 
// shift() ---- same element
// includes() ---- true else false (boolean)

// reverse()
// action - reverse the array
// return  - array

let animals = ["tiger","lion","giraffe","rabbit"]
let a7 = animals.reverse()
console.log(a7)

//sort()
//action - sorts the element alphabetically if string
//return - array

let a8 = animals.sort()
console.log(a8)











