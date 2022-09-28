// number , boolean , array , objects,
// userdefined data type (new)
// set map 

// program 1  (object literal)
let amol = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    skills:["python","django"]
}

//retrive    amol.firstName
//add  -     amol.city = "pune"
//update -   amol.age = 33
//delete -   delete amol.age

//retrive    amol['firstName']
//add  -     amol['city'] = "pune"
//update -   amol['age'] = 33
//delete -   delete amol['age']
let poorva = {
    firstName:"poorva",
    lastName:"vyas",
    age:28,
    skills:["python","django","angular"]
}

let sunil = {
    firstName:"sunil",
    lastName:"dani",
    age:56,
    skills:["python","django","angular","reactjs"]
}

// Template ---- Blue print
// User defined data ---- class 

// program - setting the value outside the class

class Person {
    firstName;
    lastName;
    age;
    skills = [];
}

let amol2 = new Person()
let chinmay2 = new Person()
console.log(amol2)
amol2.firstName ="amol2"
amol2.lastName = "rao2"
amol2.age = 23
amol2.skills.push('python')
console.log(amol2)
amol2.city = "pune"

console.log(chinmay2)
chinmay2.firstName = "chinmay2"
chinmay2.lastName = "deshpande2"
chinmay2.age = 33
chinmay2.skills.push('html')
console.log(chinmay2)

class Person2 {
    constructor(fn,ln,ag,skills){
        this.firstName = fn
        this.lastName = ln
        this.ag = ag
        this.skills = skills
    }
}

let poorva2 = new Person2("poorva","vyas",29,["python","django"])
let sarika = new Person2("sarika2","pansare2",23,["html","css","js"])
console.log(poorva2)
console.log(sarika)
sarika.city = "pune"


// program 3 (by using method)

class Person3 {
    setAge(ag){
        this.age = ag
    }
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setSkills(arr){
        this.skills = arr
    }
}

let amol3 = new Person3()
console.log(amol3)
amol3.setAge(23)
amol3.setFirstName('amol3')
amol3.setLastName('rao3')
amol3.setSkills(['python'])
console.log(amol3)

console.log(poorva)

// program 1 -- object 
// program 2 - class with out constructor (set the object property values outside)
// program 3 - using constructor('setting the value at the time of object creation')
// program 4 - using setMethod to set values

// 10 am 
// 8:30 pm