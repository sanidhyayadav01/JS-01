function multiplyBy5(num) {
    return num*5;
}
multiplyBy5.power = 2;

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


function CreateUser(username,score) {
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function(){
    this.score++;
}
CreateUser.prototype.Printme = function(){
    console.log(`Score is ${this.score}`);
}

const userOne = new CreateUser("Sunny",15);
const userTwo = new CreateUser("Akshu",16);
// userOne.increment();
// userOne.Printme();


//----------------------------------------------Prototype------------------------------------------

let myName = "Sunny     "
let myHomeCity = "Khandwa   "

// console.log("The length of username is :",myName.length);
// console.log("The True length of username is :",myName.TrueLength);

let myHeroes = ["Thor","Spiderman"];

let HeroPower = {
    Thor:"hammer",
    Spiderman:"Sling",

    getSpideyPower:function(){
        console.log(`Spiderman has ${this.Spiderman} power`);
    }
}

Object.prototype.Sunny = function(){
    console.log("Sunny is present in the global object prototype");
    }
Array.prototype.HeySandy = function(){
    console.log("Sandy says hello from the array prototype");
    }


// myHeroes.Sunny()
// myHeroes.HeySandy()

// HeroPower.Sunny()
//HeroPower.HeySandy()

/* 
kisi ek particular field ka prototype ko koi ek different field access nhi kr skti ,
lekin koi bhi field global object prototype me declare kri huyi properties ko as a whole access kr skti hai
*/

//------------------------------------------Inheritance-------------------------------------

const teacher = {
    teaching:true
}

const teachingSupport = {
    SupportAvailable:true
}

const AssignSupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingSupport
}
//console.log(AssignSupport.isAvailable);

teacher.__proto__ = AssignSupport;
//console.log(teacher.fullTime);
Object.setPrototypeOf(teacher,teachingSupport);
//console.log(teacher.SupportAvailable);


//----------------------------------------------------------
let newText = "Hope   "
String.prototype.TrueLength = function(){
    console.log(`True length of the string is ${this.trim().length}`);
    console.log(`${this}`);
}
console.log(`Length of the string is ${newText.length}`);
newText.TrueLength()
