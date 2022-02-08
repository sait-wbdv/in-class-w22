// const num = 15;
const num = prompt('Enter a number to square.');

// Fat arrow ES6 Syntax
const squared = (num) => {
  // Enclose the following code the following code in a function that accepts a number as a parameter
  const numSquared = num * num;
  
  console.log(`${num} squared is ${numSquared}.`);
}

squared(num);