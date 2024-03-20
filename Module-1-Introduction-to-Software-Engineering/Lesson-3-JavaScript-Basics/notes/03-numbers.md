# Numbers and Math Object Methods

## Objectives
- Understand basic arithmetic and modulus operations in JavaScript.
- Apply increment and decrement operators effectively.
- Explore compound assignment operators for variable manipulation.
- Gain proficiency in using common Math methods for numerical operations.

## JavaScript Math Overview

Math is an important facet of programming and being good at it will only help you in this field. However, in general computers operate on pretty straight forward and simple logic and you'll often find that the math that's required for the job won't involve anything like calculus (at least not in this program). JavaScript also comes with built in `Math` methods.

### Arithmetic Operators

The simplest form of Math is arithmetic, and JavaScript uses all the operators one would imagine. 

Multiplication: `*`
Division: `/`
Subtraction: `-`
Addition: `+` (Note: this operator is also used with `Strings`)

And lastly, if you're new to programming there is this operator called `Modulus`: `%`.

> **Note:** the mathematical order of operations that you might be familiar with known as [PEMDAS](https://www.mathsisfun.com/operation-order-pemdas.html) applies in JavaScript. So you can change the order of operations of this: `2 + 10 * 100`, which returns `1002`, to this `(2 + 10) * 100`, which returns `1200`.

#### Modulus - %

Using the Modulus operator (`%`) we are able to find the remainder of a division problem when we provide the operator with a left and right input such as:

```js
2 % 2
// The above will evaluate to 0
```

We get the remainder of such an operation, which in the above example is 0. This operator is great for figuring out whether a given number is even or odd - if it's odd the result of dividing that number by 2, such as `3 % 2`, will always be 1, and with even numbers dividing by 2 will always return a value of 0.

## Infinity

There exists a special global property in JavaScript called [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity). This is often used to designate an Infinite upper limit in a program / algorithm. Conversely you can also use `-Infinity`. It might not yet be clear why this is useful until we start getting into more complex logic - in particular we will soon introduce `Comparison & Logical Operators`.

## Other Shorthand Operators

### Increment & Decrement

The [increment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) (`++`) adds one to a number. Note that these can only be used on variables containing a number value. There are two ways to use this: `postfix` & `prefix`.

Postfix will add one to that variable holding a number, but won't return the updated value on the same line.

Prefix will add one to that variable holding that number as well, but will return the updated value on the same line.

```js
// Postfix (most common)
let x = 3;
let y = x++

console.log(`x:${x}, y:${y}`);
// This will output: x:3, y:4;

// Prefix
let a = 3;
let b = ++a;

console.log(`a:${a}, b:${b}`);
// This will output: a:4, b:4
```

If the above is confusing, don't worry, it's mostly unnecessary to understand. In general it's less confusing, and some would argue best practice when using the increment operator on a variable to have that operation happen on it's own line to avoid confusion:

```js
let x = 3;
x++
let y = x;

console.log(`x:${x}, y:${y}`);
// This will output: x:4, y:4
```

The same way there is an increment operator, there is also a decrement operator that behaves the same way except subtracts one from a number.

```js
let x = 3;
x--
let y = x;

console.log(`x:${x}, y:${y}`);
// This will output: x:2, y:2
```

### Compound Assignment Operators

There are a multitude of [shorthand assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) in JavaScript. The ones we'll mention here are commonly used and start with an arithmetic operator and are called `Compound Assignment Operators`. They should be pretty self-explanatory through example (remember, the assignment operator, denoted by an equals (`=`) sign, `assigns` a value to a variable, and can also `re-assign` the value of a variable that has been declared with the `let` or `var` keyword).

```js
let x = 3;
x += 3

console.log(x);
// This will output: 6

let y = 4;
y *= 4;

console.log(y);
// This will output: 16

let z = 16;
z /= 2;

console.log(z);
// This will output: 8

let a = 10;
a -= 5;

console.log(a);
// This will output: 5

let b = 10;
b %= 2;

console.log(b);
// This will output: 0
```

### Time To Practice! 
**Complete the Numbers-Practice-0 quick practice**

## The Math Object & Math Methods

Remember that `methods` are packaged code written to perform certain actions. There are [default `objects`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and `methods` built into JavaScript, some of which are meant to work with specific `data types` only. Again, we aren't going too deep here just yet in regards to what a `method` or an `object` is (we'll go over this later), but know that when there is code stored in an `object` as a `function`, we call that a `method`. Thus, within the `Math` object in JavaScript, there are separate chunks of code stored in `functions` meant to act upon `Number` data. Ok, so long story short, we are about to go over methods that allow us to perform operations on numbers, such as finding the product of a number raised to certain power.


Certainly! Here's the Markdown documentation for the different Math methods with code snippets:

### Math Methods in JavaScript

#### 1. Finding the Product of a Number Raised to a Power - `Math.pow()`
```javascript
let result = Math.pow(4, 4);
// Outputs: 256
```

#### 2. Finding the Square Root of a Number - `Math.sqrt()`
```javascript
let squareRoot = Math.sqrt(16);
// Outputs: 4
```

#### 3. Generating a Random Number - `Math.random()`
```javascript
let randomNum = Math.random();
// Outputs: some random number between 0 and 1 - ie: 0.061586464969113575


// Using Math.random() more effectively.
let scaledRandomNum = Math.random() * 100;
// Outputs: some random number between 0 and 100
```
#### 4. Generating a Scaled Random Number - `Math.random()`
This line of code generates a random whole number between 0 and 999, inclusive. The `Math.random()` function produces a decimal between 0 (inclusive) and 1 (exclusive), and by multiplying it by 1000 and rounding down, we ensure the final result is a random integer in the specified range. This is often used when you need controlled randomness in programming, like for generating random values within a specific numerical range.
```javascript
let randomExample = Math.floor(Math.random() * 1000)
```

#### 5. Rounding to the Nearest Integer - `Math.round()`
```javascript
let roundExample = Math.round(10.5);
// Outputs: 11
```

#### 6. Rounding Down to the Next Largest Integer - `Math.floor()`
```javascript
let floorExample = Math.floor(10.93492);
// Outputs: 10
```

#### 7. Rounding Up to the Next Largest Integer - `Math.ceil()`
```javascript
let ceilExample = Math.ceil(12.1);
// Outputs: 12
```

#### 8. Finding the Absolute Value - `Math.abs()`
```javascript
let absExample = Math.abs(-5);
// Outputs: 5
```

#### 9. Finding the Minimum Value - `Math.min()`
Math.min() - returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
```javascript

let minExample = Math.min(4, 3, 8, 10, 21, 2);
// Outputs: 2
```

#### 10. Finding the Maximum Value - `Math.max()`
Math.max() - The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
```javascript
let maxExample = Math.max(4, 3, 8, 10, 21, 2);
// Outputs: 21
```

Unfortunately, there are a lot of gotchas when it comes to dealing with `floating point numbers` decimal numbers in JavaScript. Because of how JavaScript stores numbers in memory, the accuracy isn't always the best. For instance, in the console try typing in `0.3 - 0.1`. Do you notice something weird here? We won't go too far in depth about these issues, but to go from a novice JavaScript developer to a more seasoned one, you'll need to come back to this topic. If you run into issues when dealing with very precise numbers in JavaScript throughout this course, I'd suggest maybe you start by watching this 16 minute [video](https://www.youtube.com/watch?v=wETgMr6QMIE&ab_channel=AllThingsJavaScript%2CLLC).


#### More Math Methods

There are a good amount of other built-in JavaScript `Math` methods that you should learn about. Again, I recommend using the documentation over at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and using the left-hand navigation under "Methods" to browse through what's available. Some common ones are: `Math.pow()`, `Math.sqrt()`, `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.abs()`, `Math.min()`, `Math.max()`, `Math.random()`.

## Time To Practice!

Using MDN, spend some time researching one of the Math methods that we haven't covered yet, and be prepared to give us a brief presentation on what it's used for with a demonstration on how to use it.