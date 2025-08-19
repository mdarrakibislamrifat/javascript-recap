

const str = "I love Bangladesh";



function reverseWord(data) { 

    const dataAsArray = data.split(" ");
    const result = dataAsArray.map((word) => {
        return word.split("").reverse().join("");
    });
    return result.join(" ");

}

console.log(reverseWord(str)); // "hsidnagleB evol I"