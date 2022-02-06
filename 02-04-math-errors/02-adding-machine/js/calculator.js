// Create a variable for the form
const form = document.querySelector('form');

const handleSubmit = function(event) {
  // Stop form from submitting and refreshing the page
  event.preventDefault();

  // Assign operands
  const num1 = Number(form.first.value);
  const num2 = Number(form.second.value);

  // Calculate total
  const total = num1 + num2;

  // Print total to page
  form.total.value = total;
  // console.log(event);
}

form.addEventListener('submit', handleSubmit);
console.log(form);