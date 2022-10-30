// // // // sync 


// // // function greet(){
// // //     console.log("hello");
// // // }

// // // function greet2(){
// // //     console.log("bye")
// // // }


// // // greet2()
// // // greet()


// // // function greet3(){
// // //     setTimeout(function(){
// // //         console.log("hello")
// // //     },3000)
// // // }

// // // function greet4(){
// // //     setTimeout(function(){
// // //         console.log("Bye")
// // //     },2000)
// // // }
// // // greet3()
// // // greet4()

// // // async ----- sync 

// // // userCreate ----- getID -----getInfo

// // // function getInfo(){

// // //     setTimeout(function(){
// // //         console.log("user created")
// // //     },3000)

    
// // //     setTimeout(function(){
// // //         console.log("get id")
// // //     },2000)

    
// // //     setTimeout(function(){
// // //         console.log("get info")
// // //     },1000)

// // // }

// // // getInfo()



// // function getInfo(){
// //     setTimeout(function(){
// //         console.log("user created")
// //         setTimeout(function(){
// //             console.log("get id")
// //             setTimeout(function(){
// //                 console.log("get info")
// //             },1000)
// //         },2000)
// //     },3000)

// // }
// // getInfo()

// // promises

// let pro = new Promise(function(resolve, reject){
//     let a = 10 
//     let b = 5
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("Bye")
//     }
// })

// // consuming the promise
// // pro.then(function(str){
// //     console.log(str)
// // },function(str){
// //     console.log(str)
// // })


// // pro.then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })


// // pro.then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })
// // .finally(function(){
// //     console.log("hello")
// // })


// // pro.then(function(str){
// //     console.log(str)
// //     return "hello"
// // })
// // .then(function(a){
// //     console.log(a)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })
// // .finally(function(){
// //     console.log("hello")
// // })



// // function getInfo(){
// //     setTimeout(function(){
// //         console.log("user created")
// //         setTimeout(function(){
// //             console.log("get id")
// //             setTimeout(function(){
// //                 console.log("get info")
// //             },1000)
// //         },2000)
// //     },3000)

// // }
// // getInfo()

// function createUser(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("user created")
//         },3000)
//     })
// }

// function getID(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("getting ID")
//         },2000)
//     })
// }

// function getInfo(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("getting info")
//         },1000)
//     })
// }

// // createUser()
// // .then(function(str){
// //     console.log(str)
// //     return  getID()
// // })
// // .then(function(str){
// //     console.log(str)
// //     return  getInfo()
// // })
// // .then(function(str){
// //     console.log(str)
// // })

// // asyn await 
// async function getInforamtion(){
//     let a = await createUser()
//     console.log(a)
//     let b = await getID()
//     console.log(b)
//     let c = await getInfo()
//     console.log(c)
// }
// getInforamtion()

// console.log(b.data[0].email)
// console.log(b.support.text)
// let b = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

function getUsers(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        return res.json()
    })
    .catch(function(a){
        console.log(a)
    })
    .then(function(res){
        //console.log(res.data)
        res.data.slice(0,5)

        res.data.forEach(element => {
            renderHtml(element)
        });
    })

}
getUsers(2)






function renderHtml(obj){
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
    document.write(`<h1>${obj.id}</h1>`)
    document.write(`<h1>${obj.email}</h1>`)
    document.write(`<img src = ${obj.avatar}>`)
}

//renderHtml(b.data[0])

// b.data.forEach(function(el){
//     renderHtml(el)
// })









