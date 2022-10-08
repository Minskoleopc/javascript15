// lexical scope
// function addition() {
//     let a = 10
//     let b = 5
//     console.log(a + b) //15
//     function additionB() {
//         let c = 20
//         let d = 50
//         console.log(a + b) //
//         console.log(c + d)
//         //console.log(e+f)
//         function additionC() {
//             let e = 90
//             let f = 30
//             console.log(a + b + c + d)
//             console.log(e+f)
//         }
//         additionC()
//     }
//     additionB()
// }
// addition()

// closures

function qwerty(){
    console.log("hello.....")
    return [2,3,4]
    console.log("bye")
}
let q1 = qwerty()
console.log(q1[0])


function subtraction(){
    let x = 100
    let y = 50

    return function(){
        console.log(x-y)
    }
}

let q2 = subtraction()

// let q2 = function(){
//     console.log(x-y)
// }

console.log(q2)
q2()


function multiplication(x,y){

    //let x = 12
    //let y = 10

    console.log(x*y)  // 120
    return function(){
        return x * y
    }

}
let q3 =  multiplication(12,10)
console.log(q3)

// let q3 =  function(){
//     return x * y
// }

console.log(q3())

var firstName = "vijeet"
var lastName = "dani"

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){

//         // this ---> info
//         console.log(this.firstName + this.lastName)
//         function display2(){
//             // this ---- window
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }

// info.display()

// solution
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this ---> info
//         console.log(this.firstName + this.lastName)
//         let  display2 =()=>{
//             // this ---> info
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }

// info.display()
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:()=>{
//         // this ---> window
//         console.log(this.firstName + this.lastName)
//         let  display2 =()=>{
//             // this ---> window
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }

// info.display()
