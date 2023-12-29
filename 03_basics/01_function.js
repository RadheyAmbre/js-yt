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
