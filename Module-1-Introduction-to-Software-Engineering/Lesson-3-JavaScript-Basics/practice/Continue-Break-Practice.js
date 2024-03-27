// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'
const myString = "This is a string!";


for(let i = 0; i < myString.length; i++){
    if(myString[i] == 'a'){
        console.log(myString[i]);
        break;
    }
    else{
        console.log("Let's just keep searching...");
    }
}


// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'
const myArray = [5, 10, 15, 20, 25]

for(let i = 0; i < myArray.length; i++){
    if(myArray[i] === 25){
        console.log(`At index ${i}, there is the number ${myArray[i]}!`)
        break;
    }
    else{
        console.log(`At index ${i}, there is the number ${myArray[i]}.
        This is not the number we're looking for.`)
    }
}


// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console

const mixedArray = ["5", 10, "15", 20, "25"] //i//
const newArray = []

for(let i = 0; i < mixedArray.length; i++){
    const currentElement = mixedArray[i];
    if(typeof currentElement == "number"){
        continue;
    }
    else{
        newArray.push("Hello")
    }
    newArray.push(currentElement)
}
console.log(newArray)



