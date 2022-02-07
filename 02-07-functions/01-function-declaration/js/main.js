const greet = function(name, age, mentalAge) {
  console.log(`Hello, my name is ${name}! I'm ${age} years old, but I'm ${mentalAge} on the inside.`);
}

const name = prompt('What is your name?');
let age = prompt('How old are you?');
const mentalAge = prompt('How old are you on the inside?');

greet(name, age, mentalAge);