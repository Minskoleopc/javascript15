function Person(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amol = new Person("amol","rao")
let chinmay = new Person("chinmay","deshpande")

// amol.display()
// chinmay.display()

console.log(amol)
console.log(chinmay)

// every object has __proto__ == Parent.Proptoype
console.log(amol.__proto__ === Person.prototype)
Person.prototype.display = function(){
        console.log(this.firstName + this.lastName)
}
Person.prototype.language = "Hindi"
console.log(amol)
console.log(chinmay)


amol.display()
chinmay.display()

console.log(chinmay.language)
console.log(amol.language)


console.log(amol instanceof Person)
console.log(chinmay instanceof Person)

let q1 = amol.hasOwnProperty('firstName')
let q2 = amol.hasOwnProperty('lastName')
let q3 = amol.hasOwnProperty('language')

console.log(q1)
console.log(q2)
console.log(q3)

// Array 

let names = ["chinmay","poorva","ram"] // __proto__
console.log(names instanceof Array)
console.log(names)

names.push("abhisha")
names.pop()

console.log(names.__proto__ === Array.prototype)

Array.prototype.Greet = function(){
    console.log("hello")
}

names.Greet()
console.log(names)

class Person2 {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amol2 = new Person2("a","r")
let chinmay2 = new Person2("c","d")

console.log(amol2)
console.log(chinmay2)

// program3

let Person3 = {
    init:function(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    },
    display:function(){
        console.log(this.firstName+ this.lastName)
    }
}

let amol3 = Object.create(Person3)  // amol.__proto__
console.log(amol3)
amol3.init("amol3","rao")
console.log(amol3)
amol3.display()








