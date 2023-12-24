const marvel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

// const all_heros = [...marvel_heros, ...dc_heros, ...heros]
// console.log(all_heros);

const nested_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const clean_array = nested_array.flat(2)
// console.log(clean_array);


// console.log(Array.isArray("radhey"));
// Checks if it is an array or not

// console.log(Array.from("radhey"));
// Creates new array from given values


const s1 = 100
const s2 = 200
const s3 = 300

console.log(Array.of(s1, s2, s3));
// Creates new array from given values
