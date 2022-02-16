for (let i = 1; i <= 100; i++) {
  let response = '';
  if (i % 3 === 0) response = 'Fizz'
  if (i % 5 === 0) response += 'Buzz'

  console.log(response || i);
}