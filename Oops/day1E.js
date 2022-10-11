// // Object literal 
// let amol = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let sarika = {
//     firstName:"sarika",
//     lastName:"pansare",
//     age:23,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// Function constructor 
function Person(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}
let amol1 = new Person("amol1","rao1",26)
let amol2 = new Person("amol2","rao2",29)
console.log(amol1)
console.log(amol2)

// Es6 class
class Person2 {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName  = lastName
        this.age = age
        this.display = function(){
            console.log(this.firstName + this.lastName)
        }
    }
}
let samay = new Person2("samay","dani",34)
samay.display()
// Object  create

// let samay2 =  Object.create({})
// console.log(samay2)
// samay2.firstName = "samay2"
// samay2.lastName = "dani2"
// samay2.age = 23
// samay2.display = function(){
//     console.log(samay2.firstName + samay2.lastName)
// }
// console.log(samay2)

let obj = {
    init:function(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.display = function(){
            console.log(this.firstName + this.lastName)
        }
    }
}

let samay3  = Object.create(obj)
samay3.init("samay3","dani3",23)
samay3.display()
console.log(samay3)


// Object literal 
// function constructor 
// Es6 class
// Object.create()





