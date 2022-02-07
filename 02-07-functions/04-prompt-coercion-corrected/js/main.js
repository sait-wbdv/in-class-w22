const greet = function(num1, num2) {
  console.log(`${num1} plus ${num2} is ${num1 + num2}`); //12 + 14 == 1214
}

const num1 = prompt('First Number');
const num2 = prompt('Second Number');

greet(num1, num2);