# CSS Foundations
- **Objectives**:
    - Grasp the basic structure of CSS: selectors, properties, and values.
    - Understand the concept of specificity and the cascade in CSS.
    - Learn about different CSS units and their applications.
    - Introduction to the concept and usage of CSS variables.
- **Summary**:
This section covers core concepts and explores CSS structure, specificity, and cascade. You will learn about different units in CSS and their practical use cases, alongside an introduction to CSS variables for enhancing dynamic styling capabilities.
### **Structure of CSS**

### Selectors

- **Purpose and Types**:
    - CSS selectors are fundamental to applying styles. They target HTML elements based on element type, class, ID, or other attributes.
    - **Type Selectors**: Target HTML elements directly (e.g., **`p`**, **`h1`**). They are used to apply a style to all elements of a specific type.
        
        ```css
        p {
            margin: 1em 0;
        }
        ```
        
    - **Class Selectors**: Begin with a dot (**`.`**) and target elements with a specific class attribute. They are useful for styling a group of elements that share the same class.
        
        ```css
        .highlight {
            background-color: yellow;
        }
        ```
        
    - **ID Selectors**: Prefixed with a hash (**`#`**) and target elements with a unique ID. They are used for styling elements that need to be uniquely identified on the page.
        
        ```css
        #main-header {
            font-size: 24px;
        }
        ```
        
    - **Other Selectors**: CSS also includes attribute selectors, pseudo-classes, and pseudo-elements, which allow for more specific and dynamic styling.
        - **Pseudo-Classes**
            - Pseudo-classes allow you to define special states of an element.
            1. **Hover Pseudo-Class**:
                - Targets an element when it is being hovered over by a cursor.
                - Example: Change color of a button on hover.
                    
                    ```css
                    button:hover {
                        background-color: green;
                    }
                    ```
                    
            2. **First Child Pseudo-Class**:
                - Targets the first child element within its parent.
                - Example: Style the first **`<li>`** element in a list.
                    
                    ```css
                    ul li:first-child {
                        font-weight: bold;
                    }
                    ```
                    
            3. **Checked Pseudo-Class**:
                - Targets input elements that are currently checked (useful for checkboxes and radio buttons).
                - Example: Style a checked checkbox.
                    
                    ```css
                    input[type="checkbox"]:checked {
                        box-shadow: 0 0 5px 5px yellow;
                    }
                    ```
                    
        - **Pseudo-Elements**
            - Pseudo-elements target specific parts of an element.
            1. **Before Pseudo-Element**:
                - Used to insert content before the content of an element.
                - Example: Insert content before a paragraph.
                    
                    ```css
                    p::before {
                        content: "Note: ";
                        font-weight: bold;
                    }
                    ```
                    
            2. **After Pseudo-Element**:
                - Used to insert content after the content of an element.
                - Example: Add a decorative icon after a heading.
                    
                    ```css
                    h1::after {
                        content: "★";
                        color: blue;
                    }
                    ```
                    
            3. **First Line Pseudo-Element**:
                - Targets only the first line of text in an element.
                - Example: Change the font style of the first line of a paragraph.
                    
                    ```css
                    p::first-line {
                        font-variant: small-caps;
                    }
                    ```
                    
    
    ### **Conclusion**
    
    These additional selectors enhance the capability of CSS to style web pages in more complex and specific ways. Attribute selectors can be used to apply styles based on the presence or value of attributes, pseudo-classes enable styling based on the state of an element, and pseudo-elements allow for styling specific parts of an element's content. Understanding and utilizing these selectors can greatly expand your styling options and help create more interactive and visually appealing web designs.
    

### Properties and Values

- **Defining Styles**:
    - Properties and values are the essence of CSS rules. Once an element is selected, properties determine what aspect of the element’s style will be changed, and values define how they will be changed.
    - **Syntax**: A property is followed by a colon (**`:`**) and then a value. The declaration ends with a semicolon (**`;`**).
    - **Example**:
        
        ```css
        cssCopy code
        /* Property: color, Value: blue */
        .text-color {
            color: blue;
        }
        
        /* Property: margin, Value: 20px 0 */
        #content {
            margin: 20px 0;
        }
        
        ```
        
