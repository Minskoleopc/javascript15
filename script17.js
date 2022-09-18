//             0      1     2      3
let  names = ["sam","john","ram","ravi"]
// retrive 
console.log(names[0])
// update 
names[1] = "ram"
console.log(names)
// add
names.unshift('sarika')
names.push('poorva')
console.log(names)
// delete 
names.pop()
names.shift()
console.log(names)

for(let i = 0 ; i < names.length ; i++){
   // console.log(i)
    console.log(names[i])
}

// objects 

let info = ["chinmay","deshpande",12,33]


let info2 = {
    // property - value 
    // key    - value
    firstName:"Chinmay",
    lastName:"Deshpande",
    rollNo:33,
    age:12
}
// object stores elements in property -value format
// Object does not stores the value by index

// retrive (dot notation and bracket notation)

// objName.property
console.log(info2.firstName)
console.log(info2['firstName'])
// update (dot notation and bracket notation)
info2.firstName = "ravi"
info2['firstName'] = "ram"
console.log(info2)

// add (dot notation and bracket notation)
info2.city = "pune"
info2['lang'] = "Hindi"
console.log(info2)
// delete(dot notation and bracket noatation)

delete info2.city
delete info2['lang']
console.log(info2)


let vehicle = {
    color:"red",
    type:"sedane"
}

// update
vehicle.color = "blue"
vehicle['color'] = "black"
console.log(vehicle)

// add
vehicle.model = "q6"
vehicle['regNo'] = 123
console.log(vehicle)

// retrive
console.log(vehicle.color)
console.log(vehicle['color'])

// delete 

delete vehicle.color
delete vehicle['type']
console.log(vehicle)


let i = {
    mother:"kanchan",
    father:"shirish"
}
// dot notation does not work inside loop
for(let property in i){
    console.log(property,i[property])
}

