// array 
//             0        1       2     3
let names = ["abhay","sarika","ram","ravi"]

// retrive 
console.log(names[0])

// add 
// names.unshift('poorva')
// names.push('poorva')
// console.log(names)

// update 
// names[1] = "amit"
// console.log(names)


// delete 
// names.pop()
// names.shift()
// names.splice(1,2)


// for(let i = 0 ; i < names.length ;i++){
//     //console.log(i)
//     console.log(names[i])
// }

// number string array object 
// object - property and methods
//              0           1       2  3
let info3 = ["chinmay","deshpande",23,45]

let info4 = {
    // property:value
    // key:value 
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45

}
// object does not stores the value by index
// objects stores the value in propert:value format

// retrive  (dot notation and bracket notation)
console.log(info4.firstName)
console.log(info4['firstName'])

// update (dot notation and bracket notation)
info4['firstName'] = "tanmay"
info4.firstName = "pratik"
console.log(info4)


// add (dot notation and bracket notation)
info4.city = "pune"
info4['language'] = "hindi"
console.log(info4)

// delete  (dot notation and bracket notation)

delete info4.city
delete info4['language']
console.log(info4)

/////////////////////////////////////////////

let i = {
    color:"blue",
    type:"auto"
}

// retrive 
console.log(i.color)
console.log(i['color'])

// update 
i.type = "manual"
i['type'] = "semi"
console.log(i)

// add
i.regNo = 123
i['regNo'] = 456
console.log(i)

// delete 

delete i.type
delete i['regNo']
console.log(i)

let person = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34
}
//  dot notation does not work inside loop
//  bracket notation
for(let property in person){
    console.log(property)
}