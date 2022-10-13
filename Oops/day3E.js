
// function constructor 

function Person(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let amol = new Person("amol","rao",34)
let chinmay = new Person("chinmay","deshpande",32)
console.log(amol)
console.log(chinmay)

// amol.display()
// chinmay.display()

// Every object has one property __proto__
console.log(amol.__proto__ === Person.prototype)

Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.lang = "Hindi"

amol.display()
chinmay.display()

console.log(amol.lang)
console.log(chinmay.lang)

console.log(amol instanceof Person)
console.log(amol.hasOwnProperty('firstName'))
console.log(amol.hasOwnProperty('lang'))


// Array 
//             0        1     2
let names = ["poorva","ram","sham"]
console.log(names) // __proto__
// Array

console.log(names instanceof Array)
console.log(names.__proto__ === Array.prototype)
names.push('Mayuri')

// not recommended
Array.prototype.displayH = function(){
    console.log("hello")
}
names.displayH()

// Es6 class

class Person2 {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    display(){
        console.log(this.firstName + this.lastName)
    }

}

let amol2 = new Person2("amol","rao",34)
let chinmay2 = new Person2("chinmay","deshpande",32)

console.log(amol2)
console.log(chinmay2)

amol2.display()
chinmay2.display()

// Program3

let obj = {

    init:function(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
    }

    ,
    display:function(){
        console.log(this.firstName+ this.lastName)
    }


}

let qw  = Object.create(obj) // qw.__proto__
qw.init("ch","dw",12)
qw.display()
console.log(qw)