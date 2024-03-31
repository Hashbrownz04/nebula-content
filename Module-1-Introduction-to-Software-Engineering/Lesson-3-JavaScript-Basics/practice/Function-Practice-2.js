// 1. Write a function that multiplies 3 input numbers together.
const multiplyAll3 = (num1, num2, num3) => {
    return (num1 * num2) * num3
}

console.log(multiplyAll3(3, 4, 5))

// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
const myNum = 5

const findNum = (num1) => {
    for(let i = 0; i < 30; i++){
        if(i === num1 && i%2 !== 0){
            console.log(`${num1} That's the number!`)
            break;
        }
        else if(i%2 !== 0){
            console.log(i)
        }
        else{
            continue;
        }
    }
}

findNum(myNum)

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
const listNames = ["Seth Rogen", "Ryan Reynolds", "Alex Hirsch", "Dana Terrace", "Mel Blanc"]

function initialName(array){
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        const currentName = array[i]
        const capLtrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        let newElement = ''

        for(let j = 0; j < currentName.length; j++){
            
            if(capLtrs.includes(currentName[j])){
                newElement+=currentName[j]
            }
            else{
                continue;
            }
        }

        newArray.push(newElement)
    }

    return newArray
} 

console.log(initialName(listNames))

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
const doMath = (num1, num2, operator) => {
    console.log(`${num1} ${operator} ${num2} =`)

    if(operator === "+"){
        console.log(num1 + num2)
    }
    else if(operator === "-"){
        console.log(num1 - num2)
    }
    else if(operator === "*"){
        console.log(num1 * num2)
    }
    else if(operator === "/"){
        console.log(num1/num2)
    }
    else if(operator === "%"){
        console.log(num1%num2)
    }
}

const randNum1 = Math.round(Math.random()*100)
const randNum2 = Math.round(Math.random()*100)

const operators = ["+", "-", "*", "/", "%"]
const operator = operators[Math.round(Math.random()*4)]

doMath(randNum1, randNum2, operator)


// 5. Write a function which takes in two arrays and returns those arrays combined together. 
const combineArrays = (array1, array2) => {
    const result = [...array1, ...array2]
    return result;
}

const array1 = ["a", "b", "c"]
const array2 = [1,2,3]

console.log(combineArrays(array1, array2))

