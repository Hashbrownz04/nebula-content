// Reminder: control-c will kill an infinitely running node-process


// 1. Write a while loop that loops over a string and logs the letter when it find an "a"
const myString = "I'm excited to meet you all!"

let i = 0;

while(i < myString.length){
    if(myString[i] == 'a'){
        console.log("Hey, I've found the letter \"a\"!");
        break;
    }
    else{
        console.log("Still searching...")
        i++;
    }    
}


// 2. Write a while loop that logs to the console the 'count' until the 'count' reaches 100
// // Inside the while loop be sure to increase count by some number

let count = 0;

while(true){
    if(count == 100){
        console.log(count)
        break;
    }
    else{
        console.log(count)
        count++
    }
}