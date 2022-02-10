# JS Activity: Form fields and DOM output
The following files contain code that runs when a function is invoked. Refactor each of these files so that:
- the initial argument values are submitted by the user using form fields;
- the response is printed to `index.html`.

## Instructions
For each of the `.js` files in this Gist:
1. Create a new HTML file named after the respective `.js` file. For example, `captialize.html` should link to `capitalize.js` in a `<script>` element in the `<head>`;
2. In this HTML file, 
    - add an appropriate form field and `<label>` for each of the values the user will be submitting. Examples:
        - for a `Number`:
            
            ```html
            <label for="sub-total">Sub-Total: </label>
            <input type="number" name="gst" id="sub-total">
            ```
        - for a `String`:

            ```html
            <label for="sub-total">Full Name:</label>
            <input type="text" name="full-name" id="full-name">
            ```
    - Add a `<button>` element to submit the data, if it's not already present.
    - Add a `<p>` element to store the response, if it's not already present.
3. In the `.js` file:
    1. Assign each form field, button and output paragraph to its own variable using [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector):
        
        ```js
        const button = document.querySelector('button');
        const inputSubTotal = document.querySelector('input');
        const output = document.querySelector('.output')
        ```

    2. Assign `clickHandler` to a `click` event on the `<button>` using [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener):

        ```js
        button.addEventListener('click', clickHandler);
        ```
    
    3. Inside the `clickHandler`, assign form field data to the appropriate variable using `FormElement.value`. 

        ```js
        const subtTotal = inputSubTotal.value;
        ```
    4. Instead of using `console.log`, use `Element.textContent` to send the `clickHandler` response to a `<p>` element (for example) on the `.html` page.
        
        ```js
        output.textContent = `some response with ${calculation}`
        ```

When you're done, you should have a `.js` page similar to this [spoiler example].

## Bonus Activity
Both the Tip Calculator and the GST Calculator deal with rates and percentages. 
1. In a separate file, write a function that will convert a rate (i.e. `0.05`) into a percentage (`5%` as a string).
2. Add this new file to the `.html` files that will use it.
    - **Note**: you will need to use [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) keyword to pass the new percentage string back to the calling script.
3. Refactor the Tip Calculator to use your function.
4. Refactor the GST Calculator to use your function and include the GST percentage in its response like the Tip Calculator does.