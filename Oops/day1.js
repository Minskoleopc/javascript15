// Object ??

// Object literal

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

// Function constructor 

function Person (fn,ln,ag){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol2 = new Person("amol2","rao2",29)
let chinmay2 = new Person("chinmay2","deshpande",30)
console.log(amol2)
console.log(chinmay2)

amol2.lang = "hindi"
console.log(amol2)
console.log(chinmay2)

// program2
function Vehicle(color,type){
    this.color = color,
    this.type = type
    this.displayColor = function(){
        console.log(`The color of vehicle is ${this.color}`)
    }
}
let audi = new Vehicle("red","sedane")
console.log(audi)


// Es6 class
// program3
class Person2 {

    // to set properties at the time of object creation
    constructor(fn,ln, age){
        this.firstName = fn,
        this.lastName = ln , 
        this.age = age,
        this.display = function(){
            console.log(this.firstName + this.lastName)
        }
    }
}

let amol3 = new Person2("amol3","rao3",32)
console.log(amol3)
amol3.display()

class Vehicle2 {
    constructor(color,type){
        this.color = color
        this.type = type
        this.displayColor = function(){
            console.log(`The color of vehicle is ${this.color}`)
        }
    }
}
let audi2 = new Vehicle2("blue","sedane")
console.log(audi2)


// Object literals -- code repeat
// Template --- blue 
//1) function constructor
//2) es6 class
//3) Object.create()
// Object.Create()

// oops , ajax














// // retrive 
// console.log(amol.firstName)
// console.log(amol['firstName'])

// // update 
// amol.firstName = "amol R"
// amol['lastName'] = "rao"

// // add 
// amol.city = "pune"
// amol['lang'] = "hindi" 

// // delete
// delete amol.city
// delete amol['lang']



