// Immediately Invoked Functions Expressions (IIFE)

// function chai() {
//     console.log(`DB Connected`);
// }
// chai();

(function chai() {
    console.log(`DB Connected`);
})();    // named IIFE

// (defination)(execution)
// Due to pollution of global scope, so to remove/cancel the declaration of the global scope we use IIFE.
// and to call the function as quickly/rapidly as possible.
// using ';' is very important

( () => {
    console.log(`DB Connected two`);
} )();  // simple IIFE

( (name) => {
    console.log(`DB Connected three ${name}`);
} )('radhey');