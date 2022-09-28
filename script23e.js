let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    skills:["python","javascript"]
}

let poorva = {
    firstName:"poorva",
    lastName:"vyas",
    age:24,
    skills:["python3","javascript","c#"]
}

// program2

// class Person {
//     firstName;
//     lastName;
//     age;
//     skills;
// }

// let amol2 = new Person()
// console.log(amol2)
// amol2.firstName = "amol2"
// amol2.lastName = "rao2"
// amol2.age = 23
// amol2.skills = ["python", "javascript"]
// console.log(amol2)

// using constructor we can set the value at the time of object creation
class Person2 {
    constructor(fn,ln,ag,skills){
        this.firstName = fn
        this.lastName = ln 
        this.ag = ag
        this.skills = skills
    }
}

let amol2 = new Person2("amol1","rao1",33,["python","django"])
let arika = new Person2("arika","kanhe",33,['html','css','js'])
console.log(amol2)
console.log(arika)
arika.lang = "hindi"
console.log(arika)

// program 3

// Setting the value  using setMethod
class Person3{
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setSkills(arr){
        this.skills = arr
    }
}

let amol4 = new Person3()
console.log(amol4)
amol4.setAge(23)
amol4.setFirstName("amol")
amol4.setLastName('rao')
amol4.setSkills(["python","javascript"])
console.log(amol4)



// retrive   amol.firstName // amol['firstName']
// update    amol.firstName = 'Tanmay' // amol['firstName'] = "Ram"
// add       amol.city = "pune" , amol['lang'] = "Hindi"
// delete    delete amol.firstName  delete amol.lastName

// 8 am 
// 7:30pm
// 8:30am / 8:30pm