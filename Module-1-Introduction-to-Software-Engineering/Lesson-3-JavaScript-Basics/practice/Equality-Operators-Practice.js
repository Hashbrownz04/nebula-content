// Create two variables, one equal to '10' and the other equal to 10
const num1 = 10
const num2 = 10
console.log(num1, num2)

// Comparing the two variables, are they strictly equal?
console.log(
    num1 === '10', num2 === 10
)

// Comparing the two variables, are they loosely equal?
console.log(
    num1 == '10', num2 == 10
)

// Check if the variable set to 10 is not loosely equal to 'ten' 
console.log(
    "Is 10 not loosely equal to '10'? - ", num1 != '10'
)

// Create a variable and initialize it to true, check if it is not strictly equal to 'true' 
const bool = true
console.log(
    "Is true not strictly equal to 'true'? - ", bool !== 'true'
)