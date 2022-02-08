// const tempF = 72;
const tempF = prompt('Enter a Temp in Fahrenheit.');

const toCelcius = function(temp) {
  // Enclose the following code in a function that accepts tempF as a parameter
  const tempC = (5 / 9) * (tempF - 32);

  console.log(`${tempF} degrees Fahrenheit is ${tempC.toFixed(1)} degrees Celcius`);
}

toCelcius(tempF);