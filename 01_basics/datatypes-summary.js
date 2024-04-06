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

console.log(typeof outTemp)
console.log(typeof isLoggedIn)
console.log(typeof score)
console.log(typeof bigNumber)

console.log(id==anotherId)
console.log(id)
console.log(anotherId)

const heroes = ["tony","captain","thor"];
const myobj = {
    name:"Sanidhya",
    age:20,
}

const myfunction = function(){
    console.log("Hello World")
}

console.log(typeof myfunction)
//calling the function
myfunction();