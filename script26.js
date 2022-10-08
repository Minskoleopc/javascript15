// call()  bind() // apply()

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:12,
    skills:["python","java","javascript"],
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
amol.display()
let sarika = {
    firstName:"sarika",
    lastName:"pansare",
    age:13,
    skills:['python',"js"]
}

let dsy = amol.display
// let dsy = function(){
//     console.log(this.firstName + this.lastName)
// }
dsy()

// gettting the value of this keyword

// bind()

// call()

// apply()


let vehicle = {
    color:"red",
    display:function(){
        console.log(this.color)
    }
}
vehicle.display()

let vehicle2 = {
    color:"green"
}

let ds2 = vehicle.display
// let ds2 = function(){
//     console.log(this.color)
// }
ds2()

// settng the value for this keyword
// bind()

let ds2Updated = ds2.bind(vehicle2)
// let ds2 = function(){
//     console.log(vehicle2.color)
// }
ds2Updated()

// ------------- bind()---------------------------------------------

let info1  = {
    firstName:"chinmay",
    lastName:"deshpande"

}

let info2  = {
    firstName:"amol",
    lastName:"rao"

}

let info3  = {
    firstName:"sarika",
    lastName:"pansare"

}

let display2 = function(){
    console.log(this.firstName+ this.lastName)
}

//info1.display2()

let a1 = display2.bind(info1)
// let display2 = function(){
//     console.log(info1.firstName+ info1.lastName)
// }
a1()

// call()
display2.call(info2)
display2.call(info3)
display2.call(info1)

let info4 = {
    firstName:"chinmay",
    lastName:"dani"
}
let display3 = function(word){
    console.log(`${word} ${this.firstName}`)
}
display3.call(info4,"Good Morning")
display3.apply(info4,["Good Morning"])

// call() , bind() , apply() // ----
// manually setting the value of this keyword

// let x = 10
// console.log(x)
// console.log(amol.display)
// amol.display()