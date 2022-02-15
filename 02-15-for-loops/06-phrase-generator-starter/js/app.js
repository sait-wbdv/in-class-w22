const form = document.querySelector('form');
const responseElement = document.querySelector('.response');

const submitHandler = (event) => {
  event.preventDefault();

  const number = form.number.value;

  // console.log(number);

  // Use a for loop to generate a phrase of a `number` number of nouns

}

form.addEventListener('submit',submitHandler);