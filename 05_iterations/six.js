// const code = ['js', 'python', 'cpp', 'ruby', 'r']

// const value = code.forEach((item) => {
//     // console.log(item);
//     return item;
// });

// console.log(value);  // undefined
// forEach doesn't actually return anything, it just logs the values to the console.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumns = myNums.filter((num) => num > 4)
// console.log(newNumns);   // [5, 6, 7, 8, 9, 10]


// const newNumns = myNums.filter((num) => {
//     num > 4
// });
// console.log(newNumns);  // []   
// empty -- bc when we use {} the function becomed an object <block scope>


// const newNumns = myNums.filter((num) => {
//     return num > 4;
// });
// console.log(newNumns);  // [ 5, 6, 7, 8, 9, 10 ]
// we have to use return bc if we don't then filter will return undefined by default


// const newNum = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num);
//     }
// });
// console.log(newNum);  // [5, 6, 7, 8, 9, 10]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBook = books.filter((bk) => bk.genre === 'History')
// console.log(userBook);

// const userBook = books.filter((bk) => { return bk.publish > 2000 });
// console.log(userBook);

// const userBook = books.filter((bk) => { return bk.publish > 1995 && bk.genre === 'History' });
// console.log(userBook);