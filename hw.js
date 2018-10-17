var Person = class{
    constructor(name, age){
        this.name = name
        this.age = age
        this.concerts = []

    }
    sayName(){
    console.log('My Name is', this.name)
    }
    sayAge(){
            return this.age
        }
    attend(concert){
        this.concerts.push(concert)
        concert.attendees.push(this)
    }
}


var Sid = new Person ('Sid', 32)
var Anna = new Person ('Anna', 30)
var Markus = new Person ('Markus', 40)
//add(Sid.age, Lena.age)

var concert = class{
    constructor(name){
        this.name=name
        this.attendees=[]
    }
}
var workshop=class{
    constructor(name){
        this.name=name
        this.attendees=[]
    }
}
var MB = new concert ('Melt Banana')
var wk = new workshop('Sids Workshop')
console.log(MB)
Sid.attend(MB)
Anna.attend(MB)
Markus.attend(MB)
console.log(wk)
Sid.attend(wk)