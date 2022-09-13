// length 
// push(),pop(),shift(),unshift(),includes(),reverse(),sort()
// slice(), concat(),join(), indexOf(),splice(),fill(),flat()

//             0           1        2       3      4
let names = ["chinmay","shirish","sameer","ram","laxman"]
console.log(names.length)

// push()
let q1 =names.push('rasika')
console.log(q1)
console.log(names)

//[ 'chinmay', 'shirish', 'sameer', 'ram', 'laxman', 'rasika' ]

// unshift()
let q2 = names.unshift('kanchan')
console.log(q2)
console.log(names)

// pop()
// [
//     'kanchan', 'chinmay',
//     'shirish', 'sameer',
//     'ram',     'laxman',
//     'rasika'
//   ]

let q3 = names.pop()
console.log(q3)
console.log(names)

// shift()
let q4 = names.shift()
console.log(q4)
console.log(names)

// includes()
//[ 'chinmay', 'shirish', 'sameer', 'ram', 'laxman' ]
let q5 = names.includes('Ram')
console.log(q5)

// reverse()
//[ 'chinmay', 'shirish', 'sameer', 'ram', 'laxman' ]
let q6 = names.reverse()
console.log(q6)

//sort()
let q7 = names.sort()
console.log(q7)

// slice(), concat(),join(), indexOf(),splice(),fill(),flat()

// concat()
let a1 = [11,22,33]
let b1 = [44,55,66]
let r1 = a1.concat(b1)
console.log(r1)
let r2 = b1.concat(a1)
console.log(r2)

// join()

let info = ["chinmay","deshpande",7709192441]
let r3 = info.join(' ') //'chinmay-deshpande-7709192441'
console.log(r3)
console.log(typeof r3)

//slice()
//             0          1         2        3      4
let cities = ["pune","banglore","nagpur","wardha","akola"]
//             -5       -4        -3         -2        -1
//cities.splice(startPosition,endPosition(not included))
let r4 = cities.slice(2)
console.log(r4)
console.log(cities.slice(1,4))
console.log(cities.slice(0,4))
console.log(cities.slice(-4))
console.log(cities.slice(-4,-1))
console.log(cities.slice(0,-1))
console.log(cities.slice(-5,2))
console.log(cities.slice(-1,-4))

// splice() // add and remove
//              0         1         2       3        4
let cities2 = ["pune","banglore","nagpur","wardha","akola"]
//cities2.splice(startIndex,numberEletoBeDeleted)
//let r5 = cities2.splice(1,2)
let r6 = cities2.splice(1,2,"gao","jaipur")
console.log(r6)
console.log(cities2)

// flat()
//                 0            1         2
//              0  1  2     0   1  2    0   1  2
let numbers = [[11,22,33] ,[44,55,66],[77,88,99]]
console.log(numbers[0][2])  //33
console.log(numbers[1][1]) // 55
console.log(numbers[2][0])//77

let r7 = numbers.flat()
console.log(r7)

let fruits = ["apple","mango","banana","grapes"]
let r8 = fruits.indexOf('mango')
console.log(r8)
let r9 = fruits.indexOf('Mango')
console.log(r9)

// fill()
//           0   1  2  3  4  5  6
let marks = [77,78,89,66,44,33,55]
//let r10 = marks.fill('99',2)
let r11 = marks.fill(true,2,5)
console.log(r10)

// Mobile