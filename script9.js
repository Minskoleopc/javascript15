// // print from 1 to 10
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// // 2 type of loop ---- for loop , while loop


// // for(intialization ; conditionCheck ; increment/decrement){
// //     // statement
// // }

// //print from zero  to five
// for (let i = 0; i < 6; i++) { // 1 // 2 // 3 // 4 // 5 //6
//     console.log(i) // 0 , 1 ,2 , 3 , 4 ,5
// }

// // print one to three
// for (let i = 1; i <= 3; i++) { //2 // 3 // 4
//     console.log(i) // 1 , 2 ,3
// }

// // print 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
// // print 10 to 1
// for (let i = 10; i >= 1; i--) { // 9 // 8 // 7 // 6 // 5 // 4 // 3 //2 // 1
//     console.log(i) // 10,9,8,7,6,5, 4 ,3,2,1
// }

// // table of 2 // 2,4,6,8,10,12,14,16,18,20

// for (let i = 2; i <= 20; i = i + 2) { // 4 // 6 // 8 -------- 20,22
//     console.log(i) // 2 , 4 , 6 , 8  , 10 ,12,14,16,18,20
// }

// // break statement with for loop 
// // break;

// for(let i = 1 ; i <= 5 ; i++){ // 2
//     console.log(i)  // 1 // 2
//     if(i == 2){
//         break
//     }
// }

// for(let i = 1 ; i <= 5 ; i++){  // 2
//     if(i == 2){
//         break
//     }
//     console.log(i)  // 1 
// }
// // continue statement with for loop

// // continue

// for(let i = 0 ; i < 5 ; i++){ // 1 // 2 //3 // 4 //5
//     if( i == 2){
//         continue
//     }
//     console.log(i) // 0 , 1 , 3 , 4
// }

// for(let i = 1 ; i <=3 ; i++){ // 2 // 3 // 4
//     console.log('hello') // hello , hello , hello
// }

// for loop  , while loop

// for(intilization ; conditonCheck ; increment/decrement){
//     // statement 
//     // statement2
// }

// print hello 3 tyms

// for(let i = 0 ; i < 3 ; i++){ // 1 // 2 // 3
//     console.log('hello') // hello , hello ,hello
// }


// // print 1 to 5

// for(let i = 1; i < 6 ; i++){  // 2 // 3 /// 4 // 5 //
//     console.log(i)  //1 , //2 , //3 , // 4 . // 5
// }


// //print 1 to 10

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i)
// }

// // print 10 to 1 

// for(let i = 10 ; i >= 1 ; i--){
//     console.log(i)
// }

// // print table of 2
// for(let i = 2 ; i <= 20 ; i = i + 2){
//     console.log(i)
// }

// // break 

// for(let i = 0 ; i < 6 ; i++){ //1  // 2 // 3
//     if(i == 3){
//         break
//     }
//     console.log(i)  // 0 , 1 , 2
// }


// for(let i = 0 ; i < 6 ; i++){  
//     console.log(i)  // 0 , 1 , 2 , 3
//     if(i == 3){
//         break
//     }
// }

// // continue with loop
// for(let i = 1 ; i <= 5 ; i++){ // 2  // 3 // 5 // 6
//     if(i == 3){
//         continue;
//     }

//     console.log(i) // 1 ,2 , 4 , 5
// }

//intilization

// while(condition){


//     // increment

// }


let i1 = 0 

while(i1 < 3){
    console.log("hello") // "hello" , "hello" ,"hello"
    i1 ++ // 1 // 2 // 3
}

// print 1 to 5

let i2 = 1
while(i2 <= 5){
    console.log(i2)

    i2++
}
// print 1 to 10

let i3 = 1
while(i3 <= 10){
    console.log(i3)
    i3 ++
}

// print 10 to 1
let i4 = 10
while(i4 >= 1){
    console.log(i4)
    i4 --
}

// table of 3
let i5 = 3
while(i5 <= 30){
    console.log(i5)
    i5 = i5 + 3
}

// for - break


for(let i = 0 ; i < 5 ; i++){ // 1 // 2
    console.log(i) // 0 , 1 ,2
    if(i == 2){
        break
    }
}

for(let i = 0 ; i < 5 ; i++){   //1 // 2
    
    if(i == 2){
        break
    }

    console.log(i) // 0 , 1
}


i6 = 1

while(i6 < 5){
    if(i6 == 2){
        break
    }
    console.log(i6) // 1
    i6 ++ //2
}

i7 = 1

while(i7 < 5){
    console.log(i7)  // 1 // 2
    if(i7 == 2){
        break
    }
    i7 ++  // 2
}

// while with continue