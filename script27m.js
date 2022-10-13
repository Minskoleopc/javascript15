
// // lexical scope 


// function addition(){
//     let x = 10 
//     let y = 5
//     console.log(x+y)
//     //console.log(a)
//     function additionB(){
//         let a = 10
//         let b = 5
//         console.log(x+y+b+a)
//         function additionC(){
//             let a1 = 900
//             let b1 = 700
//             console.log(a+b+x+y+a1+b1)
//         }
//         additionC()
//     }
//     additionB()
// }
// addition()


// closures 
// function mul(x,y){
//     console.log(x*y)  // 36
//     return x  * y
//     console.log("hello")
// }
// let q1 = mul(12,3)
// console.log(q1)


function mul(){
    let g = 10 
    let j = 5

    return function(){
        console.log(g*j)
    }
}

let q3 = mul()
q3()

// let q3 = function(){
//     console.log(g*j)
// }

function subtractionP(){
    let a  =  10
    let b = 5
    let display = function(){
        console.log('Subtraction ......')
    }
    let subtraction = function(){
        console.log(a-b)
    }
    return [display, subtraction]

}
let q4 = subtractionP()
q4[0]()
q4[1]()
// Encapulation

var firstName = "ram"
var lastName = "dani"
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this ======> info
//         console.log(this.firstName + this.lastName)
//         function display2(){
//             // this =====>window
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }

//info.display()


// var lastName = "dani"
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this ======> info
//         console.log(this.firstName + this.lastName)
//         let display2 = ()=> {
//             // this =====> immediate parent this keyword
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()

// this ====> window
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:()=>{
        // this ======>  immediate parent this keyword
        console.log(this.firstName + this.lastName)
        let display2 = ()=> {
            // this =====> immediate parent this keyword
            console.log(this.firstName + this.lastName)
        }
        display2()
    }
}
info.display()

////////////  END ////////////////////////////////////////











// actual difference between arrow function and function expression/function 
// declaration