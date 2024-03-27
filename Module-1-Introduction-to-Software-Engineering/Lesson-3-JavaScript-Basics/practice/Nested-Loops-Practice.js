// 1. Given an array of strings
// // Loop over the array of strings
// // And loop over each string.
// // If a word has the letter "a" in it, log it to the console
    const names = ['Bill', 'Jordan', 'Pete', 'Daniel']

    for(let i = 0; i < names.length; i++){
        const currentName = names[i];
        for(let j = 0; j < currentName.length; j++){
            if(currentName[j] == "a"){
                console.log(currentName);
                break;
            }
            else{
                continue;
            }
        }
    }


// 2. Given an array of strings
// // Loop over the array
// // And loop over each string.
// // Create a new array of strings where every other letter in each string is capitalized 
// // // Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
    const stringArray = ['This','is','an','array','of','strings']
    const newArray = []

    for(let i = 0; i < stringArray.length; i++){
        const currentWord = stringArray[i];
        let newWord = "";
        for(let j = 0; j < currentWord.length; j++){
            const currentLetter = currentWord[j];
            const upperCase = currentLetter.toUpperCase();
            const lowerCase = currentLetter.toLowerCase();
            if(j%2 === 0){
                newWord+=upperCase
            }
            else{
                newWord+=lowerCase
            }
        }
        newArray.push(newWord)
    }

    console.log(newArray);



// 3. Given an array of arrays of numbers (nested array)
// // Add all the inner values up and push them into a single array
// // // Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
    const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]];
    const newArray2 = [];

    for(let i = 0; i < arrayOfArrays.length; i++){
        const currentArray = arrayOfArrays[i];
        let newNum = 0;
        for(let j = 0; j < currentArray.length; j++){
            const currentNumber = currentArray[j];
            newNum += currentNumber;
        }
        newArray2.push(newNum);
    }
    console.log(newArray2)
