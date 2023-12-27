// objects can be declare in two ways Literal and constructor

// singleton
// Object.create

// object literal
const mySym = Symbol("val")

const JsUser = {
    name: "Radhey",
    "full name": "Radhey Ambre",
    // mySym: "SymbolValue",       // Wrong
    [mySym]: "SymbolValue",     // Right
    age: "23",
    location: "Mumbai",
    email: "rara@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"]
}

// 1st method to access Object
// console.log(JsUser.name);


// 2nd method to access Object
// console.log(JsUser[email]);  // Error

// console.log(JsUser["email"]);

// cannot access "full name" using first method
// console.log(JsUser.fullname);    //Error
// console.log(JsUser[mySym]);

// Overwrite or Change values in object
JsUser.location = "Pune"
// console.log(JsUser["location"]);

// Object.freeze(JsUser)
// lock the keys n value // dont let them change the values.
JsUser.location = "Hydrabad"
// console.log(JsUser);


// Defining
JsUser.greeting = () => {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);
// function return-back // func not executed // [Function (anonymous)]
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());