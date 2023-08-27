//Primitive DataType

// string, number, bigInt, boolean ,undefined, null, symbol

let string = "Khan";

let number = 45;

let bigInt = 123555425633n

let city;

let temprature = null;

let status = true;

// let id = Symbol(id)

console.table([typeof string, typeof number, typeof bigInt, typeof city, typeof temprature, typeof status]);

// Reference Type (Non Primitive Type)

// Array, Object, Function

const arr = ["first", "second", "Third"];

const obj = {
    name:"tariq",
    age: 25,
}

const myFunc = function() {
    console.log("This is example of Function.");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive Type), Heap (Non - Primitive)


/**
 * when we define memory in stack then we get copy of variable,and 
 * when we define memory in heap the we will use reference of original value
 */ 
 
let addressOfTariq = "Ganjehri";
let addressOfKhalid = addressOfTariq;

addressOfKhalid = "Kharghar, Mumbai";

console.log(addressOfKhalid)
console.log(addressOfTariq)

const userOne = {
    name:"Tariq",
    age: 20
}

const userTwo = userOne;

userTwo.age = 25

console.log(userOne.age);
console.log(userTwo.age)