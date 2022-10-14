// 4 
// Object literal 
// function constructor 
// es6 
// object create 
// prototype inheritance
// every object has __proto__ == Parent.protoype

class Person {
    firstName = "john"
    lastName = "deer"
    age = 23
    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amol = new Person()
let chinmay = new Person()

console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
amol.display()

// update 
amol.firstName = "amol"
amol['lastName'] = "rao"
amol.age = 78
console.log(amol)

console.log(chinmay)

// Es6 using constructor

class PersonR{

    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    display(){
        console.log(this.firstName+ this.firstName)
    }

}

let amol2 = new PersonR("amol2","rao2",23)
let chinmay2 = new PersonR("chinmay2","deshpande2",23)
console.log(amol2)
console.log(chinmay2)

// using get() and set() function

class PersonT {
    setAge(age){
        this.age  = age
    }
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName  = ln
    }

    getAge(){
        console.log(this.age)
    }
    getFirstName(){
        console.log(this.firstName)
    }
    getLastName(){
        console.log(this.lastName)
    }
}

let amol4 = new PersonT()
console.log(amol4)
amol4.setAge(12)
amol4.setFirstName("chinmay")
amol4.setLastName("deshpande")
console.log(amol4)

amol4.getAge()
amol4.getFirstName()
amol4.getLastName()

// using set and get keyword

let Person5 = class {

    set SetAge(ag){
        this.age = ag
    }

    set setFirstName(fn){
        this.firstName = fn
    }

    set setLastName(ln){
        this.lastName = ln
    }

    get getAge(){
        return this.age
    }
    get getFirstName(){
        return this.firstName
    }
    get getLastName(){
        return this.lastName
    }


}

let  amol5 = new Person5()
console.log(amol5)

amol5.setFirstName = "chinmay"
amol5.setLastName = "deshpande"
amol5.setAge = 66

console.log(amol5.getAge)
console.log(amol5.getFirstName)
console.log(amol5.getLastName)
console.log(amol5)




















