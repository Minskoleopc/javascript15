// comparison operator 

// < , > , <= , >= , != , == ,=== , !==

let a = 10
console.log(typeof a)

let b = "chinmay"
console.log(typeof b)

let c = true
console.log(typeof c)

// entity < entity =====> boolean
// string     number
// '10'  and  10


// < , > , <= , >= , != , == ,=== , !==

// == !=  // value 
// ===  !==  // value and type
console.log(2 > 3)
console.log(5 == 5)
console.log(9 >= 7)
console.log(6 <= 7)
console.log(6 < 8)
console.log(9 != 7)

console.log(5 == '5') // true
console.log(5 != '5') // false
console.log('5' !== '5') //(value and type) // false
console.log(6 !== 6) // false
console.log(6 === 6) // true
console.log(6 != '6') // false
console.log(6 !== '6') // true

// Logical operator

// AND 

// True  && True    ==> True
// True  && False   ==> False
// False && True    ==> False
// False && False   ==> False

console.log( 6 === 6 && 2 >= 1)
console.log(7 !== '7' && 7 == '7')
console.log(7 !== '7' && 7 != '7')
console.log(8 > 9 && 6 == 6)
console.log( 3 === 5 && 7 != 7)

// OR 

// True  || True    ==> True
// True  || False   ==> True
// False || True    ==> True
// False || False   ==> False

console.log( 6 === 6 || 2 >= 1)
console.log(7 !== '7' || 7 == '7')
console.log(7 !== '7' || 7 != '7')
console.log(8 > 9 || 6 == 6)
console.log( 3 === 5 || 7 != 7)


// NOT
// True False 
// False True

console.log(!6 === 6)
console.log(!2 ==='2')


// conditional statement
// one input and mutiple output

// numberT > 0 && numberT <= 5    ---> 5 %
// numberT > 5 && numberT <= 10    ---> 10 %
// numberT > 10 -- 20 %

// if(8 == 8){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

//if block

let numberT = -5

// if(numberT > 0 && numberT <= 5){  // 1-5
//     console.log('5 % discount')
// }
// if(numberT > 5 && numberT <= 10){ // 5 -10
//     console.log('10 % discount')
// }
// if(numberT > 10){
//     console.log('20 % discount')
// }

if(numberT > 0 && numberT <= 5){  // 1-5
    console.log('5 % discount')
}
else if(numberT > 5 && numberT <= 10){ // 5 -10
    console.log('10 % discount')
}
else if(numberT > 10){
    console.log('20 % discount')
}
else {
    console.log('incorrect value')
}

// marks > 90 --- > Grade A
// marks > 75 --->  Grade B
// marks > 65 --->  Grade C

let marks = 76
// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }

// if(marks > 90){
//     console.log('Grade A')
// }
// else if(marks > 75){
//     console.log('Grade B')
// }
// else if(marks > 65){
//     console.log('Grade C')
// }