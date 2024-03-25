// Declare an empty array
const myArray = [];
console.log(myArray)

// Declare an array with all the data types you can think of within it
const fullArray = [1, "String", true]
console.log(fullArray)

// Make a list of classmates names first names in an array
// Get the length of that previous array
const classMates = ["Hashem", "Christopher", "Craig", "Devon", "Garry", "Michael", "Raffaello", "Sharon", "Rolando"]

console.log(classMates)

console.log(classMates.length)

// Check the type of the previous array
console.log(typeof classMates)

// Check if the previous array is an array
console.log(Array.isArray(classMates))

// Using indexing, grab your name from that previous array
console.log(classMates[0])

// Use the following variable to get the student at the index from the array of students
let index = 2; 

console.log(classMates[index])


// Update the array to have each element as a students first and last name : 'firstName lastName'
classMates[0] = "Hashem Cruz";
classMates[1] = "Christopher Foster";
classMates[2] = "Craig Schectman";
classMates[3] = "Devon Selvaggi";
classMates[4] = "Garry Garnett";
classMates[5] = "Michael Richman";
classMates[6] = "Raffaello Sosnowski";
classMates[7] = "Sharon Bacchus";
classMates[8] = "Rolando Piche"

console.log(classMates)