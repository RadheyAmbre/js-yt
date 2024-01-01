function myName() {
  console.log("R");
  console.log("D");
  console.log("X");
}

// myName()
// function addTwoNumbers(num1, num2) {
//     // Parameters -- num1 and num2
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, null);
// argument

function addTwoNumbers(num1, num2) {
  // let result = num1 + num2
  // return result

  return num1 + num2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result", result);

function loginUserMessage(username) {
  // if(username === undefined) {
  //     console.log("Please enter a username");
  // }

  if (!username) {
    console.log("Please enter a username");
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("radhey"));
// console.log(loginUserMessage());

function loginUserMessage(username = "rara") {
  if (!username) {
    console.log("Please enter a username");
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage());
// if valueis not defined the parameter's value will work
// console.log(loginUserMessage("radhey"));




// Rest 
function calCartPrice(...num1) {
  return num1
}
// console.log(calCartPrice(200, 400, 550));

function calCartPrice(val1, val2, ...num1) {
  return num1
}
// console.log(calCartPrice(200, 400, 550, 2000));
// Op .: [550 , 2000]
// val1 = 200 -- val2=400 -- num1= 550, 2000


// passing Object in function()
const user = {
  username: "radhey",
  total: 5000
}

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and total cost is ${anyObject.total}`);
}

// handleObject(user) // 1
// handleObject({
//   username: "harsh",  // 2
//   total: 25000
// })


// passing Array in function()
const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray) {
  return getArray[3];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 500, 700]));