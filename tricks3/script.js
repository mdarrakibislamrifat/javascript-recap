// What will be the output of the below code?

console.log([] + []); // Output: ""

console.log({}+ []); // Output: "[object Object]"

console.log(true + 5); // Output: 6

function myFunction() {
    return 'Bangladesh';
}

const string = myFunction`Hello`;
console.log(string); // Output: "Bangladesh"



// if you want to edit in a site all things the  just write document.body.contentEditable=true



function b() {
    console.log(`The length is ${this.length}`);
}


let a = {
    length: 10,
    method: function (b) {
        arguments[0]()
    }
};
a.method(b, 5)






const a1 = 'constructor';
console.log(a1[a1](1));


// Making a function that sorts its arguments without using loops

function sortArgs() {
    return Array.from(arguments).sort();
}

console.log(sortArgs(3, 1, 4, 2)); // Output: [1, 2, 3, 4]
