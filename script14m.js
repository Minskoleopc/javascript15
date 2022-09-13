// program 1

//                0    1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = [] // [33,32]
// [33,32,31,30]
// currentYear - BirthYear

for(let i = 0 ; i < birthYear.length ; i++){ //1 // 2 // 3
    //console.log(i) // 0 , 1 , 2 , 3
    //console.log(2022 - birthYear[i])
    let ag = 2022 - birthYear[i] // 32
    ages.push(ag)
}
console.log(ages)

// program 2
//           0   1  2  3 4  5  6  7
let marks = [33,44,55,66,55,22,33,44]
let above35 = [] // [44]
//[44,55,66,55,44]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 35){
        above35.push(marks[i])
    }
}
console.log(above35)

// program 3
//           0   1  2
let total = [11,22,33]  //66
let sum = 0

for(let i = 0 ; i < total.length ; i++){
    //console.log(i)
    //console.log(total[i])
    sum = sum + total[i]

    //      0  +   11  =======> 11
    //      11 +   22  =======> 33
    //      33 +   33  =======> 66 
}
console.log(sum)

// program 4
//             0          1         2        3
let cities = ["pune","banglore","chennai","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+cities[i])
}

// Array -- 8 