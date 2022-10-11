// function constructor
function Person(firstName,lastName ,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amolQ = new Person("amolq","raoq",23)
let amolJ = new Person("amolqqqq","raoqqqq",231)
//######################################################
console.log(amolQ)
console.log(amolJ)

// amolQ.display()
// amolJ.display()

// Every object has Object.__proto__ === Parent.prototype
console.log(amolQ.__proto__ === Person.prototype)
console.log(amolJ.__proto__ === Person.prototype)
Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
console.log(amolQ)
console.log(amolJ)

amolQ.display()
amolJ.display()