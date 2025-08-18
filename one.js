// Remove falsy values from any array


const truthyArray = [true, 1, -1, "hello", [], {}, function(){}, Infinity,false, 0, -0, 0n, "", null, undefined, NaN];


let truthValues = truthyArray.filter(Boolean);
console.log(truthValues);