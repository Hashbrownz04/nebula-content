// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'
const lowerCase = noCaps.toLowerCase()
console.log(lowerCase)

// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
const upperCase = loud.toUpperCase()
console.log(upperCase)

// Join the prior two variables together.
console.log(lowerCase.concat(" ", upperCase)) 

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
console.log(stringOfNames.split(" "))


// Make your own mad-libs using a template literal
const expression = "happy";
const madLibs = `I am going ${expression}!`
console.log(madLibs)


// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
const fInitial = ironMan[0];
const lInitial = ironMan[5];
console.log(`${fInitial}${lInitial}`)


// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
const sliceString = string.slice(19, 27);
console.log(sliceString);

// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
console.log(string1.slice(11, 12))
// const lastIndex = string1.length - 1
//console.log(string1[lastIndex])

//const index = string1.indexOf("?")
//console.log(string1[index])


// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';
let num1 = parseInt(ten);
let num2 = parseInt(five);
console.log(num1+num2);

//const unaryEquation = +ten + +five
//console.log(unaryEquation)

// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!';
const splitStringToArr = sentence.split("");
console.log(splitStringToArr); 

