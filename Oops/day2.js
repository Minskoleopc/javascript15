
// object  literla 


// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:33,
//     display:function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }
// chinmay.display()

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34,
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// amol.display()

// function constructor
function Person(firstName,lastName,age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.display=function(){
        console.log(this.firstName+ this.lastName)
    }
}
let chinmay = new Person("chinmay","deshpande",23)
let amol = new Person("amol","dani",23)
amol.display()
console.log(amol)

// Es6 class
class Person2 {
    constructor(firstName,lastName,rollNo){
        this.firstName = firstName
        this.lastName = lastName
        this.rollNo = rollNo
        this.display = function(){
            console.log(this.firstName + this.lastName)
        }
    }
}

let amol3 = new Person2("amol3","rao3",34)
console.log(amol3)

// Object.create
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

//let  amol4 = Object.create({})
//console.log(amol4)
// amol4.firstName = "amol4"
// amol4.lastName = "rao4"
// amol4.age = 34
// amol4.display = function(){
//     console.log(amol4.firstName + amol4.lastName)
// }
// console.log(amol4)

let amol5 = Object.create(obj)
console.log(amol5)
amol5.init("amol5","rao5",34)
console.log(amol5)

// Object literal 
// function constructor 
// es6 class
// Object.create()














// es6 class 


// Object 