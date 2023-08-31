// for(let i = 1; i<=10; i++){
//     console.log(`inner loop, ${i}`);

//     for(let j = 1; j <= 10; j++){
//         console.log(`outer loop ${j}, and inner loop ${i}`);
//     }
// }

// for(let i=1 ; i <=10; i++){
//     if(i == 5){
//         console.log('Detected 5');
//         break;
//     }
//     console.log(`value of i id ${i}`);
// }
for(let i=1 ; i <=10; i++){
    if(i == 5){
        console.log('Detected 5');
        continue;
    }
    console.log(`value of i id ${i}`);
}