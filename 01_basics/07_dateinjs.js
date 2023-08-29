// Dates

let date = new Date()

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.getFullYear());
// console.log(date.toLocaleString())
// console.log(date.toISOString());
// console.log(date.toJSON());

// let myCreateDate = new Date(2023,0,23);
let myCreateDate = new Date(2023,0,23,5,4);

// console.log(myCreateDate.toLocaleString())
// console.log(typeof myCreateDate)

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreateDate.getTime()) // This value in miliSecond
console.log(Math.round(Date.now() / 1000));// convert in second

console.log(date.toLocaleString('default',{
    'weekday':"long"
}));