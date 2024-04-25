//singleton
//jab bhi koi object literals se banta h to vo singleton nhi hota h 
//aur jab object constructor se bnta h to vo singleton hota h

//object.create()->iss method se constructor vaala object bnta h jo singleton hota h

//object literals

const mysymb = Symbol("Key1")

const JsUser = {
    name:"Sanidhya Yadav",
    email:"Sanidhya@gmail.com",
    [mysymb]:"MyKey1",
    age:20,
    location:"Indore",
    IsLoggedIn:false,
    LastLoginDays:["Monday","Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["LastLoginDays"])
// console.log(typeof JsUser.name)
// console.log(JsUser[mysymb])

JsUser.email = "sanidhya@google.com"
//console.log(JsUser)
//Object.freeze(JsUser)
JsUser.email = "sunny5626@gmail.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello! This is Sanidhya Yadav")
}

JsUser.greetingTwo = function(){
    console.log(`Hello! dear user,this is ${this.name}`)
}
JsUser.greeting()
JsUser.greetingTwo()