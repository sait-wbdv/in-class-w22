// Dark Mode Toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

console.log(currentTheme, document.querySelector('body').attributes);

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
  }
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {        
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Create form and button variables here
const button = document.querySelector('button');
const inputSubTotal = document.querySelector('#subtotal');
const output = document.querySelector('.output');

// Create utility function
const toPercentage = (rate) => {

  const percentage = `${rate * 100}%`;

  // console.log(percentage);
  return percentage;
}

console.log(button);
console.log(inputSubTotal);
console.log(output);

// Note: Fat arrow ES6 Syntax
const clickHandler = () => {
  let error = false;
  let errorMessage = '';
  let response = '';

  // Refactor to assign value from form field
  // const subTotal = 42;
  const subTotal = Number(inputSubTotal.value);

  if (isNaN(subTotal)) {
    error = true;
    errorMessage = "Uh oh, there was an error. Please come back later."
  }
  if (subTotal < 0) {
    error = true;
    errorMessage = "Please use a positive amount."
  }


  console.log(inputSubTotal);

  const total = subTotal * 0.05 + subTotal;
  const gstPercentage = toPercentage(0.05);
  
  // Refactor to output response to paragraph element  

  if (error) {
    response = errorMessage;
  } else {
    response = `$${subTotal.toFixed(2)} plus ${gstPercentage} GST is $${total.toFixed(2)}.`
  }
  output.textContent = response;

}

// Add `click` event listener to button here
// Callback function: a function that is passed to another function as an argument
// (to be invoked later)
button.addEventListener('click', clickHandler);