/* Define a function called multiplyBy10 that takes in one number argument
and returns that number multiplied by 10. Test the function with some numbers.*/
function multiplyby10(num1){
    return num1*10;
}

const randNum = Math.round(Math.random()*10);

console.log(multiplyby10(randNum))

/* Define a function called sayGoodbye that uses a name parameter
and returns a farewell message incorporating that name.*/
function sayGoodbye(yourName){
    return `Goodbye ${yourName}! So long, farewell 'til we meet again.`;
}

const fName = "Hashem";

console.log(sayGoodbye(fName))

/* Define a function called evenNumbers that takes in an array as an argument and iterates over that array
and returns a new array with all the even numbers from that input array
(Hint: you can use the modulus operator to check whether a number is even or not).*/
function evenNumbers(array){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        const currentNum = array[i];
        if(currentNum%2 === 0){
            const even = currentNum;
            newArray.push(even);
        }
        else{
            continue;
        }
    }
    console.log(newArray)
}

const myArray = [2, 6, 1, 2]

evenNumbers(myArray);


/* Define a function called reverseWords that takes in a string and returns a string with the order of words reversed. */
function reverseWords(myString){
    const string2Array = myString.split(" ");
    string2Array.reverse();
    const array2String = string2Array.join(" ");
    return array2String
}

const myString1 = ". S E G A takes good this be To"

console.log(reverseWords(myString1))

/*const reverseWords1 = (string) => {
    const reversedString = " ";
    for(let i = string.length; i >= 0; i--){
        console.log(string[i])
        currentLtr = string[i];
        reversedString+=(currentLtr);
    }
    return reversedString
}
*/