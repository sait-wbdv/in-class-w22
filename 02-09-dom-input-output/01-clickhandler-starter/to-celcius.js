// Create form and button variables here


const clickHandler = function() {
  // Refactor to assign value from form field
  const tempF = 72;

  const tempC = (5 / 9) * (tempF - 32);

  // Refactor to output response to paragraph element  
  console.log(`${tempF} degrees Fahrenheit is ${tempC.toFixed(1)} degrees Celcius`);
}

// Add `click` event listener to button here