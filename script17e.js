
let names = ["chinmay","ram","ravi"]
// let a = names[0]
// let b = names[1]
// let c = names[2]

// console.log(a)
// console.log(b)
// console.log(c)

// Destructure

let [a1,b2,c3] = names
console.log(a1)
console.log(b2)
console.log(c3)

let city = ["pune","banglore","kolkata"]
let [a11,,a13] = city
console.log(a11)
console.log(a13)

// program3
//                 0                      1                   2
//              0          1        0          1        0         1
let state = [["nagpur","wardha"],["jaipur","udaipur"],["indore","bhopal"]]
let [[s1,s2],[s3,s4],[s5,s6]] = state
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)
console.log(s6)

// program 4

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12
}

// let r1 = info.firstName
// let r2 = info.lastName
// let r3 = info.age

// console.log(r1)
// console.log(r2)
// console.log(r3)

// let {firstName,lastName,age} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)

// with alias
let {firstName:q1,lastName:q2,age:q3} = info
console.log(q1)
console.log(q2)
console.log(q3)


let vehicle = {
    color:"red",
    type:"sedane"
}
let  {color:ca1,type:ca2} = vehicle
// console.log(color)
// console.log(type)
console.log(ca1)
console.log(ca2)

let family = {
    parent:{
        father:"shirish",
        mother:"kanchan"
    },
    siblings:{
        brother:"chinmay",
        sister:"gauri"
    }
}

// program 5
//let {parent:{father:f1,mother:m1},siblings:{brother:b1,sister:s7}} = family
let {parent:{father:g1,mother:g2},siblings:{brother:g3,sister:g4}} = family
console.log(g1)
console.log(g2)
console.log(g3)
console.log(g4)


// evening --> 7:30 pm
// morning --> 8.00 am
// morning 10 am (support)
// evening 7 pm (support)