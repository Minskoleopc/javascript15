

// comparison and logical 

// < ,> ,<= , >= ,!= , == ,=== ,!==
let a = 10
console.log(a)  // 10
console.log(typeof a) // number

let a1 = "pune"
console.log(a1) // pune
console.log(typeof a1) // string 

let a2  = true 
console.log(typeof a2) // boolean
console.log(a2) // true

console.log(typeof '10') // string
console.log(typeof 10) 


// entity < entity // output will be boolean
console.log(1 > 0)
console.log(6 == 6)
console.log(6 != 6)
console.log(7 < 8)
console.log(6 >= 5) // true
console.log(7 <= 8)


// ==  , != ----- value 
// === , !== ------ value and type
// strict comparison

console.log(7 === '7') // value and type
console.log(6 !== '6') // value and type
console.log(7 !== 7) // value and type
console.log(7 == '7') // value
console.log( 5 != '5') // value

// logical operator 

// AND 

// True   && True  -- True
// False  && True  -- False
// True   && False  --False
// False  && False  --False

console.log(7 == 7 && 8 == 8)
console.log( 7 != '7' && 9 == '9')
console.log( 7 !== '7' && 9 === '9')
console.log( 7 == 6 && 9 == 8)



// OR 
// True   || True  -- True
// False  || True  -- True
// True   || False  --True
// False  || False  --False

console.log(7 == 7 || 8 == 8) // True
console.log( 7 != '7' || 9 == '9') // True
console.log( 7 !== '7' || 9 === '9') // True
console.log( 7 == 6 || 9 == 8) // False


// NOT
// True False
// False True
console.log(!7 === 7)
console.log(!7 === '7')

// 8 am / 7:30pm -- demo close
