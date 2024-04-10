// COUNTER EXERCISE

// Select the body element from index.html
const bodyElement = document.querySelector("body");
// Set an attribute of 'style' to the body tag and add a background color of anything other than white
bodyElement.setAttribute("style", "background-color:turquoise")
/* -------------------------------------------------------------------------- */

// Create an h1 element
const createH1 = document.createElement("h1");
// Append a new h1 element to the body element as a child
document.body.appendChild(createH1);
// Add text to the h1 element 
createH1.innerText = "Hello!";
// Assign the background color of this element to something unique
createH1.setAttribute("style", "background-color:white")
// Set a new style attribute to the h1 element
createH1.style.fontFamily = "Optima Medium";
// Add font size to the h1Element
createH1.style.fontSize = "48px";
// Set the default text to the number zero
createH1.innerText = "0";
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const addButton = document.createElement("button");
// Append the button element to the body element
bodyElement.appendChild(addButton);
// Add text to the button element
addButton.innerText = "addOne";
// Add a class attribute to button element
addButton.className = "add";
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const subtractButton = document.createElement("button");
// Add the button element to the body element
bodyElement.appendChild(subtractButton);
// Add text to the button element
subtractButton.innerText = "subtractOne";
// Add a class attribute of style to the button element
subtractButton.className = "subtract";
/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNCTION
// Create functionality that, when you click this button it increases the h1 value
const add = document.querySelector(".add")
let total = parseInt(createH1.innerText);

add.addEventListener("click", (event) => {
    total+=1;
    createH1.innerText = total;
})
// Create functionality that, when you click this button it decreases the h1 value
const subtract = document.querySelector(".subtract")

subtract.addEventListener("click", (event) => {
    total-=1;
    createH1.innerText = total;
})

/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 
const clearButton = document.createElement("button");
bodyElement.appendChild(clearButton);
clearButton.innerText = "CLEAR";
clearButton.className = "delete";

const clear = document.querySelector(".delete");

clear.addEventListener("click", (event) => {
    total-=total;
    createH1.innerText = total;
})