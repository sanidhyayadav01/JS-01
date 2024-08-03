class User{
    constructor(username) {
        this.username = username;
    }

    LogMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addcourse(){
        return `A new course was added by ${this.username}`
    }
}
const userOne = new Teacher("Sanidhya","Sunny@gmail.com","abc");
console.log(userOne.addcourse());

const userTwo = new User("Akshu");
userTwo.LogMe();

console.log(userOne instanceof Teacher);
console.log(userOne instanceof User);