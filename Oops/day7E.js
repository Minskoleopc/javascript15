// A

// B

// C

class GrandFather {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather {
    
    constructor(firstName,lastName,fName){
        super(firstName,lastName)  
        this.fName = fName
    }

    displayFName(){
        console.log(this.fName + this.firstName+this.lastName)
    }

}
class Son extends Father {
    constructor(firstName,lastName,fName,Sname){
        super(firstName,lastName,fName)  
        this.Sname = Sname
    }

    displaySName(){
        console.log(this.Sname + this.fname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.fName)
console.log(chinmay.Sname)

chinmay.displayGName()
chinmay.displayFName()
chinmay.displaySName()


//----------------------------------------------------------

class Mother {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayMotherName(){
        console.log(this.firstName + this.lastName)
    }

}

class SonA extends Mother {
    constructor(firstName,lastName,Sname){
        super(firstName,lastName)
        this.Sname = Sname
    }
    displaySname(){
        console.log(this.Sname + this.lastName)
    }
}

class DaughterA extends Mother {
    constructor(firstName,lastName,Dname){
        super(firstName,lastName)
        this.Dname = Dname
    }
    displaySname(){
        console.log(this.Dname + this.lastName)
    }
}

let chinmaya = new SonA("kanchan","deshpande","chinmay")
let gauri = new DaughterA("kanchan","deshpande","gauri")


// polymorphism

// overloading 


class Addition {
    add(a,b){
        console.log(a+b)
    }
    add(a,b,c){
        console.log(a+b+c)
    }
    add(a,b,c,d){
        console.log(a+b+c+d)
    }
}

let a = new Addition()
a.add(12,34,23,45)

// overload

