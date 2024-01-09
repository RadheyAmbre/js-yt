// this = current context -- refers
const user = {
  username: "radhey",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username}, welcome to website`);
    // console.log(this); // this is talikng about current context init.
  },
};
// user.welcomeMessage();
// user.username = "harsh";
// user.welcomeMessage();

// console.log(this);
// it will give empty object{}
// when we log this in console. It will give window object

// function chai() {
//   let username = "radhey";
//   console.log(this.username); // undefined
// }

// const chai = function () {
//   let username = "radhey";
//   console.log(this.username); // undefined
// };

// const chai = () => {
//   let username = "radhey";
//   console.log(this.username); // undefined
// };

// chai();

// const addtwo = (num1, num2) => {
//   return num1+num2;  // Explicit return
// }

// const addtwo = (num1, num2) => num1+num2;  // Implicit return

// const addtwo = (num1, num2) => (num1+num2); // Implicit return

const addtwo = (num1, num2) => ({ username: "radhey" });

// console.log(addtwo(3, 2));
