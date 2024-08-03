function sayMyName(){
    console.log("S");
    console.log("u");
    console.log("n");
    console.log("n");
    console.log("y");
}

// sayMyName();
//() ye parenthesis lagane se function ka execution milta h
// sayMyName;
//bina () iske sirf ek refernce jaata h

function addTwoNum(number1,number2){
     return number1+number2;
}

const result = addTwoNum(3,5);
function loginUserMessage(username="sunny"){
    
 if(!username){
    console.log("Please enter a username")
    return
 }
    return `${username} just logged in`
    //console.log("Hii")
}
//console.log(loginUserMessage("Sunny5626"));
//console.log(loginUserMessage(""));
//console.log(loginUserMessage());
 //()empty/khaali hone pr null aana chahiye tha lekin ye undefined return krega,kyuki vo define hi nhi hua h

function CalculateCartPrice(val1,val2,...num1){

    return num1;
}

//console.log(CalculateCartPrice(100,200,300,400,500))
//(...)iska matlab rest/spread operator hota h...jiski help se hum open object ko ek bundle me enclose kr dete h


                                        //------passing an object in an function---------
const user = {
    Name : "iphone XS",
    price : 499
}

function handleobject(anyobject){
    console.log(`Object is ${anyobject.Name} and it's price is ${anyobject.price}`)
}

//handleobject(user);
// handleobject({
//     Name : "Tab S7",
//     price : 899
// });

                                        //-----passing array in a function----------
const myNewArray = [100,200,300,400]

function getSecondValue(getarray){
     console.log(getarray[1]);
}

//getSecondValue(myNewArray)
//getSecondValue([100,200,300,400]);
