// // polymorphism
// class Addition {
//     add(x,y){
//         console.log(x+y)
//     }
//     add(x,y,z){
//         console.log(x+y+z)
//     }
//     add(x,y,z,a){
//         console.log(x+y+z+a) // NaN
//     }

// }
// let a = new Addition()
// a.add(12,123,4,4) // 143
// a.add(12,123,4) // NaN
// a.add(12,123) // NaN

// same class same method name different signature

class Addition {
    add(a,b,c,d){
        if(a != undefined && b != undefined && c != undefined && d != undefined){
            console.log(a+b+c+d) 
        }
        else if(a != undefined && b != undefined && c != undefined){
            console.log(a+b+c)
        }
        else if(a != undefined && b != undefined){
            console.log(a+b)
        }
    }
}
let a = new Addition()
a.add(12,12,3,4)
a.add(12,12,3)
a.add(12,11)

// overriding 
// Different class same method name , same signature

class WorldBank {

    loan(){
        console.log('I am loan from workBank')
    }
    save(){
        console.log('I am save from worldBank')
    }
   

}

class SBI extends WorldBank {

    // overriding 
    loan(){
        console.log('I am loan from SBI')
        super.loan()
    }
    save(){
        console.log('I am save from SBI')
        super.save()
    }

}
let a1 = new SBI()
a1.loan()
a1.save()

// Static Keyword

class Person {
    static country = "India"
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayInfo(){
        console.log(this.firstName + this.lastName)
    }
    static displayCountryName(){
        console.log(Person.country)
    }
}

console.log(Person.country)
Person.displayCountryName()

// Encapsulation


// class PersonB {

//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     display(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// let a6 = new PersonB("pooja","sharma")
// a6.display()
// console.log(a6.firstName)
// console.log(a6.lastName)
// a6.firstName = "poorva"
// a6.lastName = "vyas"
// a6.display()




class PersonB {

    constructor(firstName,lastName){
        let fn = firstName
        let ln = lastName
        this.display = function(){
            console.log(fn + ln)
        }
    }

  

}
let a61 = new PersonB("pooja","sharma")
a61.display()
console.log(a61.fn)





