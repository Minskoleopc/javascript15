{/* <h1 id = "one">Fruits</h1>  
<p class = "two">para</p>
<ul>
    <li class = "fruit">Apple</li> 
    <li class = "fruit">Mango</li>
    <li class = "fruit">Banana</li>
    <li class = "fruit">Grapes</li>
</ul> */}

let headOne  = document.querySelector('h1')
let headOneById = document.querySelector('#one')
let byclassName = document.querySelector('.two')
let firstElement = document.querySelector('li')
let liList = document.querySelectorAll('li')
let liListElement  = document.querySelectorAll('.fruit') // NodeList

console.log(liList)
console.log(liListElement) // nodeList

//retrive 
let qw = document.getElementById('one')
console.log(qw)
let fruitList = document.getElementsByClassName('fruit') //HtmlCollection
console.log(fruitList)
liListElement// nodelist
fruitList // htmlCollection
let yLi = document.getElementsByTagName('li')
console.log(yLi)
let m = document.getElementsByName('m')
console.log(m)

// style and attritube
//    <p class = "two">para</p>
console.log(byclassName.className) // string
console.log(byclassName.classList)
byclassName.classList.add('three')
byclassName.classList.add('three','four','five')
byclassName.classList.remove('four')
byclassName.classList.toggle('four') // add
byclassName.classList.toggle('four')

// attribute ---- id class name

byclassName.setAttribute('data-cy','new')
byclassName.setAttribute('id','ne')
console.log(byclassName.getAttribute('class'))
console.log(byclassName.getAttribute('id'))
console.log(byclassName.getAttribute('data-cy'))

// 9pm oops

// Object 
// 1 object literal 
// 2 function constructor
// 3 es6 class
// 4 object .create method