- **Combining Selectors and Properties**:
    - In a CSS rule, the selector is followed by a declaration block, which includes one or more property-value pairs enclosed in curly braces (**`{ }`**).
    - **Example**:This example will apply the **`color`** and **`background-color`** properties to all **`<p>`** elements with the class **`highlight`**.
        
        ```css
        p.highlight {
            color: blue;
            background-color: yellow;
        }
        ```
        

### Conclusion

Understanding the structure of CSS, including selectors, properties, and values, is key to effectively styling web pages. Selectors determine which elements are styled, while properties and values define what the style will be. By combining these aspects, developers can create rich, visually engaging, and responsive web designs.

## **Specificity and Cascade in CSS**

### Specificity

- **Understanding Specificity**:
    - Specificity is the set of rules that the browser follows to decide which CSS property values are the most relevant to an element and therefore will be applied.
    - It is calculated based on the types of selectors used in a CSS rule. Each type of selector has a different weight, and the total weight determines which rule takes precedence.
- **Specificity Hierarchy**:
    - **Inline Styles**: An inline style directly on an element (e.g., **`style="font-weight: bold;"`**) has the highest specificity.
    - **ID Selectors**: These have a higher specificity than class and type selectors (e.g., **`#navbar`**).
    - **Class Selectors**: This includes class selectors, pseudo-classes, and attribute selectors (e.g., **`.menu`**, **`:hover`**, **`[type="text"]`**).
    - **Type Selectors**: These are the element or tag selectors (e.g., **`h1`**, **`div`**).
    - **Universal Selector (``), Combinators (`+`, `>`, `~`), and Negation Pseudo-class (`:not()`) have no effect on specificity**.
- **Calculation Example**:
    - Given two rules, **`#navbar a`** (ID + type selector) and **`.menu .item a`** (class + class + type selector), the first one has higher specificity due to the presence of an ID selector.

### The Cascade

- **Role of the Cascade**:
    - The Cascade is the mechanism that resolves conflicts between multiple CSS rules that could apply to a certain element. It determines which styles are ultimately applied to elements.
- **Factors in the Cascade**:
    - **Source Order**: The order in which the CSS rules are declared. If two rules have the same specificity, the latter one takes precedence.
    - **Specificity**: As described above, rules with higher specificity override those with lower specificity.
    - **Importance (`!important`)**: Adding **`!important`** to a CSS property value makes it the most important rule. It overrides any other declaration. However, overusing **`!important`** can make CSS maintenance difficult.

### Examples Demonstrating Specificity and Cascade

1. **Specificity Example**:
    
    ```css
    #header {
        color: blue;
    }
    
    .page-header {
        color: red;
    }
    
    <div id="header" class="page-header">Text</div>
    ```
    
    In this case, the text color will be blue because the ID selector (**`#header`**) has higher specificity than the class selector (**`.page-header`**).
    
2. **Cascade Example**:
    
    ```css
    p {
        color: green;
    }
    
    p {
        color: red;
    }
    ```
    
    If both rules are in the same stylesheet, the paragraph text will be red because the latter rule has the same specificity but comes later in the source order.
    

### Conclusion

Understanding specificity and the cascade is crucial for effective CSS styling. Specificity determines which rules are more "important" based on the selectors used, and the cascade resolves conflicts between multiple applicable rules. This knowledge is key to predicting how styles will be applied and troubleshooting CSS issues, ensuring a more controlled and intentional design process.

## **CSS Units**

### Introduction to CSS Units

- **Importance of Units in CSS**: In CSS, units are used to specify the size of various elements and properties like width, height, font size, margin, and padding. The choice of units can greatly affect the responsiveness and accessibility of a web page.

### Types of CSS Units

1. **Pixels (`px`)**:
    - **Description**: Pixels are the most basic measurement unit in CSS and represent a single point in a raster image. They are fixed-size units and are commonly used for precision and control in layout design.
    - **Use Cases**: Ideal for fixed-width layouts and when precision is necessary, such as in defining borders or setting the exact size of an element.
