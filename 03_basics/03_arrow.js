const user = {
    name : "curtains",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.name} is the name and it's price is ${this.price}`)
        console.log(this) 
        //this current context ko refer krta h
    }
}
// user.welcomeMessage();
// user.name = "Sunglasses";
// user.welcomeMessage();
// console.log(this)


// function chai(){
//     let userName = "Sunny" 
//     console.log(this.userName)
//     //this ko hum kisi object me hi use kr ste h ,function me vo undefined value deta h 
// }

// chai();


// const chai = function(){
//     let userName = "Sunny" 
//     console.log(this.userName)
// }
// chai();


//---------------Arrow Function------------ syntax: () => {}
// const chai = () => {
//    let userName = "Sunny" 
//    console.log(this)
// }
//chai(); //empty object return krega,kyuki this ko aap arrow function me nhi use kr skte


// const addtwo = (num1,num2) => {
//     return num1 + num2;
// }
//console.log(addtwo(3,5));


//------------------------------add function using implicit return in arrow function-------------------------------------
//implicit ka matlab aisa ki vo khud maan leta h ki return keyword by default likha hua h...even if we don't write it down there
//explicitly ka matlab ki aapko aage se likhna padega return statement/keyword 

//const addtwo = (num1,num2) => num1 + num2;  
                //OR
//const addtwo = (num1,num2) => (num1+num2);

//This is known as implicit return Arrow Function
//Curly braces me agar num1+num2 likhte to unko return ya console k saath likhna pdta function me
//lekin parenthesis me likhne pr return nhi likhna pdta

//console.log(addtwo(3,5));

const addtwo = (num1,num2) => ({username:"Sunny5626"});  //object ko parenthesis me hi return krna h,curly braces me return nhi kr skte h object 
//console.log(addtwo(3,5));

