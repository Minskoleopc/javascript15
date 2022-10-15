// Object 
// object literal 
// functio constructor
// es6 class
// Object.create method
// protptype inheritance 
// every object has __proto__ ==  Parent.prototype


class Person {

    firstName = "john"
    lastName = "wick"
    age = 23

    display() {
        console.log(this.firstName + this.lastName)
    }

}

let mayuri = new Person()
let poorva = new Person()
console.log(mayuri)
console.log(poorva)


poorva.firstName = "poorva"
poorva.lastName = "vyas"
poorva.age = 20
console.log(poorva)

mayuri['age'] = 45
mayuri['firstName'] = "mayuri"
mayuri['lastName'] = "rao"
console.log(mayuri)

// program2
class PersonE {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    display() {
        console.log(this.firstName + this.lastName)
    }
}

let chinmay = new PersonE("chinmay", "deshpande", 45)
let sam = new PersonE("sam", "dani", 45)

console.log(chinmay)
console.log(sam)

chinmay.display()
sam.display()

// program 3 
// setter and getter methods


class PersonF {
    setFirstName(fn) {
        this.firstName = fn
    }
    setLastName(ln) {
        this.lastName = ln
    }
    seAge(ag) {
        this.age = ag
    }

    getAge() {
        return this.age
    }

    getFirstName() {
        return this.firstName
    }

    getLastName() {
        return this.lastName
    }
}

let sarika = new PersonF()
console.log(sarika)

sarika.setFirstName("sarika")
sarika.setLastName("pansare")
sarika.seAge(12)

console.log(sarika)
console.log(sarika.getAge())
console.log(sarika.getFirstName())
console.log(sarika.getLastName())

// using set and get keyword


class PersonG {
    set setFirstName(fn){
        this.firstName = fn
    }

    set setLastName(ln){
        this.lastName = ln
    }

    set setAge(age){
        this.age = age 
    }

    get getAge() {
        return this.age
    }

    get getFirstName() {
        return this.firstName
    }

    get getLastName() {
        return this.lastName
    }
  
}

let abhisha = new PersonG()
console.log(abhisha)

abhisha.setFirstName = "abhisha"
abhisha.setLastName = "burande"
abhisha.setAge = 23

console.log(abhisha)

console.log(abhisha.getFirstName)
console.log(abhisha.getLastName)
console.log(abhisha.getAge)
















