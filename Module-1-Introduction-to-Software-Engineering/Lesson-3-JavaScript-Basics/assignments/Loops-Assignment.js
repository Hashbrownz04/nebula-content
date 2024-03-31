// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
for(let i = 0; i <= 30; i++){
    console.log(`The current index is ${i}.`)
}


// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
for(let i = 0; i <= 10; i+=2){
    console.log(`The current index is ${i}.`)
}


// 3. Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
const celebList = ["J.K. Simmons", "Ryan Reynolds", "Seth Rogen", "Eric Bauza", "Margot Robbie"]

for(let i = 0; i < celebList.length; i++){
    currentElement = celebList[i];
    console.log(currentElement)
}


// 4. Loop over your celebrity list and 
// // If a celebrity's full name has an even number of characters log it to the console
for(let i = 0; i < celebList.length; i++){
    currentElement = celebList[i];
    if((currentElement.length)%2 == 0){
        console.log(currentElement);
    }
    else{
        continue;
    }
}


// 5. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only first names
newArray = [];

for(let i = 0; i < celebList.length; i++){
    const currentElement = celebList[i];
    

    const celebName = currentElement.split(" ")
    celebName.pop()
    const fName = celebName.join("")

    newArray.push(fName)
}

console.log(newArray)


// 6. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only last names
const newArray2 = [];

for(let i = 0; i < celebList.length; i++){
    const currentElement = celebList[i]

    const celebName = currentElement.split(" ")
    celebName.shift()
    const lName = celebName.join("")

    newArray2.push(lName)
}

console.log(newArray2)


// 7. Loop over the celebrity list and then loop through each name. 
// // If a letter is a vowel, log it to the console
const vowelArray = []

for(let i = 0; i < celebList.length; i++){
    const currentElement = celebList[i];
    let vowelString = ""

    for(let j = 0; j < currentElement.length; j++){
        if(currentElement[j] === "a"){
            vowelString+=currentElement[j];
        }
        else if(currentElement[j] === "i"){
            vowelString+=currentElement[j];
        }
        else if(currentElement[j] === "u"){
            vowelString+=currentElement[j];
        }
        else if(currentElement[j] === "e"){
            vowelString+=currentElement[j];
        }
        else if(currentElement[j] === "o"){
            vowelString+=currentElement[j];
        }
        else{
            continue;
        }
    }

    vowelArray.push(vowelString)
}

console.log(vowelArray)


// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
const upCNames = []

for(let i = 0; i < celebList.length; i++){
    const currentElement = celebList[i]
    const string2Array = currentElement.split(" ")

    let nameInitials = ""

    for(let j = 0; j < string2Array.length; j++){
        const currentSection = string2Array[j]
        
        for(let k = 0; k < currentSection.length; k++){
            const currentLtr = currentSection[k]
            
            if(currentLtr == currentSection[0]){
                nameInitials+=currentLtr;
            }
            else if(currentLtr == "J"){
                nameInitials+=currentLtr;
            }
            else if(currentLtr == "K"){
                nameInitials+=currentLtr;
            }
            else{
                continue;
            }
        }
    }
    upCNames.push(nameInitials)
}

console.log(upCNames)


// // 9. Convert your celebrity array to all caps and no spaces:
// //  Ex:
// // // Input:  ['Martha Stewart', 'David Beckham', etc..] 
// // // Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
const newArray3 = []

for(let i = 0; i < celebList.length; i++){
    const currentElement = celebList[i]

    const string2Array = currentElement.split(" ")
    const array2String = string2Array.join('-')
    const upCName = array2String.toUpperCase();

    newArray3.push(upCName)
}

console.log(newArray3)


// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

for(let i = 0; i < celebList.length; i++){
    const currentElement = celebList[i]
    if(currentElement == "Seth Rogen"){
        favElement = currentElement
        console.log(favElement)
    }
    else{
        continue;
    }
}


//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console
