//array
const myarr = [1,2,3,4,5]
console.log(myarr)

const myHeroes = new Array("tony","captsin","thor")
console.log(myHeroes)

//Array methods

// myarr.push(6)
// console.log(myarr)
// myarr.push(7)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)

// myarr.unshift(9)
// console.log(myarr)
// myarr.shift()
// console.log(myarr)

// console.log(myarr.indexOf(3))
// console.log(myarr.includes(6))

const newarr = myarr.join()
console.log(myarr)
console.log(typeof myarr)
console.log(newarr)
console.log(typeof newarr)

//slice,splice

//slice -> gives a copy of a portion from the main array hence the main array does not get manipulated
//whereas splice -> gives a actual portion (not a copy) from the main array and hence the main array gets manipulated
console.log("A" , myarr)
const myn1 = myarr.slice(1,3)
console.log(myn1)

console.log("Original array after slice :" , myarr)
console.log("B" , myarr)
const myn2 = myarr.splice(1,3)
console.log(myn2)

console.log("Original array after splice :" , myarr)

