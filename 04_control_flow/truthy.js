// const userEmail = "r@radhey.ai" // gives us true value
// const userEmail = "" // gives us false value
// const userEmail = [] // gives us true value

// if (userEmail) {
//     console.log("Got user email");
// }
// else {
//     console.log("Don't have user email");
// }


// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}


// let emptyArr = []
// if (emptyArr.length === 0) {
//     console.log("Array is empty");
// }

// let emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log( "Empty object" );
// }


// Nullish Coalescing Operator (??)
let val1;
// val1 = 5 ?? 10  // op: 5
// val1 = null ?? 10  // op: 10
// val1 = undefined ?? 15  // 15
// val1 = null ?? 10 ?? 15 // op: 10
// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");