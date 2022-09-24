let info = {
    firtName:"chinmay",
    lastName:"deshpande",
    skills:["python","java","javscript"]
}
for(let key in info){
    console.log(key,info[key])
}
for(let key of Object.keys(info)){
    console.log(key)
}
for(let val of Object.values(info)){
    console.log(val)
}
for(let [key, val] of Object.entries(info)){
    console.log(key,val)
}

// map ------>

// basic difference between map and object 
// object property are only string
// but map can have any other datatype as property

let mapA = new Map()
console.log(mapA)

// --------------------------->
mapA.set(1,'admin')
mapA.set('fullname','chinmay deshpande')
mapA.set(true,'IsMarried')
console.log(mapA)

// size 
console.log(mapA.size)
let q1 = mapA.get(1)
console.log(q1)

let q2 = mapA.get('fullname')
console.log(q2)

// set(prop ,val) , size ,get()

let q3 = mapA.has(true)
console.log(q3)

let q4 = mapA.has('lastName')
console.log(q4)

mapA.delete(true)
console.log(mapA)

mapA.clear()
console.log(mapA)

// --------------------------------------------------->

let mapB = new Map()
console.log(mapB)

mapB.set(1,'accounting')
mapB.set(true,'WFH')
mapB.set('fullName',"chinmay deshpande")
console.log(mapB)
console.log(mapB.size)

let q11 = mapB.has(1)
console.log(q11)

let q12 = mapB.get(true)
console.log(q12)

mapB.delete(true)
console.log(mapB)

mapB.clear()
console.log(mapB)

//----------------------------------------------------------->

let mapC = new Map([
    ['potota',50],
    ['tomato',40],
    ['onion',30],
    ['cabbage',20]
])
console.log(mapC)

for(let key of mapC.keys()){
    console.log(key)
}
for(let val of mapC.values()){
    console.log(val)
}
for(let [key,val] of mapC.entries()){
    console.log(key,val)
}


let mapD = new Map()
mapD.set(2,'customer')

let mapE = new Map([
    ['apple',100],
    ['grapes',80],
    ['papaya',50]
])
console.log(mapE)

let setC = new Set()
setC.add(22)
setC.add(33)

for(let val of setC.keys()){
    console.log(val)
}
for(let val of setC.values()){
    console.log(val)
}

for(let [a,b] of setC.entries()){
    console.log(a,b)
}




// let setE = new Set()

// setE.add({firstName:"chinmay",lastName:"deshpande"})
// setE.add({firstName:"poorva",lastName:"vyas"})

// console.log(setE)

// [{firstName:"chinmay",lastName:"deshpande"},{firstName:"chinmay",lastName:"deshpande"}]
// for(let [{firstName},{lastName}] of setE.entries()){
//     console.log(firstName,lastName)
// }

// everthing in js is object 
// map is object 
// map property and method 
// method - action and return