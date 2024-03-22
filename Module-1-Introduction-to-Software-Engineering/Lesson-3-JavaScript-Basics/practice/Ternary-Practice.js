// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number
const creditCardNum = "7234-0527-0718-6666"

// Initialize a variable called last4SS, set it equal to a 4 string-numbers (don't use your real SS last 4!)
const last4SS = 6666

// Initialize a variable called userId, set it equal to a fake user ID
const userId = "hashbrownz404"

// Initialize a variable called password, set it equal to a fake password
const password = "fauxMot#666"

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
const inputId = "hashbrownz404";
const inputPass = "fauxMot#666"

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'

const clarifyID = (userId == inputId && password == inputPass) ? console.log(`${creditCardNum} ${last4SS}`) : console.log("incorrect username or id")

//const clarifyID = (userId == input && password == inputPass) ? `${creditCardNum} ${last4SS}` : "incorrect username or id"
//if (clarifyID){
//    console.log(clarifyID)
//}
//else{
//    console.log(clarifyID)
//}