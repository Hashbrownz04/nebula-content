// 1. Write a function that takes in 1 number and returns that number + 1
function addOne(num1) {
    return num1 + 1;
}

console.log(addOne(1));

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
const fName = "Hashem";

function goodNite(yourName) {
    return `Good Night, ${yourName}...`;
}

console.log(goodNite(fName))

// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
const myArray = [4, 0, 4]

function nulNum(inputArray) {
    for(let i = 0; i < inputArray.length; i++){
        let currentNum = inputArray[i]
        if(currentNum === 0){
            return "This array has the number zero in it!"
        }
    }
}

console.log(nulNum(myArray));

// 4. Write a function that console logs 'hello world' 10 times to the console. 

// 5. Write the prior function utilizing a 'fat arrow' function
