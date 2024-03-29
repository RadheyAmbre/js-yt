const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["zoro", "levi", "ironman"]
const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr2);

// Array method

// myArr.push(6)    // add @ end
// myArr.pop()  // remove @ end

// myArr.unshift(-1)    // add @ beginning
// myArr.shift()   // remove @ beginning

// console.log(myArr.includes(5));     // return true or false if the element is in array
// console.log(myArr.indexOf(9));         // return index of the element

// const strArr = myArr.join()

// console.log(myArr);
// console.log(strArr);


// Slice n Splice
// Slice dont change the original Array (stack method)
// Splice change the original Array (heap method)

// console.log("A ", myArr);
// A [0,1,2,3,4,5]

const myN1 = myArr.slice(1, 3)
// console.log("B ", myArr);
// B [0,1,2,3,4,5]
// console.log(myN1);
// [1,2]

const myN2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// C [0,4,5]
// console.log(myN2);
// [1,2,3]
