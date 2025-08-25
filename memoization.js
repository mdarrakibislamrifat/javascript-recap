// memoization in Javascript

function add(x) {
    return 10 + x;
}


// Higher order function
const memo = (func) => {
    let cache = {};
    return function (x) {
        if (cache[x]) {
            console.log("Result from cache");
            return cache[x];
        } else {
            console.log("Calculating result");
            const result = func(x);
            cache[x] = result;
            return result;
       }
   } 
}
 


const calculate = memo(add);

console.log(calculate(10));
console.log(calculate(10));
