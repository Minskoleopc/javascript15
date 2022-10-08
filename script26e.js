let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 23,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
info.display()

let info2 = {
    firstName: "amol",
    lastName: "rao",
    age: 34
}
let ds2 = info.display
ds2()
// let ds2 = function () {
//     console.log(this.firstName + this.lastName)
// }
// bind() ----- returns a function

ds2 = ds2.bind(info2)
// let ds2 = function () {
//     console.log(info2.firstName + info2.lastName)
// }
ds2()

// bind()

let ve1 = {
    color:"red",
}
let ve2 = {
    color:"blue"
}
let ve3 = {
    color:"purple"
}

let dsColor = function(){
    console.log(this.color)
}

let dsColor1 = dsColor.bind(ve1)
dsColor1()

let dsColor2 = dsColor.bind(ve2)
dsColor2()

let dsColor3 = dsColor.bind(ve3)
dsColor3()


// call  

let ve11 = {
    color:"red",
}
let ve22 = {
    color:"blue"
}
let ve33 = {
    color:"purple"
}
let dsColor11 = function(){
    console.log(this.color)
}
dsColor11.call(ve11)
dsColor11.call(ve22)
dsColor11.call(ve33)


let info3 = {
    firsName:"ram",
    lastName:"dani",
    age:34
}

let greet = function(word){
    console.log(`${word} ${this.firsName} !`)
}

//greet("hello")
greet.call(info3,"Good morning")
greet.apply(info3,["Good morning"])

// lexical scope , closures , difference between 
//arrow and function expression 

// oops 4








// call()

// apply()






// explanation
// let a = 10
// console.log(a)
// let q1 = info.display

// let q2 = function () {
//     console.log(this.firstName + this.lastName)
// }
// q2() 
// // this value will be window which will make  firstName and lastName unedfined




