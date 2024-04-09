# Event Handling

## Objectives
- Understand the concept of a "callback" (think higher-order functions)
- Explain the importance of callbacks in asynchronous programming 
- You're going to know the idea behind what asynchronous programming is
- Write event handlers 
- Know what 'this' represents within an event listener
- Use the event object to track events 

## HTML, CSS & JavaScript
Again, if HTML is the bones of an animal, the CSS the skin, eyes, hair, etc.., then JavaScript is the brain. 

In order to create interactive and responsive sites, we need to use JavaScript to update the DOM based on a user's actions.

Examples of user actions are:
- clicking
- scrolling
- typing
- mouse movement
- dragging content
- dropping content
- loading content
- inputting text
    
Examples of responses to user actions:
- If a user clicks on a sites nav menu icon, we want the menu to slide out revealing the ability to navigate
- When a users computer is finished loading an html page, we want a "welcome to my site" message to slide into view
- Maybe we want to give a user the option to click through a slideshow of images
- Maybe we want to build a quiz on our page because we have educational content that we want our users to memorize

When we a user action occurs we have that event:
```js
document.addEventListener("click", (event) => {
    console.log(event)
})
```
When dealing with clicks we OFTEN want to take a look at the `event.target` to understand what element was clicked. 
For example:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1>This is the first header</h1>
        <h2>This is the second header</h2>
        <h3>This is the third header</h3>
        <h4>This is the fourth header</h4>
        <h5>This is the fifth header</h5>
        <script src="script.js" charset="utf-8"></script>
    </body>
</html>
```
```js
document.addEventListener("click", (e) => {
console.log(e.target)
})
```

### Here's an example where a user can click on an element to modify something about the document:
HTML
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1 class='dynamicH1'>Dynamic Header Text</h1>
        <script src="script.js" charset="utf-8"></script>
    </body>
</html>
```
JavaScript
```js
let dynamicH1 = document.querySelector('.dynamicH1');
let clicked = true;

document.addEventListener("click", (e) => {
    if(e.target === dynamicH1 && clicked){
        dynamicH1.style.backgroundColor = "purple";       
        dynamicH1.style.color = "teal";   
        clicked = false;    
    } else if(e.target === dynamicH1 && !clicked){
        dynamicH1.style.backgroundColor = "teal";       
        dynamicH1.style.color = "purple";
        clicked = true;       
    }
})
```
CSS
```css
*{
    padding: 0px;
    margin: 0px;
    transition-duration: 1.2s;
    
    width: 100%;
    text-align: center;
}

```
## Where to put your script tag

### 1. Inside the `<head>` Tag with `defer` Attribute:

#### Pros:
- Improves page loading performance by deferring script execution until after the document has been fully parsed.
- Scripts execute in the order they appear in the HTML document.
- Ensures scripts are loaded before DOMContentLoaded event fires.

#### Cons:
- May delay the rendering of the webpage because scripts need to be downloaded and executed before the content is displayed.
- Not suitable for scripts that need to manipulate the DOM immediately upon page load.

**Code Snippet:**
```html
<head>
    <script src="script.js" defer></script>
</head>
```

### 2. Inside the `<head>` Tag with `async` Attribute:

#### Pros:
- Downloads and executes the script asynchronously while parsing the HTML document, allowing the browser to continue parsing and rendering the content without waiting for the script to finish downloading.
- Improves page loading performance by not blocking the rendering of the webpage.

#### Cons:
- Order of script execution may not be guaranteed, which can lead to potential issues if scripts depend on each other.
- Scripts may execute before the document is fully parsed, potentially causing errors if they manipulate the DOM.

**Code Snippet:**
```html
<head>
    <script src="script.js" async></script>
</head>
```

### 3. Inside the `<body>` Tag (Before Closing):

#### Pros:
- Improves page loading performance by allowing the browser to render the content while simultaneously downloading and executing the script.
- Ensures scripts do not block the rendering of the webpage.
- Ideal for scripts that do not need to be executed immediately upon page load.

#### Cons:
- Scripts may be executed after the DOMContentLoaded event has fired, which can lead to delays in script execution.
- Not suitable for scripts that need to manipulate the DOM before the content is displayed.

**Code Snippet:**
```html
<body>
    <!-- Content of the webpage -->
    
    <script src="script.js"></script>
</body>
```

### 4. Inline:

#### Pros:
- Allows for quick and easy inclusion of small scripts directly within the HTML document.
- Scripts execute as soon as they're encountered in the HTML document.

#### Cons:
- Not recommended for larger scripts or complex applications due to concerns about code maintainability and separation of concerns.
- Can clutter the HTML document and make it harder to read and maintain.

**Code Snippet:**
```html
<body>
    <!-- Content of the webpage -->

    <script>
        // Inline JavaScript code
        console.log("Hello, world!");
    </script>
</body>
```

