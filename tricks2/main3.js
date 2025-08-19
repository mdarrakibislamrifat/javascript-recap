// 3. Destructuring aliases

const language = {
    name: "Javascript",
    founded: 1995,
    founder: "Brendan Eich"
}


const { name : languageName, founded, founder } = language;
console.log(languageName,founded);