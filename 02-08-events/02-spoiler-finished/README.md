# JS Activity: Refactor into functions
The following files contain code that runs immediately on hard-coded variables. Refactor each of these files so that the code is:

## Instructions
For each of the `.js` files in this Gist:
- enclose the relevant code inside a function (everything below the comment in each file);
- define each function so that it accepts the needed variables as arguments;
- using the [`Window.prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) method, define your arguments based on user input;
- use [`Number.toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) to round numbers as needed.

## Bonus Activity
Both the Tip Calculator and the GST Calculator deal with rates and percentages. 
1. In a separate file, write a function that will convert a rate (i.e. `0.05`) into a percentage (`5%` as a string).
2. Add this new file to `index.html` _above_ the files that will use it.
    - **Note**: you will need to use [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) keyword to pass the new percentage string back to the main script.
3. Refactor the Tip Calculator to use your function.
4. Refactor the GST Calculator to use your function and include the GST percentage in its response like the Tip Calculator does.