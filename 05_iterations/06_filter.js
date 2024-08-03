const coding = ["javascript","c++","python","solidty","rust"]

const values = coding.forEach((item)=>{
    //console.log(item);
})
//"for each" harr baar koi value retrun kre aisa jaruri nhi hai,
//issiliye hum harr baar "for each" ka use nhi krte hai ,there are other facilities too jese ki "filter"

//console.log(values);

const Nums1 = [1,2,3,4,5,6,7,8,9,10];



const newNum = Nums1.filter((num) => {
    return num>5;
})
// console.log(newNum);


Nums1.forEach((item)=>{
    // console.log(item>5);
})
//foreach me condition ko sirf check kr skte h lekin values satisfy krwa kr print sirf if ka use krke  kr skte,
// so instead we use filter

const newNums = []
Nums1.forEach((num) => {
    if (num>5) {
        newNums.push(num)
    }
})
console.log(newNums);
