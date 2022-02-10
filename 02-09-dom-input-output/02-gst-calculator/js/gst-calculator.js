// Create form and button variables here
const button = document.querySelector('button');
const inputSubTotal = document.querySelector('input');
const output = document.querySelector('.output');

console.log(button);
console.log(inputSubTotal);
console.log(output);

// Note: Fat arrow ES6 Syntax
const clickHandler = () => {
  // Refactor to assign value from form field
  // const subTotal = 42;
  const subTotal = Number(inputSubTotal.value);

  console.log(subTotal);

  const total = subTotal * 0.05 + subTotal;
  
  // Refactor to output response to paragraph element  
  // console.log(`$${subTotal} plus GST is $${total.toFixed(2)}.`);

  const response = `$${subTotal.toFixed(2)} plus GST is $${total.toFixed(2)}.`
  output.textContent = response;

}

// Add `click` event listener to button here
// Callback function: a function that is passed to another function as an argument
// (to be invoked later)
button.addEventListener('click', clickHandler);