// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
console.log(numArr);

numArr[0]*=10;

console.log(numArr)

// Add an additional element to the prior array
numArr.push("String")

console.log(numArr)

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
const removedItem = numArr.pop("String")

console.log(removedItem)
console.log(numArr)

// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false
if(numArr[0] === 1){
    console.log(true)
}
else{
    console.log(false)
}

/*
if(numArr.indexOf(1)){
    console.log(true)
}
else{
    console.log(false)
}

numArr.indexOf(1) ? console.log(true) : console.log(false)
*/

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = numArr.shift(numArr[0])

console.log(removedFirstItem)

// Add that item back
numArr.unshift(removedFirstItem)

console.log(numArr)

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];

const sortEm = sortThis.sort();

console.log(sortEm)

// Now reverse the prior array

const reverseThis = sortThis.toReversed()

console.log(reverseThis)
  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
const favoriteFood = "My favorite foods are Poutine, Ramen, and Shepherd's Pie!"

console.log(favoriteFood)

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
split2Array = favoriteFood.split(" ");

console.log(split2Array)


// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

console.log(split2Array.join("-"))


// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
const numArray2 = [1,2,3,4,5,7,8,9,10];
console.log(numArray2.splice(4, 5, 6))


// Create two arrays and, using JavaScript join them together
const array1 = ["a", "b", "c"]
const array2 = [1,2,3]

console.log(array1.concat(array2))


// Create a multi-dimensional array
const multiArray = [["x","y","z"], [4, 0, 4], ["Sonic","Tails","Knuckles","Amy"]]

console.log(multiArray)
