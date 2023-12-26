// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100   // Number
const scoreValue = 100.5   // Number
// console.log(typeof scoreValue);

const isLoggedIn = false    // Boolean
// console.log(typeof isLoggedIn);

const outsideTemp = null    // Null
// console.log(typeof outsideTemp);    // Object

// let userEmail = undefined;
let userEmail;  // undefined
// console.log(typeof userEmail);


const id = Symbol('123')
const anotherId = Symbol('123')     // Symbol
// console.log(typeof anotherId);
// console.log(id === anotherId);

const bigNumber = 5123456796758324156573n   // BigInt
// console.log(typeof bigNumber);

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Captain America", "Ironman", "Spider-man"]  // Array
// console.log(typeof heros);  // Object

let myObj = {
    name: "radhey",
    age: 23,            // Object
    address: "powai",
}
// console.log(typeof myObj);   // Object

let myFunct = function() {
    console.log("Hello world"); // function
}
// console.log(typeof myFunct); // function



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// ---------------------------------------------------


//  Stack memoery (Primitive)
let myYtName = "rdxgaming"

let anotherName = myYtName
anotherName = "raragaming"

// console.log(myYtName);
// console.log(anotherName);

//  Heap memoery (Non Primitive)
let userOne = {
    mail: "rdx@gmail.com",
    upi: "rdx@icici"
}

let userTwo = userOne

userTwo.mail = "rara@gmail.com"

// console.log(userOne.mail);
// console.log(userTwo.mail);