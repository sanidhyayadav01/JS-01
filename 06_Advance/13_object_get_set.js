const User = {
    _email:'Sanidhya@gmail.com',
    _password:'abc',
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}
const newUser = Object.create(User); //this is a factory function
console.log(newUser.email);