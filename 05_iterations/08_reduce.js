//----------------------------------------reduce-------------------------------------------
//reduce ka main kaam hai values ko reduce krke show krna 
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const mySum = myNums.reduce(function(accumulator,currentvalue){
//     console.log(`Accumulator: ${accumulator} , Current_Value ${currentvalue}`);
//     return accumulator+currentvalue;
// },0)
// //yaha pr accumulator ko nhi pata hota h ki vo start kaha se hoga,
// //current value to apni value ko array me se nikaal leta hai
// //lekin acumulator ko initialise hum function k last me 0/ya kuchh aur likh kr krte hai

// console.log(mySum)


const mySum = myNums.reduce((accumulator,currentvalue) => accumulator + currentvalue,0)
// console.log(mySum)

const ShoppingCart = [
    {
        Course:"JavaScript",
        price:2999
    },
    {
        Course:"Python",
        price:5999
    },
    {
        Course:"Data Science",
        price:12999
    }
]

const TotalAmount = ShoppingCart.reduce((acc,items)=>(acc + items.price),0)
console.log("Total Payable amount is :",TotalAmount);
