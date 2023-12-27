// const tinderUser = new Object();
const tinderUser = {};

// both are object but 1st one is singleton object
// n 2nd one is non sigleton object.

tinderUser.id = "123bac"
tinderUser.name = "luffy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nested object
const regularUser = {
    email: "luffy@gmail.com",
    fullName: {
        username: {
            firstName: "Radhey",
            lastName: "Ambre"
        }
    }
}

// console.log(regularUser.fullName.username.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1, obj2)
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// its good to write like above.

// const obj3 = Object.assign({}, obj1, obj2)
// but it is better to write like above.
// {} -- target --- other -- source.

const obj3 = {...obj1, ...obj2} // Spread
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// [['id','123bac'],['name','luffy'],['isLoggedIn',false]]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// shows boolean
