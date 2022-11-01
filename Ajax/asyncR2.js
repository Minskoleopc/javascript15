// // // // // sync 


// // // // function greet(){
// // // //     console.log("hello");
// // // // }

// // // // function greet2(){
// // // //     console.log("bye")
// // // // }


// // // // greet2()
// // // // greet()


// // // // function greet3(){
// // // //     setTimeout(function(){
// // // //         console.log("hello")
// // // //     },3000)
// // // // }

// // // // function greet4(){
// // // //     setTimeout(function(){
// // // //         console.log("Bye")
// // // //     },2000)
// // // // }
// // // // greet3()
// // // // greet4()

// // // // async ----- sync 

// // // // userCreate ----- getID -----getInfo

// // // // function getInfo(){

// // // //     setTimeout(function(){
// // // //         console.log("user created")
// // // //     },3000)


// // // //     setTimeout(function(){
// // // //         console.log("get id")
// // // //     },2000)


// // // //     setTimeout(function(){
// // // //         console.log("get info")
// // // //     },1000)

// // // // }

// // // // getInfo()



// // // function getInfo(){
// // //     setTimeout(function(){
// // //         console.log("user created")
// // //         setTimeout(function(){
// // //             console.log("get id")
// // //             setTimeout(function(){
// // //                 console.log("get info")
// // //             },1000)
// // //         },2000)
// // //     },3000)

// // // }
// // // getInfo()

// // // promises

// // let pro = new Promise(function(resolve, reject){
// //     let a = 10 
// //     let b = 5
// //     if(a == b){
// //         resolve("hello")
// //     }
// //     else {
// //         reject("Bye")
// //     }
// // })

// // // consuming the promise
// // // pro.then(function(str){
// // //     console.log(str)
// // // },function(str){
// // //     console.log(str)
// // // })


// // // pro.then(function(str){
// // //     console.log(str)
// // // })
// // // .catch(function(str){
// // //     console.log(str)
// // // })


// // // pro.then(function(str){
// // //     console.log(str)
// // // })
// // // .catch(function(str){
// // //     console.log(str)
// // // })
// // // .finally(function(){
// // //     console.log("hello")
// // // })


// // // pro.then(function(str){
// // //     console.log(str)
// // //     return "hello"
// // // })
// // // .then(function(a){
// // //     console.log(a)
// // // })
// // // .catch(function(str){
// // //     console.log(str)
// // // })
// // // .finally(function(){
// // //     console.log("hello")
// // // })



// // // function getInfo(){
// // //     setTimeout(function(){
// // //         console.log("user created")
// // //         setTimeout(function(){
// // //             console.log("get id")
// // //             setTimeout(function(){
// // //                 console.log("get info")
// // //             },1000)
// // //         },2000)
// // //     },3000)

// // // }
// // // getInfo()

// // function createUser(){
// //     return new Promise(function(resolve){
// //         setTimeout(function(){
// //             resolve("user created")
// //         },3000)
// //     })
// // }

// // function getID(){
// //     return new Promise(function(resolve){
// //         setTimeout(function(){
// //             resolve("getting ID")
// //         },2000)
// //     })
// // }

// // function getInfo(){
// //     return new Promise(function(resolve){
// //         setTimeout(function(){
// //             resolve("getting info")
// //         },1000)
// //     })
// // }

// // // createUser()
// // // .then(function(str){
// // //     console.log(str)
// // //     return  getID()
// // // })
// // // .then(function(str){
// // //     console.log(str)
// // //     return  getInfo()
// // // })
// // // .then(function(str){
// // //     console.log(str)
// // // })

// // // asyn await 
// // async function getInforamtion(){
// //     let a = await createUser()
// //     console.log(a)
// //     let b = await getID()
// //     console.log(b)
// //     let c = await getInfo()
// //     console.log(c)
// // }
// // getInforamtion()

// // console.log(b.data[0].email)
// // console.log(b.support.text)
// // let b = {
// //     "page": 2,
// //     "per_page": 6,
// //     "total": 12,
// //     "total_pages": 2,
// //     "data": [
// //         {
// //             "id": 7,
// //             "email": "michael.lawson@reqres.in",
// //             "first_name": "Michael",
// //             "last_name": "Lawson",
// //             "avatar": "https://reqres.in/img/faces/7-image.jpg"
// //         },
// //         {
// //             "id": 8,
// //             "email": "lindsay.ferguson@reqres.in",
// //             "first_name": "Lindsay",
// //             "last_name": "Ferguson",
// //             "avatar": "https://reqres.in/img/faces/8-image.jpg"
// //         },
// //         {
// //             "id": 9,
// //             "email": "tobias.funke@reqres.in",
// //             "first_name": "Tobias",
// //             "last_name": "Funke",
// //             "avatar": "https://reqres.in/img/faces/9-image.jpg"
// //         },
// //         {
// //             "id": 10,
// //             "email": "byron.fields@reqres.in",
// //             "first_name": "Byron",
// //             "last_name": "Fields",
// //             "avatar": "https://reqres.in/img/faces/10-image.jpg"
// //         },
// //         {
// //             "id": 11,
// //             "email": "george.edwards@reqres.in",
// //             "first_name": "George",
// //             "last_name": "Edwards",
// //             "avatar": "https://reqres.in/img/faces/11-image.jpg"
// //         },
// //         {
// //             "id": 12,
// //             "email": "rachel.howell@reqres.in",
// //             "first_name": "Rachel",
// //             "last_name": "Howell",
// //             "avatar": "https://reqres.in/img/faces/12-image.jpg"
// //         }
// //     ],
// //     "support": {
// //         "url": "https://reqres.in/#support-heading",
// //         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
// //     }
// // }

