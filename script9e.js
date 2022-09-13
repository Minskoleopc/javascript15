//  1 to 10
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// for loop 

// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
//     // statements 
//     // statements
// }


// print hello 3 times 

for(let i = 0 ; i < 3 ; i++){  // 1  // 2 // 3
    console.log('hello') // hello /// hello //// hello
}


// print 1 to 5

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 , 2 ,3 , 4 , 5
}
// print 1 to 10

for(let i = 1 ; i < 11 ; i++){
    console.log(i)
}
// print 10 to 1 
for(let i = 10 ; i >= 1 ; i--){ // 9 --------------// 1 // 0
    console.log(i) // 10 , 9----------------2 , 1
}

// table of 2
// 2,4,6,8,10,12,14,16,18,20

for(let i = 2 ; i <= 20 ; i = i + 2){  // 4 // 6------ 20 ---- 22
    console.log(i) // 2 , 4 , 6 ------- 20
}

// break statement with for loop
for(let i = 1 ; i <=5 ; i++){ //2 // 3
    console.log(i) // 1 // 2 // 3
    if(i == 3){
        break
    }
}

for(let i = 1 ; i <=5 ; i++){  // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1  // 2
}

// continue statement with for 


for(let i = 0 ; i <= 5 ; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}








// while loop 