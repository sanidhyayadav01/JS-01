//Date and time in JavaScript

let mydate = new Date()
console.log(mydate)
console.log(mydate.getDate())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

// let anotherDate = new Date(2024,3,12,1,0)
let anotherDate = new Date("04-12-2024")
// console.log(anotherDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(anotherDate.getTime())

// console.log(Math.floor(Date.now()/1000))

anotherDate.toLocaleString('default',{
    weekday:"long"
})
console.log(mydate.toDateString())