// function getUsers(pageNumber) {
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//         .then(function (res) {
//             return res.json()
//         })
//         .catch(function (a) {
//             console.log(a)
//         })
//         .then(function (res) {
//             //console.log(res.data)
//             //res.data.slice(0,5)
//             //res.data.slice(-5)

//             res.data.forEach(element => {
//                 renderHtml(element)
//             });
//         })

// }
// getUsers(2)

// // // listOf 
// //             request
// // server<-------------------client
// //       --------------------> json









// function renderHtml(obj) {
//     document.write(`<h1>${obj.first_name}</h1>`)
//     document.write(`<h1>${obj.last_name}</h1>`)
//     document.write(`<h1>${obj.id}</h1>`)
//     document.write(`<h1>${obj.email}</h1>`)
//     document.write(`<img src = ${obj.avatar}>`)
// }

// //renderHtml(b.data[0])

// // b.data.forEach(function(el){
// // //     renderHtml(el)
// // // })

// // function addition(){
// //     console.log("A")
// // }
// // function additionB(){
// //     console.log("B")
// // }
// // addition()
// // additionB()


// // // async
// // function addition(){
// //     setTimeout(function(){
// //         console.log("Hello")
// //     },2000)
// // }
// // function additionB(){
// //     console.log("B")
// // }
// // addition()
// // additionB()


// // async code ---- sync 


// function getInfo() {
//     setTimeout(function () {
//         console.log("getid")
//     }, 2000)

//     setTimeout(function () {
//         console.log("usercreated")
//     }, 3000)

//     setTimeout(function () {
//         console.log("getInfo")
//     }, 1000)
// }

// //getInfo()



// function getInfo() {
//     setTimeout(function () {
//         console.log("usercreated")
//         setTimeout(function () {
//             console.log("getid")
//             setTimeout(function () {
//                 console.log("getInfo")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()



// // promises 

// let pro = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 5

//     if(a == b ){
//         resolve(5)
//     }

//     if(a == b ){
//         reject(6)
//     }

// })

// pro.then(function(s){
//     console.log(s)
// },function(e){
//     console.log(e)
// })

// pro
// .then(function(e){
//     console.log(e)
// })
// .catch(function(r){
//     console.log(r)
// })

// pro
// .then(function(s){
//     console.log(q)
// })
// .catch(function(e){
//     console.log(e)
// })
// .finally(function(){
//     console.log("i will run")
// })

// pro
// .then(function(s){
//     return s
// })
// .then(function(w){
//     console.log(w)
// })
// .catch(function(e){
//     console.log(ww)
// })
// .finally(function(){
//     console.log('finallu closed')
// })



// function creatUser(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve('hello')
//         },3000)
//     })
// }

// function getInfo(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve('getinfo')
//         },1000)
//     })
// }

// function getId(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve('get id')
//         },2000)
//     })
// }

// creatUser()
// .then(function(str){
//     console.log(str)
//     return getId()

// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })

// async await 

// async function getInformation(){

//     let a  = await creatUser()
//     console.log(a)
//     let b = await getId()
//     console.log(b)
//     let c = getInfo()
//     console.log(c)

// }
// getInformation()

// function getUser(pageNumber){
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(res){
//         console.log(res)
//     })
// }
// getUser(2)



// api ---- id  ----- 2nd api


function getUserPageWise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        return res.json()
    })

}
function getInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
}


// getUserPageWise(2).then(function(res){
//     console.log(res.data[0].id)
//     let id = res.data[0].id
//     return getInfo(id)
// })
// .then(function(res){
//     console.log(res.data)
// })


async function getInfoUser(pageNumber){
    let a = await getUserPageWise(pageNumber)
    let id  = a.data[0].id
    let q2 = await getInfo(id)
    console.log(q2.data)
}   
getInfoUser(2)

// promises combinators 

// python --- 9pm / 4pm
// testing cypress --- 9pm / 8:30am










