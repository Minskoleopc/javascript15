
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    skills:["python","javascript","html"]
}
// every key in normal object is string 

// Map  ----- property ---value 
// Map  ----- Key      ---value

// Map -- data type ---- type --- Object 
// Object -- property and method 
// method - action and return type 


let mapA = new Map()
console.log(mapA)

// size ---  property 
let a = mapA.size
console.log(a)

// method
mapA.set(1,'admin')
mapA.set(true,'isMarried')
mapA.set('fullName',"chinmay deshpande")
console.log(mapA)
console.log(mapA.size)

// has()
let q1 = mapA.has(1)
console.log(q1)
let q2 = mapA.has(2)
console.log(q2)

//get()
let q3 = mapA.get(1)
console.log(q3)

// size , has(), set(),get()
// delete()
mapA.delete(1)
console.log(mapA)

mapA.clear()
console.log(mapA)



// let mapB = new mapB()
// console.log(mapB.size)
// mapB.set(1,"admin")
// mapB.set(2,"customer")
// mapB.get(1)
// mapB.delete(1)
// mapB.has(2)
// mapB.clear()

let mapC = new Map(
    [
        [1,'admin'],
        [2,'customer'],
        [3,'staff']
    ]

)
console.log(mapC.size)


// Object 

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande"
}
//-------------------------------------
for(let key in info2){
    console.log(key,info2[key])
}

// Es6 --- new way to loop through objects

for(let prop of Object.keys(info2)){
    console.log(prop)
}
for(let val of Object.values(info2)){
    console.log(val)
}
for(let [key,val] of Object.entries(info2)){
    console.log(key,val)
}

let mapD = new Map(
    [
        [1,'admin'],
        [2,'customer'],
        [3,'staff']
    ]

)
for(let key of mapD.keys()){
    console.log(key)
}
for(let val of mapD.values()){
    console.log(val)
}
for(let [k,v] of mapD.entries()){
    console.log(k,v)
}

let setA = new Set(["apple","mango","banana"])
console.log(setA)

setA.forEach(function(el){
    console.log(el)
})

for(let key of setA.keys()){
    console.log(key)
}
for(let key of setA.values()){
    console.log(key)
}
for(let [k,v] of setA.entries()){
    console.log(k,v)
}

// let setE = new Set()
// setE.add({firstName:"chinmay",lastName:"deshpande"})
// setE.add({firstName:"poorva",lastName:"vyas"})

// console.log(setE)

// for(let [{firstName},{lastName}] of setE.entries()){
//     console.log(firstName,lastName)  
// }








