/*let score="33abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(typeof score)
console.log(score)
console.log(valueInNumber)
*/
/* 
"33" =>33
"33abc"=>NaN
true=>1 , false=>0
*/
let IsLoggedIn = 1
let booleanIsLoggedIn = Boolean(IsLoggedIn);

//console.log(booleanIsLoggedIn)

/*
1=>true , 0=>false
"sanidhya"=>true
" "=>false
1 ka type conversion boolean me true h and 0 ka false
empty string ka false h and non-empty string ka true
*/

let somenumber = 33
let stringnumber = String(somenumber)

console.log(stringnumber)
console.log(typeof stringnumber)

//************************OPERATIONS***************************** 
let str1 = "Hello"
let str2 = " Sanidhya"
let str3 = str1 + str2

console.log(str3);

console.log(1+2+"2")
console.log("1"+2+2)

console.log(true)
console.log(+true)
console.log(+"")


//+true likhne pr vo pehle true naam ki string ko number format me change kr rha h aur fir print kr rha h
//+"" here empty value or parenthesis are treated as zero[0]

//learn more about prefix and postfix on mdn or ecma script

let x = 3
let y = x++;
console.log(x)
console.log(y)
