//const InstaUser = new object() ->singleton object
const InstaUser = {} //->non-singleton object


 InstaUser.id = "123abc"
 InstaUser.name = "Sunny5626"
 InstaUser.isLoggedIn = false

//console.log(InstaUser)

const ChromeUSer = {
    email: "sunny5626@gmail.com",
    fullname:{
        firstname:"Sanidhya",
        lastname:"Yadav"
    }
}
// console.log(ChromeUSer.email)
// console.log(ChromeUSer.fullname)
// console.log(ChromeUSer.fullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}
//const obj4 = Object.assign({},obj1,obj2,obj3)  

const obj4 = {...obj1,...obj2,...obj3}

//{}->helps in creating a new empty object and then,
//(assign)->assigns the object values to the new empty object 


//console.log(obj4)

const users = [
    {
        id: 1,
        email: "Sunny@gmail.com"
    },
    {
        id: 2,
        email: "Somani@gmail.com"
    },
    {
        id: 3,
        email: "Sanand@gmail.com"
    }
]

console.log(users[1].email)
console.log(InstaUser)
console.log(Object.keys(InstaUser))
console.log(Object.values(InstaUser))
console.log(Object.entries(InstaUser))
console.log(InstaUser.hasOwnProperty('isLogged'))