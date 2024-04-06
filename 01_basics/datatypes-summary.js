//primitive datatypes
//7-types:-
/*
string(return type-string)
number(returen type-number)
boolean(return type-true/1,false/0)
bigint(return type-)
null(return type-object)
undefined(return type-undefined)
symbol(returns two different values for same input through different variables of same datatype)

*/
//Reference datatype(non-primitive)
//arrays,functions,objects

const score = 100
const outTemp = null
const isLoggedIn = false
const bigNumber = 28205034976837884738463n

const id = Symbol("abc")
const anotherId = Symbol("abc")
//symbol basically differentiates two similar values with same datatype

//console.log(typeof outTemp)
//console.log(typeof isLoggedIn)
//console.log(typeof score)
//console.log(typeof bigNumber)

//console.log(id==anotherId)
//console.log(id)
//console.log(anotherId)

const heroes = ["tony","captain","thor"];
const myobj = {
    name:"Sanidhya",
    age:20,
}

const myfunction = function(){
    console.log("Hello World")
}

//console.log(typeof myfunction)
//calling the function
//myfunction();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive)=>saare primitive datatypes stack memory me store hote h
//Heap(Reference/non-primitive)=>saare non-primitive datatypes heap memory me store hote h

let numberOne = 12
let numberTwo=numberOne
numberTwo=15

console.log(numberOne)
console.log(numberTwo)

//Primitve types getting stored in stack memory and we get a copy of them and the changes don't apply to the original value

let userOne = {
    name:"user",
    email:"user@gmail.com"
}
let userTwo = userOne
userTwo.email = "Sanidhya@gmail.com"
userTwo.name = "Sanidhya"

console.log(userOne)
console.log(userTwo)
