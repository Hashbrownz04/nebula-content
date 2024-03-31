// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
function addArray(array){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        let currentElement = array[i]
        currentElement += 1;
        newArray.push(currentElement)
    }
    return newArray
}

const myArray = [7, 2, 3, 0, 4]

console.log(addArray(myArray))


// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// // Example string = "happy birthday", letter = "a", should return true
// // Example string = "happy birthday", letter = "q" should return false
function detectLetter(addString){
    for(let i = 0; i<addString.length; i++){
        if(addString[i] === 'a'){
            console.log(true)
        }
        else if(addString[i] === 'q'){
            console.log(false)
        }
        else{
            continue
        }
    }
}

const myString = 'abcdefghijklmnopqrstuvwxyz'

console.log('If the string contains the letter "a", it shall return true.')
console.log('If the string contains the letter "q", it shall return false.')
detectLetter(myString)

// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
const flName = (array) => {
    const firstName = []
    const lastName = []

    for(let i = 0; i<array.length; i++){
        const currentName = array[i];
        const toArray = currentName.split(" ")

        firstName.push(toArray[0])
        lastName.push(toArray[1])
    }

    console.log(firstName);
    console.log(lastName)
}

const nameList = ["Hashem Cruz", "Elohim Cruz", "Carina Torres", "Victoria Serans"]

flName(nameList)

// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
const greetings = function(greeting, name){
    return `${greeting} ${name}!`
}

const greetingList = ["Hello,", "Good Morning,", "Greetings,", "Good Afternoon,", "Good Evening,", "Nice to meet you,", "Hi,", "Good Night,", "Bye, "]
const aGreeting = greetingList[Math.round(Math.random()*greetingList.length)]

const myName = "Hashem Cruz"

console.log(greetings(aGreeting, myName))

// 5. Write a function that takes in the year someone was born and returns their age.
// // Example: birth year: 2000 returns 23
const myAge = (birthYear) => {
    let presentYear = 2024;
    let myAge = presentYear-birthYear;
    return myAge
}

let mybirthYear = 2004;

console.log(myAge(mybirthYear))