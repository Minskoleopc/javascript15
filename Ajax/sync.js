//A ----->// 5 sec
//B -----> // 3sec
//C -----> // 1 sec

// C --->
// B --->
// A --->


// sync
// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }
// additionB()
// additionA()


// function addtionC(){
//     setTimeout(function(){
//         console.log('C')
//     },3000)
// }

// function additionD(){
//     console.log('D')
// }
// addtionC()
// additionD()



// Facebook 

// user create 
// login via id
// fillUserInfo

// asyn call excute sync
// function Facebook(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)

//     setTimeout(function(){
//         console.log('login via id')
//     },2000)

//     setTimeout(function(){
//         console.log('fill user profile')
//     },1000)
// }
// Facebook()


// call back hell
// asyn call excute sync
function Facebook() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('login via id')
            setTimeout(function () {
                console.log('fill user profile')
            }, 1000)

        }, 2000)

    }, 3000)
}
//Facebook()

// Es6 promise


// sync 

// function addA(){
//     console.log("calling A")
// }
// function addB(){
//     console.log("calling B")
// }

// addB()
// addA()

// function addC(){
//     setTimeout(function(){
//         console.log('Calling C')
//     },3000)
// }

// function addD(){
//     console.log('Calling D')
// }

// addC()
// addD()


// function Twitter(){

//     setTimeout(function(){
//         console.log('user created')
//     },4000)

//     setTimeout(function(){
//         console.log('Login via Id')
//     },3000)

//     setTimeout(() => {
//         console.log('User info')
//     },2000);
// }

// Twitter()




// function Twitter() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('Login via Id')
//             setTimeout(() => {
//                 console.log('User info')
//             }, 2000);
//         }, 3000)

//     }, 4000)
// }
// Twitter()

// Promises ====>  pending , resolve, reject (status)
// pending
// resolve
// reject
let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 100
    if (a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

// consume promise
pro.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})


let pro2 = new Promise(function (resolve, reject) {
    let x = 200
    let y = 200
    if (x == y) {
        resolve([1, 2, 3])
    }
    else {
        reject([-1,- 2, -3])
    }
})

pro2.then(function(a){
    console.log(a[0])
},function(b){
    console.log(b[0])
})


// unittest and revision -- 6 hours

// 8.00 am ---- > 8:10am
// Sunday , Monday , Tuesday , Wednesday
// Thursday ---- Cypress
// Cypress ---- Playwright


// DXC --- NCR ---- 1500 NAB -- cypress
// DXC ---- 200 --- 40






