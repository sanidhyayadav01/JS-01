let a = 10
const b = 20
var c = 30

{
    let a=100
    const b=200
    var c=300
    // console.log("INNER a:",a)
    // console.log("INNER b:",b)
    // console.log("INNER c:",c)
}
// console.log(a);
// console.log(b);
// console.log(c);

//-------------------------------------Nested Scoping---------------------------------

function one(){
    const user="sunny5626"

    function two(){
        const website="youtube"
        console.log(user);
    }
    //console.log(website)
    two();
}
one();
//parent jo h vo bachche ki icecream ni le skte lekin bachcha apne parent se icecream le skta h



//-----------------------------------if/else nested coping------------------------------

if (true) {
    const username = "sunny5626"
    
}

addone(5);
function addone(num1){              //yaha pr function declare hone k pehle access ho gya
    return num1 + 1;
}addone(5);

                                    //ye dono cheeje hoisting me aati jaha pr execution context k baare me baat kri jaati hai

addtwo(5)
const addtwo = function(num2){      //yaha pr function declare hone se pehle access nhi ho paaya
    return num2 + 2;
}

