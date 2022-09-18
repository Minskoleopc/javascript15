//             0           1       2         3
let names = ["chinmay","poorva","sarika","ramesh"]

// let a =  names[0]
// let b =  names[1]
// let c =  names[2]
// let d =  names[3]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let [a1,a2,a3,a4] = names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
// program 2
let fruits = ["apple","mango","banana"]
let [q1,,q2] = fruits
console.log(q1)
console.log(q2)

// program 3

let state = [["Indore","Bhopal"],["Wardha","Nagpur"],["Udaipur","Jaipur"]]

let [[x1,x2],[y1,y2],[z1,z2]] = state
// console.log(x)
// console.log(y)
// console.log(z)

console.log(x1)
console.log(y2)
console.log(z2)

// program 4

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:23
}

// let k1 = info.firstName
// let k2 = info.lastName
// let k3 = info.age
// let k4 = info.rollNo
// console.log(k1,k2,k3,k4)

// let {firstName,lastName,age,rollNo} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(rollNo)

// alias
let {firstName:fn,lastName:ln,age:ag,rollNo:rn} = info
console.log(fn)
console.log(ln)
console.log(ag)
console.log(rn)

let vehicle = {
    color:'blue',
    type:'sedane'
}

let {color:c1,type:t1} = vehicle
// console.log(color)
// console.log(type)
console.log(c1)
console.log(t1)


let family = {
    parent:{
        father:"shirish",
        mother:"kanchan"
    },
    sibling:{
        brother:"chinmay",
        sister:"gauri"
    }

}

let {parent:{father:f11,mother:m11},sibling:{brother:b11,sister:s11}} = family
// console.log(father)
// console.log(mother)
// console.log(brother)
// console.log(sister)

let {parent:h1,sibling:s1} = family
console.log(h1)
console.log(s1)

// console.log(f11)
// console.log(m11)
// console.log(b11)
// console.log(s11)

// 8 am ----> 
// 7:30 pm ---->

// loop 

let f = {
    a:12,
    b:13
}

for(let [val,key] of Object.entries(f)){
    console.log(val,key)
}
