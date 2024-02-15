// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
// object doesn't mean js object. It means the value we want to apply the loop on.
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";
for (let letter of greetings) {
    if (letter === " ") {
        continue;
    }
    // console.log(letter);
}

// MAP

const map = new Map()
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

// Maps are iterateable. Object don't. Bt we can make it iterateable my another method
const myObject = {
    'game1': 'Valorant',
    'game2': 'NFS',
    'game3': 'LOL'
};
// TypeError: myObject is not iterable
for (const [key, value] of myObject) {
    // console.log(key, ":-", value);
}