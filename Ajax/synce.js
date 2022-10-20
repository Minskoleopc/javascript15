// javascript 

// sync (blocking in nature)

//A ------->complete5 

//B------> completet3

//C------> complete 2


//o/p ------>  A    B     C

// async (non - blocking in nature)

//A ------->complete5 

//B------> completet3

//C------> complete2

// C   B   A

//------------------------------------>

function additionA() {
    console.log('A')
}

function additionB() {
    console.log('B')
}

// additionA()
// additionB()

// additionB()
// additionA()

// async

function additionC() {
    setTimeout(function () {
        console.log('C')
    }, 3000)
}

function additionD() {
    console.log('D')
}

//additionC()
//additionD()

//-----------------------------------



//sync 

// CreatUser  -- 5sec
// LoginviaId -- 3sec
// UserInfo   -- 2 sec

// asyn code execute sync
function Facebook() {
    setTimeout(function () {
        console.log('User created')
    }, 5000)
    setTimeout(function () {
        console.log('Login via Id')
    }, 3000)

    setTimeout(function () {
        console.log('User Info')
    }, 2000)
}
//Facebook()

// call back hell

function Facebook() {
    setTimeout(function () {
        console.log('User created')
        setTimeout(function () {
            console.log('Login via Id')
            setTimeout(function () {
                console.log('User Info')
            }, 2000)
        }, 3000)
    }, 5000)
}
//Facebook()



function addA() {
    console.log('A')
}
function addB() {
    console.log('B')
}

// addB()
// addA()

function addC() {
    setTimeout(function () {
        console.log('C')
    }, 2000)
}
function addD() {
    setTimeout(function () {
        console.log('D')
    }, 1000)
}

// addC()
// addD()

// Sync 

// Twitter 

// UserCreate 

// Login 

// Tweer

function Twitter() {
    setTimeout(function () {
        console.log('User Created')
    }, 3000)

    setTimeout(function () {
        console.log('Login')
    }, 2000)

    setTimeout(function () {
        console.log('Adding Tweet')
    }, 1000)
}

//Twitter()
// Call back hell
function Twitter() {
    setTimeout(function () {
        console.log('User Created')
        setTimeout(function () {
            console.log('Login')
            setTimeout(function () {
                console.log('Adding Tweet')
            }, 1000)
        }, 2000)
    }, 3000)
}
Twitter()

// Promises


















