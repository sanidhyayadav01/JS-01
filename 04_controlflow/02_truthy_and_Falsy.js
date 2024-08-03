const usermail = {}
if (usermail) {
    console.log("Email exists");
}
else{
    console.log("Email doesn't exist");
}

/*
Falsy values:-
1) false
2) 0 or -0
3) BigInt 0n
4)"" (empty string)
5) null
6) undefined
7) NaN


inke alawa saari values truthy values hoti hai
truthy values:-
1) "0" (string k andar kuchh na kuchh value hai iske vajah se vo empty nhi consider kiya jaa rha hai)
2) "false" (string k andar likha hua hai)
3) " " (string k andar space bhi kuchh value hold krta hai)
4) [] (empty array bhi ek truthy value hai)
5) {} (empty object bhi ek truthy value hota hai)
6) function(){} 

example:-
*/
if (Object.keys(usermail).length===0) {
    console.log("Object is empty");
}



//----------------------NULL Coalescing  Operator (??): designed for null and undefined---------------------------

//iski help se hum safety ko maintain kr skte h,kisi jagah pr agar koi value ki need h
// aur hamare paas vo na ho available to hum null yaa undefined rakh skte h unki jagah pr
//isse agar vo value ni hogi to null k according cheeje alag modify krke execution kr skte 
//hai yaa fir value availabe rhi to hum direct usko use kr lenge
//usually hum (??) iske baad me koi function ko call kr lete hai
//agar multiple (??) use huye h to sabse pehle aane vaali value li jaati hai


let val1 ;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 5;
val1 = null ?? 12 ?? 13

console.log(val1);

//-----------------Terniary Operator--------------
//condition ? true : false
//example:-

const iceCreamPrice = 100;
iceCreamPrice <=80 ? console.log("Price is less than 80") : console.log("Price is more than 80")