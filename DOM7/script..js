{/* <h1>HeadOne</h1>
<p id = "para">Para</p>
<ul>
    <li class = "fruit">Apple</li>
    <li class = "fruit">Mango</li>
    <li class = "fruit">Banana</li>
    <li class = "fruit">Grapes</li>
    <li class = "fruit">Chikoo</li>
</ul>
<script src = "script..js"></script> */}

let headOne = document.querySelector('h1')
let para = document.querySelector('#para')
let listFirstElement = document.querySelector('.fruit')
let allLiELements = document.querySelectorAll('.fruit') // nodeList

console.log(headOne)
console.log(para)
console.log(listFirstElement)
console.log(allLiELements)

// Retrive elements 

let paraE = document.getElementById('para')
let allLi = document.getElementsByClassName('fruit') // html collection
let allLiName = document.getElementsByName('o') // node list
let q = document.getElementsByTagName('li') // htmlcollection

console.log(paraE)
console.log(allLi)
console.log(allLiName)
console.log(q)


// allLi ---- html collection
// allLiELements - node list
// working with style and attribute
// <h3 id ="headingThree" class = "cheadingThree" >headingThree</h3>
// class , id , name

let headThree = document.querySelector('h3')
console.log(headThree.classList)

headThree.classList.add('a','b')
headThree.classList.remove('a')
headThree.classList.toggle('a') // add
headThree.classList.toggle('a') // remove

headThree.setAttribute('b', "new")
let q2 = headThree.getAttribute('b')
console.log(q2)