// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}123`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("sanidhya","Sunny@gmail.com","abc");
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());

//Behind the scene

function User(username,email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}123`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const newUser = new User("akshu","akshu@gmail.com","xyz")
console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());