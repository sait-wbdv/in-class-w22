const greet = function(num1, num2) {
  console.log(`${num1} plus ${num2} is ${Number(num1) + Number(num2)}`); 
}

const num1 = prompt('First Number');
const num2 = prompt('Second Number');

greet(num1, num2);