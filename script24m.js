// set

// array
// object
// boolean 
// number 
// userdefined
// set 
// map

let numbers = [22,33,44,55,56,57]
console.log(numbers)

// can array store duplicate values ??

numbers = [22,33,44,55,56,57,58,44]
console.log(numbers)

// how to defined set?
// set (blank) 
let setA = new Set()
console.log(setA)

// with iteral array
let setB = new Set([33,44,55,66,33,44,55,66]) // {33,44,55,66,}
console.log(setB)

let setC = new Set("chinmaya") // {'c','h','i','n','m','a','y'}
console.log(setC)


let setD = new Set()
console.log(setD)

// Js object -->
// set -- object 
// property and methods 
// set properties and method

setD.add('amol')
console.log(setD)
setD.add('amit')
console.log(setD)
setD.add('amol')
console.log(setD)

//set does not stores the value by index
//console.log(setD[0])

//method - add 
let q = setD.size
console.log(q)

let q2 = setD.has('Amol')
console.log(q2)
let setE = new Set([33,44,55,66,33]);
console.log(setE)
setE.forEach(function(el){
    console.log(el)
})


 console.log(setE)
//setE.clear()
//console.log(setE)

setE.delete(33)
console.log(setE)

////////////////////////////////
//Set methods and properties

let setA1 = new Set()
setA1.add(12)
setA1.add(13)
setA1.add(14)
setA1.add(15)
setA1.add(15)

let q11 = setA1.size
console.log(q11)

let q12 = setA1.has(55)
console.log(q12)

setA1.delete(12)
console.log(setA)

//setA1.clear()
///console.log(setA1)

setA1.forEach(function(el){
    console.log(el)
})


//console.log(setA1)


let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:22,
    skills:["python","javascript","css"]
}

// for(let key in info2){
//     console.log(key,info2[key])
// }

for(let key of Object.keys(info2)){
    console.log(key)
}


for(let val of Object.values(info2)){
    console.log(val)
}

console.log('-------------------')

for(let [key,val] of Object.entries(info2)){
    console.log(key,val)
}










