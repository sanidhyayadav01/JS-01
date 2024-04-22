const marvel_Heroes = ["Tony","Captain","Thor"]
const dc_Heroes = ["Superman","Flash","Batman"]

//marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes)
// console.log(dc_Heroes)

// const all_Heroes = marvel_Heroes.concat(dc_Heroes)
// console.log(all_Heroes)

const all_new_Heroes = [...marvel_Heroes,...dc_Heroes]
console.log(all_new_Heroes)
const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_Array = another_Array.flat(Infinity)
console.log(real_Array)

console.log(Array.isArray("Sanidhya"))
console.log(Array.from("Sanidhya"))
console.log(Array.from({name : "Sanidhya"}))      //Interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))