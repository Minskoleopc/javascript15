
// AND
// TRUE  && TRUE   ====> TRUE
// FALSE && TRUE  ====> FALSE
// FALSE && FALSE ====> FALSE 
// TRUE  && FALSE ====> FALSE

// OR 

// TRUE  || TRUE   ====> TRUE
// FALSE || TRUE  ====> TRUE
// FALSE || FALSE ====> FALSE 
// TRUE  || FALSE ====> TRUE


// NOT
// TRUE - FALSE
// FALSE - TRUE

// SHORT CIRCUIT

// program1
let e = "CHINMAY"||"SARIKA"||"POORVA"
console.log(e)

let age = 20
let firstName = ""

let q1 = firstName || ++age
console.log(q1)
console.log(age)

// Program2 &&
let q4 = "CHINMAY" && 0 && "SARIKA" && "RAM"
console.log(q4)

let age2 = 22
age2 && console.log("hello")

let q5 = "CHINMAY" && null && "SARIKA" && "RAM"
console.log(q5)

// --------------------->
let chinmayScore = 6000
let poorvaScore = 900
//chinmayScore > poorvaScore?console.log("chinmay win"):console.log("Poorva win")

// chinmay win
chinmayScore > poorvaScore && console.log('chinmay win')


//  nullish coalesing operator ??
// falsy ------> as it is 
// undefined and null

let info = {
    firstName:8===8,
    lastName:"deshpande"
}
//      null or undefined
let r = info.firstName ??'hello'
console.log(r)

// Falsy -- false , undefined , NaN , null , 8 !== 8 
// Rest and Spread operator 
//[2,33,4,4,5,6,6,7,8,9,9,3,4,5,7]
function additon(...arr){
    //console.log(arr)
    return arr.reduce(function(acc,el){
        return el + acc
    },0)

}
let sum = additon(2,33,4,4,5,6,6,7,8,9,9,3,4,5,7)
console.log(sum)
//12,3,4 -----> [12,3,4] // rest


let a = [1,2,3]
let b = [4,5,6]
console.log(a.concat(b))

//[1,2,3] ===> 1,2,3
//[4,5,6] ===> 4,5,6

let r1 = [...a,...b]
console.log(r1)

// spread

let marks = [44,55,66,22,33,55]
function firstFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
//firstFive(marks[0],marks[1],marks[2],marks[3],marks[4])
firstFive(...marks)

//[1,2,3] ===> 1,2,3  --- spread
//12,3,4  ===> [1,2,3] -- reset
function addB(a,...arr){
    let q3 = arr.filter(function(el){
        return el > a
    })

    console.log(q3)

}
addB(70,2,3,4,5,7,8,4,5,6,7,8,22,33,44,55,66,77,88,22,33)

// optional parameter

let infoa = {

    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        father:"shirish",
        mother:"kanchan"
    }

}

console.log(infoa.parent?.father)



