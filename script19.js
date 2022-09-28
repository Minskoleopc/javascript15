// //            0  1  2
// let marks = [11,22,33]
// let a = marks[0]
// let b = marks[1]
// let c = marks[2]

// console.log(a) // 11
// console.log(b) // 12
// console.log(c) // 33
// //------------------------------------------------>

// let [a1,a2,a3] = marks
// console.log(a1)
// console.log(a2)
// console.log(a3)

// program 2


let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:23
}

// dot notation and bracket notation

// let q1 = info.firstName
// let q2 = info.lastName
// let q3 = info.age
// let q4 = info.rollNo
// console.log(q1)
// console.log(q2)
// console.log(q3)
// console.log(q4)

// let {firstName,lastName,age,rollNo} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(rollNo)


// let {firstName:fn,lastName:ln,age:ag,rollNo:rn} = info
// console.log(fn)
// console.log(ln)
// console.log(ag)
// console.log(rn)


// program 3
//                0           1          2
//              0   1  2   0  1  2    0  1  2
let numbers = [[11,22,33],[44,55,66],[77,88,99]]
let [[a11,a12,a13],[b11,b12,b13],[c11,c12,c13]] = numbers
// console.log(d1)
// console.log(d2)
// console.log(d3)
console.log(b12)
console.log(c13)


// program 4


let family = {
    parent:{
        mother:"kanchan",
        father:"shirish"
    },
    siblings:{
        brother:"chinmay",
        sister:"gauri"
    }
}

let {parent:{mother:m1,father:f1},siblings:{brother:b1,sister:s1}} = family
// console.log(mother)
// console.log(father)
// console.log(brother)
// console.log(sister)

// console.log(m1)
// console.log(f1)
// console.log(b1)
// console.log(s1)


// program 5
let student = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:13,
    skills:["python","javascript","html","css"]
}

let {firstName:fn,lastName:ln,age:ag,rollNo:rn,skills:[q11,q12,q13,q14]} = student
//console.log(skills)
console.log(q11)
console.log(q12)
console.log(q13)
console.log(q14)


let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"sarika",
        lastName:"pansare"
    }
]

let [{firstName:f11,lastName:l11},{firstName:f12,lastName:l12}] = students
console.log(f11)
console.log(l11)
console.log(f12)
console.log(l12)









