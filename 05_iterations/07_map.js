//----------------------------------------------------map------------------------------------------------
//map returns values after doing operations on them
//filter k andar true and false vaala game hota hai,
//lekin yaha operations kiye jaate h data k upar

const myNum = [1,2,3,4,5,6,7,8,9,10]
//const newNum = myNum.map((num) => num + 10)
//console.log(newNum)


//-----------------------------------------------chaining method------------------------------------------
//chaining me hum ek k baad ek cheeje add krte h...for examplw:-
//yaha pr humne ek map k baad ak aur map ka use kiya hua h,
//similarly hum yaha pr ek map k baad filter,ek filter k baad map aur ek filter k baad ek filter laga skte h
//issme hum multiple filters k baad map aur multiple maps k baad filters laga skte hai


// const newNum = myNum.map((num) => num * 10).map((num) => num + 1)
// console.log(newNum)


const newNum = myNum.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50)
console.log(newNum)
