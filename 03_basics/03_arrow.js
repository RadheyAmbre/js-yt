// this = current context -- refers
const user = {
  username: "radhey",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);  // this is talikng about current context init.
  },
};
// user.welcomeMessage();
// user.username = "harsh";
// user.welcomeMessage();
console.log(this);
// it will give empty object{}
// when we log this in console. It will give window object