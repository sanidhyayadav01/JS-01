// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i = 1; i <= 10 ; i++) {
//     for (let j = 1; j <= 10; j++) {
        
//         console.log(`${i} * ${j} = ${i*j}`)
        
//     }
// }


// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     if (i==5) {
//         console.log("Break case reached");
//         break;
//     }
//     console.log(element);
// }
for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (i==5) {
        console.log(`continue case for ${i} reached`);
        continue;
    }
    console.log(element);
}

