// Array , object , string , set , map 
// userdefined , set

let names = ["amol","ram","sham","satish","amol"]
console.log(names)

// set does not stores the value by index 
// set does not allow duplicate values


let setA = new Set()
console.log(setA)

// Javascript --- object -- > property and method
// method action and return 

// add()
setA.add('apple')
setA.add('mango')
setA.add('grapes')
setA.add('apple')
console.log(setA)

// size 
console.log(setA.size)

// has()
let q1 = setA.has('apple')
console.log(q1)

let q2 = setA.has('Banana')
console.log(q1)
console.log(q2)

// add(), size , has() , delete() , clear()
let q3 = setA.delete('apple')
console.log(q3)
console.log(setA)

setA.clear()
console.log(setA)

// add(), size, has(),delete(),clear(),forEach()

let setB = new Set(["tomato","potato","brinjal","tomato","carrot"])
console.log(setB)
console.log(setB[0]) // does not stores the value by index

setB.forEach(function(el){
    console.log(el)
})

let setC = new Set("cheenmay")
console.log(setC)


// Object - es6

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12
}

for(let key in info){
    console.log(key , info[key])
}

for(let key of Object.keys(info)){
    console.log(key)
}

for(let val of Object.values(info)){
    console.log(val)
}

for(let [key,value] of Object.entries(info)){
    console.log(key,value)
}







