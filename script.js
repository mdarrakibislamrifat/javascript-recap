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
