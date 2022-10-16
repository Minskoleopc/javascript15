// class Student {

//     firstName= "chinmay"
//     lastName = "deshpande"
//     age = 33

//     display(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher  extends  Student {

//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }

// }

// class Professor extends Teacher {
//     specialization = "english"
//     displaySpecialization(){
//         console.log(this.specialization)
//     }
// }

// let chinmay = new Professor()

// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.age)
// console.log(chinmay.salary)
// console.log(chinmay.specialization)


// chinmay.display()
// chinmay.displaySalary()
// chinmay.displaySpecialization()


// let chinmay = new Teacher()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.age)
// console.log(chinmay.salary)
// chinmay.display()


// let ajit = new Student()
// console.log(ajit.firstName)
// console.log(ajit.lastName)
// console.log(ajit.age)
// console.log(ajit.salary)
// ajit.display()


// program2

// class Student {
//     constructor(firstName,lastName,age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
//     display(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher extends Student{



// }

// let amol = new Teacher("amol","rao",34)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// amol.display()



// Program3 


class Student {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    display(){
        console.log(this.firstName + this.lastName)
    }

}

class Teacher extends Student{
    constructor(firstName,lastName,age,salary){
        super(firstName,lastName,age)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }

}
class Professor extends Teacher {
    constructor(firstName,lastName,age,salary,spl){
        super(firstName,lastName,age,salary)
        this.specialization = spl
    }

    displaySpec(){
        console.log(this.specialization)
    }
}

let a = new Professor("amol","rao",23,10000,"eng")
console.log(a.firstName)
console.log(a.lastName)
console.log(a.age)
console.log(a.salary)
console.log(a.specialization)

a.display()
a.displaySalary()
a.displaySpec()




// ###########################################
// let amol = new Teacher("amol","rao",34,1000)
// console.log(amol.salary)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// amol.display()
// amol.displaySalary()


//###################################################
// let amol = new Student("amol","rao",34)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// amol.display()