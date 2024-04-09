// Grab the elements and log them to the console


// Q1:  Attach this document to the index.html
/* <script src="script.js"></script> */

// Q2:  Grab the second element that has the text Hello
let selectTest = document.querySelector('#first');
console.log(selectTest)

// Q3:  Grab the text in the h1 that says 'Good Afternoon'
let selectText = document.querySelectorAll('h1');
console.log(selectText[2])

// Q4:  Grab the h1 with the text that says "Catch me if you can"
let getIt = document.querySelector('.catch-me');
console.log(getIt)

// Q5:  Grab the span element and change the text to "Got ya"
let changeElement = document.querySelector('span');
console.log(changeElement = 'Got ya')