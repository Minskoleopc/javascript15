// rest operator and spread operator

// program 1

// rest parameter 
function addToAll(...arr){
    //console.log(arr)
    let a1 = arr.reduce(function(acc,el){
        return acc + el
    },0)
    return a1
}
let q1 = addToAll(1,2,3,4,3,4,5,6,7,8,9,2,3,4)
console.log(q1)

//1,2,3,4,5 -----> [1,2,3,4,5]

// program2
let marks = [33,44,55,66,77,88,99]
function firstFiveOnly(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
//firstFiveOnly(marks[0],marks[1],marks[2],marks[3],marks[4])
firstFiveOnly(...marks) //33,44,55,66,77
//[1,2,3]  --- 1,2,3

// program3
let a = [11,22,33]
let b = [44,55,66]
let d = a.concat(b)
console.log(d)
//[11,22,33] ====> 11,22,33
let q3 = [...a,...b]
console.log(q3)

// program 4
//1,2,3,4,5,6 ===> [1,2,3,4,5,6] --- parameter 
// [1,2,3,4,5] ===> 1,2,3,4,5 --- argument

let names = ["chinmay","sameer","ram","laxman","satish"]
names = [...names,"hemant"]
console.log(names)

// program5
//let numbers = [22,33,44,55,66,77,88,99,100]
function filterOut(val,...arr){
    // console.log(val)
    // console.log(arr)
    let q4 = arr.filter(function(el){
        return el > val
    })
    console.log(q4)
}

filterOut(60,55,66,33,44,55,66,7,33,44,55,66,77,33)

// set ---> 
// set ---> 

// 8.00am  set
// 7:30pm - set