2. **Ems (`em`)**:
    - **Description**: Ems are relative units that are based on the font size of the parent element.
    - **Use Cases**: Useful for scalable layouts and typography. Ems are particularly helpful in creating designs that need to scale based on different text sizes.
3. **Rems (`rem`)**:
    - **Description**: Rems (Root Ems) are similar to ems, but they are always relative to the root element's font size, typically the **`<html>`** element.
    - **Use Cases**: They provide consistency in scaling elements and are excellent for responsive design, as changing the root element's font size can adjust the entire layout's sizing proportionally.
4. **Percentages (`%`)**:
    - **Description**: Percentage units are relative to the parent element's size, making them very flexible and adaptable.
    - **Use Cases**: They are extensively used for fluid layouts and elements that need to adjust according to their container's size, like width, margin, or padding.
5. **Viewport Width (`vw`) and Height (`vh`)**:
    - **Description**: These units are relative to the size of the viewport. One viewport width (**`vw`**) is equal to 1% of the width of the viewport, and similarly for viewport height (**`vh`**).
    - **Use Cases**: Ideal for creating layouts that are responsive to the size of the browser window, such as full-screen sections or elements that need to adapt dynamically to the viewport size.

### Responsiveness and Accessibility

- **Responsiveness**: Units like **`em`**, **`rem`**, **`%`**, **`vw`**, and **`vh`** are key to responsive design. They allow elements to scale proportionally to the viewport or parent element, making the web page adaptable to different screen sizes.
- **Accessibility**: Relative units like **`em`** and **`rem`** contribute significantly to accessibility, especially for users who rely on customizing text sizes for readability. Using these units for font sizes, margins, and padding ensures that the layout can adapt to the user's preferences without breaking.

### Conclusion

Understanding and choosing the right CSS units is essential for creating responsive and accessible web designs. While pixels offer precision, relative units like ems, rems, percentages, and viewport units provide the flexibility needed for responsive design. Balancing the use of these units depending on the context and requirements of the layout is a key skill in web development and design.

## **CSS Variables**

### Introduction

- **CSS Variables (Custom Properties)**: CSS variables, officially known as custom properties, are powerful tools in CSS that allow developers to store specific values for reuse throughout a stylesheet. These variables can hold data like colors, fonts, sizes, and more.
- **Syntax**: A CSS variable is defined with a double dash (**`-`**) and used with the **`var()`** function. For example, **`-main-color: blue;`**.

### Usage

- **Global and Local Scope**:
    - **Global Variables**: Defined within the **`:root`** pseudo-class, these variables are accessible anywhere in the document. They are typically used for site-wide styles.
        
        ```css
        :root {
            --primary-color: #4CAF50;
            --font-stack: 'Helvetica', sans-serif;
        }
        ```
        
    - **Local Variables**: Defined within a specific selector, these variables are only accessible within that selector's scope. Useful for component-level styling.
        
        ```css
        .button {
            --button-bg-color: blue;
        }
        ```
        
- **Applying Variables**: Variables are applied using the **`var()`** function. This function can be used in place of any regular value in CSS.
    
    ```css
    body {
        font-family: var(--font-stack);
        color: var(--primary-color);
    }
    
    .button {
        background-color: var(--button-bg-color);
    }
    ```
    
- **Advantages of Using CSS Variables**:
    - **Maintainability**: Changes to values like colors or fonts can be made in one place, and the changes are reflected throughout the entire site.
    - **Flexibility**: They can be used to create themes or allow for dynamic changes, such as changing styles in response to user interactions, without needing a preprocessor.
    - **Fallback Values**: CSS variables can include a fallback value, which is used if the variable is not defined.
        
        ```css
        color: var(--unknown-var, black);
        ```
        

### Conclusion

CSS variables offer a significant advancement in writing maintainable and flexible stylesheets. By allowing values to be stored and reused, they greatly simplify the task of updating and managing styles, particularly in large projects or complex layouts. Their ability to be scoped globally or locally adds a level of versatility that makes them suitable for a wide range of applications, from small tweaks to extensive theming. As part of modern CSS, they represent a step forward in how developers approach styling on the web.