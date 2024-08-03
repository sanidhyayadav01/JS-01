const myArray = ["flash","batman","superman"]
for (const heroes of myArray) {
    //console.log(heroes)
}


const greetings = "Hello World";
for (const greeting of greetings) {
//    console.log(greeting);
}


//-----------------------------Maps------------
//it is a type of object

// const myMap = new Map();
// myMap.set('IN',"India")
// myMap.set('US',"United States")
// myMap.set('Fr',"France")
// console.log(myMap)


// for (const [states,value] of myMap) {
//     console.log(states,"=>",value)
// }


// "for of" loop does not work on normal object
//example:-

// const myObject = {
//     'game1':"NFS",
//     'game2':"Tekken",
//     'game3':"Resident Evil"
// }

// for (const games of myObject) {
//     //console.log(games)
// }

//-----------here this object is not iterable under "for of" loop ,therefore we will iterate it using "for in" loop------------


// const myMap = new Map();
// myMap.set('IN',"India")
// myMap.set('US',"United States")
// myMap.set('Fr',"France")

// for (const keys in myMap) {
//     console.log(key)
// }

//here map is not iterable using "for in" loop