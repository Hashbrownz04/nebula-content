// 1. Create a variable called `firstName` and assign it a value of your first name.
//    Create another variable called `lastName` and assign it a value of your last name.
//    Combine the two variables to create a full name and log it to the console.
const firstName = "Hashem"
const lastName = "Cruz"

console.log(`${firstName} ${lastName}`)


// 2. Create a variable called `greeting` and assign it a value of your choice.
//    Log the length of the string to the console.
const greeting = "Greetings!"

console.log(greeting.length)


// 3. Create a variable called `longSentence` and assign it a sentence of your choice that is at least 10 words long.
//    Use string methods to convert the sentence to all lowercase letters and log it to the console.
const longSentence = "Hey... uh, can I have a number two burger please?"

console.log(longSentence.toLowerCase())


// 4. Create a variable called `bio` and use a template literal to create a sentence of your choice.
//    Include at least 3 variables in the template literal.
const bio = `${firstName} ${lastName}! ${greeting}`

console.log(bio)


// 5. Create a variable called `sentence` and assign it a value of your choice.
//    Use indexing to log the third word of the sentence to the console.
const sentence = "I am me!"

console.log(sentence.slice(5, 7))


// 6. Create a variable called `myString` and assign it a value of your choice.
//    Use string methods to replace a word in the string with another word of your choice.
const myString = "One of everything, please!"

console.log(myString.replace("One", "Two"))


// 7. Create a variable called `phrase` and assign it a phrase of your choice.
//    Use string methods to slice the first 3 characters from the phrase and log it to the console.
const phrase = "You Okay?"

console.log(phrase.slice(0, 3))


// 8. Create a variable called `longText` and assign it a text of your choice.
//    Use string methods to find the last index of a word in the text and log it to the console.
const longText = "pneumonoultramicroscopicsilicovolcanoconiosis"

console.log(longText.length - 1)


// 9. Create a variable called `someString` and assign it a value of your choice.
//    Use string methods to convert the first letter to uppercase and log it to the console.
const someString = "uppercase"

console.log(someString[0].toUpperCase())


// 10. Create a variable called `myText` and assign it a value of your choice.
//     Use string methods to split the text into an array of sentences and log it to the console.
const myText = "Ik ben het maar."

console.log(myText.split(" "))
