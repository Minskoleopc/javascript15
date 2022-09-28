// let student = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     skills:['python','django','html']
// }

// let {firstName:fn,lastName:ln,skills:[q1,q2,q3]} = student
// console.log(q1)
// console.log(q2)
// console.log(q3)


// let students= [
//     {
//         firstName:"chinmay",
//         lastName:"deshpande"

//     },
//     {
//         firstName:"poorva",
//         lastName:"vyas"
//     }
// ]

// let [{firstName:h1,lastName:h2},{firstName:h3,lastName:h4}] = students
// // console.log(a)
// // console.log(b)

// console.log(h1)
// console.log(h2)
// console.log(h3)
// console.log(h4)


// function  ---------------->

// program1

let a = 10
console.log(a)
a = 300
console.log(a)

let x = 10 
let y = x
console.log(x) // 10
console.log(y) // 10

y = 100
console.log(y)
console.log(x)

// program 2

let  names = ["chinmay","sarika","poorva"]
let copyArray = names
copyArray[0] = 'ram'
console.log(names)
console.log(copyArray)

// program 3

let fi = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let li = fi
fi.lastName = "dani"
console.log(li)
console.log(fi)

// object as a parameter to function 

let vehicle = {
    color:"red",
    type:"sedane"
}

function updateColor(obj){
    //let obj = vehicle
    obj.color = "blue"
    //obj['color'] = "black"
    console.log(obj)
}

updateColor(vehicle)
console.log(vehicle)

// array as parameter to function 
let cities = ["pune","nagpur","banglore"]
function addValue(arr){
   // let arr = cities
   arr.push('wardha') //[ 'pune', 'nagpur', 'banglore', 'wardha' ]
   console.log(arr)

}
addValue(cities)
console.log(cities) //[ 'pune', 'nagpur', 'banglore', 'wardha' ]


// morning -----> 
//morning - 8.00 am 
//evening -7:30 pm

let info = {
    firstName:"chinmay"
}
info.firstName = "sarika"

function addAndUpadte(obj,arr){
    obj.color ='purle'
    arr.push('jaipur')
}

addAndUpadte(vehicle,cities)
console.log(vehicle)
console.log(cities)






