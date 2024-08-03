function SetUsername(username) {
    this.username = username;
}

function CreateUser(username,email,password) {
    SetUsername.call(this,username)
    //yaha pr call function hume reference ko hold krne me madad kr rha h,
    //call me pehla argument humne "this" diya hai jisse ki hume naye function ka object mile and,
    //puraane vaale function k this se judi huyi properties bhi
    //so that jab "setUsername" ka execution ho jayega tab bhi uski properties ka reference hamare paas hoga
    this.email = email;
    this.password = password;
}

const userOne = new CreateUser("Sanidhya","sanidhya@gmail.com","12345")
console.log(userOne);

    //yaha pr call function hume reference ko hold krne me madad krta hai
