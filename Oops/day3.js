
// Program1
// function Person(firstName,lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.display = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol = new Person("amol","rao")
// let chinmay = new Person("chinmay","deshpande")
// let sarika = new Person("sarika","pansare")


// console.log(amol)
// console.log(chinmay)
// console.log(sarika)


// Program2

function Person(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
}

let amol = new Person("amol","rao")
let chinmay = new Person("chinmay","deshpande")
let sarika = new Person("sarika","pansare")

Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}

console.log(amol)
console.log(chinmay)
console.log(sarika)

// every object __proto__ == Parent.protype
console.log(amol.__proto__ === Person.prototype)

amol.display()
chinmay.display()
sarika.display()

