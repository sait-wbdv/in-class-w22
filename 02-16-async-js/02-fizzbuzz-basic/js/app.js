for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {

    // i is divisible by 3 and 5
    console.log('FizzBuzz');

  } else if (i % 5 === 0) {
    
    // i is divisible by 5
    console.log('Buzz');

  } else if (i % 3 === 0) {

    // i is divisible by 3
    console.log('Fizz');
  
  } else {
  
    // Print number
    console.log(i);
  
  }
}