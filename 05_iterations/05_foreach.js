// const coding = ["javascript","c++","rust","python","solidity"]

// coding.forEach(function (item) {
//     console.log(item);
// })


//callback function use hota h foreach loop me,
//iss function ko bina naam k likhte hai,
//isko ek array k andar likh rhe h issliye ye apne aap parameters le leta h pure array me se,
// lekin bas isko kuchh kaam dena padte hai be it val,item,value etc,etc.

//yaha pr hum arrow function bhi use kr skte h

const coding = ["javascript","c++","rust","python","solidity"]

coding.forEach( (item) => {
    //console.log(item);
})


//agar function pehle se declared hai to fir item ya value vaali jagah pr uska naam likhte hai,
//aur uska reference dete h(execute nhi krwaate hai)

function print(item){
    console.log(item);
}
//coding.forEach(print)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCodes = [
    {
        languageName:"Javascript",
        languageFile:"JS"
    },
    {
        languageName:"CPP",
        languageFile:"C++"
    },
    {
        languageName:"Python",
        languageFile:"py"
    }
]

myCodes.forEach((item)=>{
    console.log(item.languageFile,item.languageName);
})