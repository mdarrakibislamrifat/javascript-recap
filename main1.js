// 1. swapping values

let array = [1, 2, 3, 4, 5];


// teamp variable

let temp = array[0];
array[0] = array[4];
array[4] = temp;

console.log(array);


// array destructuring
[array[0], array[4]] = [array[4], array[0]];




// math
let a = 1;
let b = 2;

b = a + (a = b) - b;