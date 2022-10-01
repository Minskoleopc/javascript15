let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#addButton')

buttonA.addEventListener('click', function () {
    let text = inputText.value
    let newL = document.createElement('li') // <li></li>
    newL.textContent = text
    createButton(newL)
    ulList.appendChild(newL)
    inputText.value = ""

})
ulList.addEventListener('click', function (event) {

    if (event.target.tagName === "BUTTON") {
        if (event.target.className == "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        else if (event.target.className == "down") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
           
        }
        else if (event.target.className == "up") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let prevLi = li.previousElementSibling
            if(prevLi){
                ul.insertBefore(li,prevLi)
            }


        }

    }


})




// Buttons are not added for new list element
function createButton(li) {
    // <button class = "remove">remove</button>
    // <button class = "down">down</button>
    // <button class = "up">up</button>
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" // // <button>remove</button>
    remove.className = "remove"  // <button class = "remove">remove</button>
    //remove.classList.add('remove')
    li.appendChild(remove)

    let down = document.createElement('button') // <button><button>
    down.textContent = "down" // // <button>down<button>
    down.className = "down" // // <button class = "down">down<button>
    li.appendChild(down)


    let up = document.createElement('button')
    up.textContent = "up"
    up.className = "up"
    li.appendChild(up)

}

