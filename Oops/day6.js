// multilevel


class GrandFather {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather {

    constructor(firstName,lastName,fName){
        super(firstName,lastName)
        this.fname = fName
    }

    displayFatherName(){
        console.log(this.fname+this.firstName+this.lastName)
    }
   
}

class Son extends Father {
    constructor(firstName,lastName,fName,Sname){
      super(firstName,lastName,fName)
      this.Sname = Sname
    }

    displaySonName(){
        console.log(this.Sname + this.fname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")

chinmay.firstName
chinmay.lastName
chinmay.fname
chinmay.Sname

chinmay.displayName()
chinmay.displayFatherName()
chinmay.displaySonName()


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
    displaySName(){
        console.log(this.Sname + this.lastName)
    }
}

class DaughterA extends Mother{
    constructor(firstName,lastName,Dname){
        super(firstName,lastName)
        this.Dname = Dname
    }
    displayDName(){
        console.log(this.Dname + this.lastName)
    }
}


let SonA = new SonA("kanchan","deshpande","chinmay")
let DaughterA = new DaughterA("kanchan","deshpande","gauri")