const str = "Java is a Programming Language";




function sortWords(data) {
    
    const dataAsArray = data.split(" ");
    dataAsArray.sort((a, b) => a.length - b.length);

    return dataAsArray.join(" ");
    
 


}


console.log(sortWords(str)); // "a is Java Language Programming"