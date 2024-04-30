const title = document.getElementById('title');
// console.log(title);
// console.log(document.getElementsByClassName('heading'));
// console.log(document.getElementsByTagName('h1'));
// console.log(document.querySelector('.heading'));
// console.log(document.querySelector('#title'));
// console.log(document.querySelectorAll('input[type="text"]'));

// console.log(document.querySelector('ul li').style.color = "red");
const tempList = document.querySelectorAll('li');
// console.log(tempList);
// tempList.forEach((l) => {
//     l.style.color = 'red';
// })


const tempClassList = document.getElementsByClassName('list-item');
// console.log(tempClassList);

// tempClassList.forEach((l) => {
//     console.log(l);
// });
// TypeError: tempClassList.forEach is not a function

const myConvertedArray = Array.from(tempClassList);
console.log(myConvertedArray);