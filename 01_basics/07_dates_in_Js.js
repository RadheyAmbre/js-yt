let myDate = new Date()

// console.log(typeof myDate); // Object

// console.log(myDate);
// // 2023-12-23T16:55:03.039Z
// console.log(myDate.toString());
// // Sat Dec 23 2023 16:55:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());
// // Sat Dec 23 2023
// console.log(myDate.toISOString());
// // 2023-12-23T16:55:03.039Z
// console.log(myDate.toJSON());
// // 2023-12-23T16:55:03.039Z
// console.log(myDate.toLocaleDateString());
// // 12/23/2023
// console.log(myDate.toTimeString());
// // 16:55:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());
// // Sat, 23 Dec 2023 16:55:03 GMT

// let myCreatedDate = new Date(2045, 3, 19)
// let myCreatedDate = new Date(2045, 3, 19, 17, 30)
// let myCreatedDate = new Date("2032-04-19")
let myCreatedDate = new Date("04-19-2032")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));
// // Gives us seconds



let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// // Months always starts from '0'
// console.log(newDate.getFullYear());


newDate.toLocaleString('default', {
    weekday: 'long'
})