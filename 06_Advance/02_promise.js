const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log("Async task 1");
        resolve();
    },1000)
})

promiseOne.then(function () {
    console.log("Promise consumed")
})

/* 
promise hume koi bhi task thodi der me krke dene ki capability deta hai,
ho sakta h jo task diya ho vo yaa to successfully evaluate ho jayega yaa fir fail ho jayega
lekin jab bhi promise ka use hota h iska matlab hum koi cheej future me perform hone k liye rakh rhe hai

*/

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Promise consumed");
})

const promiseThree = new Promise(function(resolve,reject){
    let error = true
    if (!error) {
        console.log("Async task 3");
        resolve("Matter Resolved")
    }else{
        reject("Lafda ho gya");
    }
})

promiseThree.then(function(value){
    console.log(value);
}).catch(function(value){
    console.log(value);
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Sunny",email:"Sunny@gmail.com"})
    }, 1000);
})

promiseFour.then(function(value){
    console.log(value);
    return value.username;
}).then(function(value){
    console.log(value);
})

const promiseFive = new Promise(function(resolve,reject){
    let error = false
    if (!error) {
        console.log("Async task 5");
        resolve("Matter Resolved")
    }else{
        reject("Lafda ho gya");
    }
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();