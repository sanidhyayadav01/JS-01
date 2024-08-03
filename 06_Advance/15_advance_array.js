const myArr = []
// %DebugPrint(myArr)

//------------------------continuous/packed array,holey array------------------------(continuous has same meaning as packed)
//further classification:-
//SMI (small integer)
//Double (float,NaN,Infinity,function)
//Packed element


const arrTwo = [1,2,3,4,5]
//packed-smi

const arrThree = [1,2,,4,5]
//holey smi

const arrFour = [1,2,3,4,5]
arrFour.push(6.0)
//packed-double
arrFour.push('7')
//packed element

//These array types hold diddferent optimisation states ,
//where smi are the most optimised and packed_element being the least optimised...
//optimised:- packed/continuous > holey
//further:- smi > double > packed_element

//ek baar agar packed smi se vo double ya packed element ya fir holey category me aa gya to vo firse packed smi me nhi jaa skta...
//holey se packed/continuous me kbhi nhi aa skte h after downgrading once from continuous to holey array

arrFour[10]=11;
console.log(arrFour);
//checks:-
//bound check
//hasOwnProperty(arrFour,9)
//hasOwnProperty(arrFour.prototype,9)
//hasOwnProperty(Object.prototype,9)


//holes are very expensive in JS


//less optimised way:-
let arrFive = new Array(3)
arrFive.push('1')
arrFive.push('2')
arrFive.push('3')
//here we firstly created 3 holes which downgraded it and further adding up string values made it the least optimised 

//Alternative approach:-
let arrSix = []
arrSix.push('1')
arrSix.push('2')
arrSix.push('3')
//here we created an empty array which has no holes therefore now we had packed smi (most optimised) before adding string values,
//after adding the string values we have packed_elements (less optimised than packed smi,but more optimised than holey packed)
// from the continuous category