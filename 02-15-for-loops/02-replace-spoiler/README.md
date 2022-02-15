# Replace a string with another string
## Plan
1. Add a second form field for `string2`.
2. Refactor `main.js`:
    - Change `string` to `string1`;
    - Add `string2`.
3. Using [String.prototype.replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) to replace all instances of `string1` with `string2` in the `phrase`.

