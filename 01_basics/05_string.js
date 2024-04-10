const name = "radhey"
const repoCount = 2

// console.log(name + repoCount + " Value");  // Outdated

// console.log(`Hello my name is ${name} and I have ${repoCount} repositories`);
// Modern -- string interpolation 

const gameName = new String('ryae-gaming')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // prototype
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, -2)
// console.log(anotherString);

const newStringOne = "   radhey   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://radhey%20ambre.com/radhey%20ambre"
// console.log(url.replace('%20', '-'));

// console.log(url.includes('radhey'));

// console.log(gameName.split('-'));