const user = {
    username:"Sunny",
    loginCount:8,
    signedIn:true,
    getUserDetails:function() {
        //console.log("Got user details from database")
        //console.log(`Username is ${this.username}`);
        console.log(this);
    }

}
//  console.log(user.username);
//  console.log(user.getUserDetails());
//  console.log(this);

 function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
 }
 const userOne = new User("Sunny",12,true)
 const userTwo = new User("Akshu",13,true)
 console.log(userOne.constructor);
 console.log(userTwo);