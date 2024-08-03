//----------------------------------Immediately Invoked Function Expressions[IIFE]--------------------------

//iske andar hum chahte ki function declare krte se hi vo execute ho jaaye
//for example,jese hi system chalu ho to database se connection establish ho jaaye
//iske liye hum iffe ka use krenge

//kayi baar koi function global scope se pollute ho jaata h,
//iss pollution se function ko bachaane k liye hum iffe ka use krte h

(function chai(){           //named iffe
    console.log("CHAI DB Connected")
}) ();

( (name) => {            //unnamed iffe
    console.log(`AUR CODE DB Connected ${name}`);
})("Sunny")

//do iffe likhna ho to pehle vaale ko semi-colon(;)se end krna compulsory h