Each placement option offers different trade-offs in terms of page loading performance, script execution timing, and code organization. It's important to consider these factors and choose the option that best suits the requirements of your project.
Let's practice!
> Create a folder with an index.html, styles.css & script.js
    > - Hook up the files together - how do we test they are working?
    > - Create a square that when you click on it the website background color changes


What is Asynchronicity?
- One of the special things about JavaScript compared to most other programming languages is that it is designed to run in the browser, and the browser supports user events!
- The browser has it's own runtime for JavaScript, which includes a space to hold things like event listeners. What this means is that there is code that we can write for our websites that doesn't have to adhere strictly to the top to bottom order of executing.
- For example: what if we want to wait for a user to click before we run a piece of code? We can do that by having code waiting around for that happen.
- That code that's waiting around and being executed on it's own time is code that is being executed asynchronously. It's code that won't hold up our synchronous code from running (the code that's running one line at a time, from top to bottom). Remember, code that is written below other code in a synchronous execution, needs to wait for the code above to run before it itself runs.

Event-driven programming
- A programming paradigm where the flow of the program is driven by events.
- To recap: this means that the program will wait or "listen" for events to occur, which is an example of asynchronous code.

We can write what are called "event handlers" for the browser in JavaScript
- The syntax template looks like:
``` js
element.addEventListener('nameOfEvent', functionToRun);
```
Example:
```js
const ourH1 = document.querySelector("h1");

ourH1.addEventListener('click', (e) => {
    e.target.color = "red"
})
```

Breaking that down
1. Element: This is a DOM node which we tying an event to.
2. .addEventListener(): This is a method that can be used on an element Dom node to listen for a user generated event.
3. 'click': The type of event we are listening for.
4. (e) => { e.target.color = "red"}: This is an anonymous function that will execute on the element the user is performing the action on. 

## Adding elements to the DOM

When Adding elements to the DOM we need to break it down into parts. 
1. Create a new element
```JS
let newEle = document.createElement('p');
```
2. Modify that element
```JS
newEle.innerText = 'This is so cool!';
```
3. Add that element to the body
```JS
document.body.appendChild(newEle);
```
A working example with HTML and JS below:
- Notice that there is no text in the HTML, yet we have text rendering from the JS
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <script src="script.js"></script>
</body>
</html>
```
```js
let newEle = document.createElement('p');
newEle.innerText = 'This is so cool!';
document.body.appendChild(newEle);
```
We can do the same thing with a loop!
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <script src="script.js"></script>
</body>
</html>
```
```js
for(let i = 0; i < 10; i++){
    let newEle = document.createElement('p');
    newEle.innerText = `This is STILL so cool! Even after ${i} times!!`;
    document.body.appendChild(newEle);
}
```

## Creating a form
```html
<form>
  <label for="movieTitle">Movie Title:</label>
  <input type="text" id="movieTitle" name="movieTitle"><br>

  <label for="year">Year:</label>
  <input type="number" id="year" name="year"><br>

  <label for="rating">Rating:</label>
  <input type="number" id="rating" name="rating" min="0" max="10" step="0.1"><br>

  <label for="summary">Summary:</label>
  <textarea id="summary" name="summary"></textarea><br>

  <input type="submit" value="Submit">
</form>

```

- `<form>`: This is a HTML tag that defines a form element. A form is used to collect input from users and send it to a server for processing.
- `<label>`: This is a HTML tag that defines a label for an input field. Labels provide a name for each input field and help screen readers and other assistive technologies to identify what each field is for.

- `for` attribute: This is an attribute of the `<label>` tag that associates the label with the corresponding input field. The for attribute should have the same value as the id attribute of the input field it is associated with.

- `type` attribute: This is an attribute of the `<input>` tag that defines the type of input field. In this form, we have used three different input types: text, number, and textarea.

- `id` attribute: This is an attribute of the `<input>` and `<textarea>` tags that gives each input field a unique identifier. This identifier is used by the label to associate the label with the correct input field.

- `name` attribute: This is an attribute of the `<input>` and `<textarea>` tags that gives each input field a name. The name is used to identify the input field when the form is submitted.

- `<textarea>`: This is a HTML tag that defines a text area for users to enter multiple lines of text. In this form, we have used the `<textarea>` tag for the summary input field.

- `min`, `max`, and `step` attributes: These are attributes of the `<input>` tag that define the range and increment of a numeric input field. In this form, we have used the min and max attributes to set a minimum and maximum rating value, and the step attribute to define the increments between values.

Let's practice!
> Create a folder with an index.html, styles.css & script.js
> - Hook up the files together - how do we test they are working?
> - Now everything is set up
> - Create an input that accepts text
> - Add a button to the page that when you click it it creates a new row of text acquired from the input field


