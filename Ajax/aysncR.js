// Asyn vs Sync

// blcoking in nature
// A ---B ---- C /// sync 

// execution -- A  ------ B -------- C

// non - blocking in nature
// A - 3 second

// B - 2 second

// C - 1 second
// execution   

function additionA() {
    console.log("Addition A")
}

function additionB() {
    console.log("AdditionB")
}

additionA()
additionB()

// async code
function additionC() {
    setTimeout(function () {
        console.log('C is executed')
    }, 3000)
}
function additionD() {
    console.log('D is executed')
}
additionC()
additionD()


//Asyn ---- sync 
// user create --- user id ---- info

function getUserInfo() {
    setTimeout(function () {
        console.log('user created')
    }, 3000)
    setTimeout(function () {
        console.log('get id')
    }, 2000)
    setTimeout(function () {
        console.log('user info')
    }, 1000)

}
//getUserInfo()

// call back hell

function getUserInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('get id')
            setTimeout(function () {
                console.log('user info')
            }, 1000)
        }, 2000)
    }, 3000)
}
//getUserInfo()

// Promises 
// pending resolve reject

// let pro = new Promise(function(resolve,reject){
//     let a = 10 
//     let b = 100
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro.then(fn,fn)

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })



// pro
// .then(fn)
// .catch(fn)

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro
// .then(fn)
// .catch(fn)
// .finally(fn)

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will always run')
// })


// call back hell code with promises

function createuser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('user create')
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('get id')
        },2000)
    })
}


function getUserinfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('get userinfo')
        },1000)
    })
}


createuser()
.then(function(str){
    console.log(str)
    return getId()
})
.then(function(str){
    console.log(str)
    return getUserinfo()
})
.then(function(str){
    console.log(str)
})
.catch(function(){
    console.log('error')
})

// async -- await