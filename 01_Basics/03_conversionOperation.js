let score = "23rara"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33" => Not a Number NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 0

let boleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(boleanIsLoggedIn);

// 1 => true; 0 => false
// " " => false
// "radhey" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ********** Operations **********

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+3);    // Addition
// console.log(2-3);    // Subtraction
// console.log(2*3);   // Multiplication
// console.log(2**3);  // Raise to
// console.log(2/2);   // Divide
// console.log(2%2);    // Modulas


let str1 = "hello"
let str2 = " radhey"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let n1, n2, n3

n1 = n2 = n3 = 2 + 2
console.log(n1, n2, n3);

let gameCounter = 100

gameCounter++   // postfix
console.log(gameCounter);

++gameCounter   // prefix
console.log(gameCounter);