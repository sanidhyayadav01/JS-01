const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const userOne = {
    name : "Chai",
    price : 263,
    isAvailable : true,

    Orderdetails : function(){
        console.log("Order details not available");
    }
}

console.log(Object.getOwnPropertyDescriptor(userOne,"name"));

Object.defineProperty(userOne,'name', {
    // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(userOne,"name"));

for (const [key,value] of Object.entries(userOne)) {
    if (typeof value !== 'function') {
        console.log(`${key} ; ${value}`);
    }
    
}