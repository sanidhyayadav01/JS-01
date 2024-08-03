const myObject = {
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    py:"Python"
}

for (const key in myObject) {
    console.log(`${key} is shortname for ${myObject[key]} `);
}


const myArray = [11,12,13,14,15]

for (const key in myArray) {
    console.log(myArray[key])
}