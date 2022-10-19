
// class Addition {

//     // polymorphism 
//     // overloading
//     // same class , same method name , different signature
//     add(x,y){
//         console.log(x+y)
//     }

//     add(x,y,z){
//         console.log(x+y+z)
//     }

//     add(x,y,z,a){
//         console.log(x+y+z+a)
//     }


// }

// let a = new Addition()
// a.add(23,3,4,5)
// a.add(23,3,4)

// Overloading 



// class Addition{
//     add(a,b,c,d){
//         if(a != undefined && b != undefined && c != undefined && d != undefined){
//                 console.log(a+b+c+d)
//         }
//         else if(a != undefined && b != undefined && c != undefined){
//                 console.log(a+b+c)
//         }
//         else if(a != undefined && b != undefined){
//             console.log(a+b)
//         }
//     }

// }

// let b = new Addition()
// b.add(12,13,13,13)
// b.add(12,13,13)
// b.add(12,13)

// same method  name , same signature , but different class 
// inheritance
// class WorldBank {

//     loan(){
//         console.log('I am loan from WorldBank')
//     }
//     save(){
//         console.log('I am save from WorldBank')
//     }

// }
// class SBI extends WorldBank {

//     loan(){
//         console.log('I am loan from SBI')
//         super.loan()
//     }
//     save(){
//         console.log('I am save from SBI')
//         super.save()
//     }

// }



// let a  = new SBI()
// a.loan()
// a.save()


// let a = new WorldBank()
// a.loan()
// a.save()

// static keyword

class Info {
    static country = "India"
    static displayCountryName() {
        console.log(Info.country)
    }
}

console.log(Info.country)
Info.displayCountryName()

// Encapsulation

// class Person {
//     constructor(firstName,lastName,age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age

//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let a = new Person("chinmay","deshpande",23)
// a.displayName()
// console.log(a.firstName)




class Person {
    constructor(fn, ln, ag) {
        let firstName = fn
        let lastName = ln
        let age = ag
        this.displayName = function () {
            console.log(firstName + lastName)
        }
    }

}
let a = new Person("chinmay", "deshpande", 23)
a.displayName()
console.log(a.firstName)








