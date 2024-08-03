class User{
    constructor(username) {
        this.username = username;
    }

    LogMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}
const userOne = new User("Sanidhya")
userOne.LogMe();
//console.log(userOne.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const userTwo = new Teacher("Akshu","Akshu@gmail.com");
userTwo.LogMe();
//console.log(userTwo.createId());