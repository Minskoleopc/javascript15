
function addA(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f)
}
addA(12,22,33,4,55,66)


// program2
// rest operator
function addB(...arr){
    console.log(arr)
    let q12 = arr.reduce(function(acc,el){
        return acc + el
    },0)
    return q12
}
let e = addB(12,22,33,4,55,66,3,4,5,6,7,4,5,6)
console.log(e)
// 12,33,44,11,23  =====> [12,33,44,11,23] // rest operator




let marks = [33,44,55,66,77,88,99,100]
function addFirstFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
//addFirstFive(marks[0],marks[1],marks[2],marks[3],marks[4])
addFirstFive(...marks)

//[33,44,55,66,77,88,99,100]  --- > 33,44,55,66,77,88,99,100


//1,2,3 ===> [1,2,3] --- rest operator
//[1,2,3] ===> 1,2,3 -- spread operator