// Object
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple',
    py: 'Python'
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Array
const programming = ['js', 'cpp', 'rb', 'swift', 'py']

for (const key in programming) {
    // console.log(programming[key]);
}


// Map
// Not iterable in forin loop
const map = new Map()
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const key in map) {
    // console.log(key);
}