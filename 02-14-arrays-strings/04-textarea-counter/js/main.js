// let string = "mIsSIssIPPi";
const form = document.querySelector('form');
const responseElement = document.querySelector('.response');
const counterElement = document.querySelector('.counter');

const max = form.tweet.getAttribute('maxlength');
console.log(max);

const capitalize = (string) => {
  // Enclose the following code in a function that accepts a string as a parameter
  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  
  return string;
}

const submitHandler = (event) => {
  event.preventDefault();

  const capitalString = capitalize(form.search.value);

  responseElement.textContent = `The capitalization of ${form.search.value} is ${capitalString}!!!`;

}

const inputHandler = () => {
  counterElement.textContent = `${form.tweet.value.length} / ${max}`;
}

form.addEventListener('submit',submitHandler);
form.tweet.addEventListener('input', inputHandler);