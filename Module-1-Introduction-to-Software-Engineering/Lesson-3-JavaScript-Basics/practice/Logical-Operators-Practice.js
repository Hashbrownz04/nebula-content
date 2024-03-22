
// If x or y is equal to 42 log 'I see you've found the ultimate answer to life, the universe and everything.'
let x = 10
let y = 42

if(x == 42 || y == 42){
    console.log('I see you\'ve found the ultimate answer to life, the universe and everything.')
}


// Save your name to a variable called name
const fName = "Hashem";

const nameLength = fName.length;

// If your name has less than 10 characters then log, 'you'll need more characters!' to the console.
// Otherwise log, 'I see you've got enough characters!' to the console. 

if(nameLength < 10){
    console.log("You'll need more characters!")
}
else{
    console.log("I see you've got enough characters!")
}

// Create the following if statement: 
// If this month (1-12) is after March and before December, log 'Winter is Coming!'
const randomMonth = Math.ceil(Math.random() * 12);
const March = 3;
const December = 12;

if(randomMonth > March && randomMonth < December){
    console.log(`${randomMonth} > ${March} && ${randomMonth} < ${December}`)
    console.log("Winter is Coming!")
}

// Create two variables a & b initialized as numbers
const a = (Math.round(Math.random()*5));
const b = (Math.round(Math.random()*5));

// Write the following if statement
// If a is greater than b, log 'a is greater than b'
// If a is less than b, log 'a is less than b'
// otherwise log 'a is equal to b'

if(a > b){
    console.log(`${a} > ${b}`)
    console.log("a is greater than b")
}
else if(a < b){
    console.log(`${a} < ${b}`)
    console.log("a is less than b")
}
else if(a == b){
    console.log(`${a} == ${b}`)
    console.log("a is equal to b")
}