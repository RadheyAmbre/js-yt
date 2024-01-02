// var c = 300
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // c = 30

  // console.log("Block scope ", a);
}

// console.log("Global scope ",a);
// console.log(b);
// console.log(c);

// nested scope
function one() {
  const username = "radhey";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);   // Error

  two();
}
// one();

if (true) {
  const username = "radhey";
  if (username === "radhey") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// -------------------------------------------------

console.log(addone(5));
function addone(num) {
  return num + 1;
}

addtwo(5);
// Cannot access 'addtwo' before initialization
const addtwo = function (num) {
  return num + 2;
};
