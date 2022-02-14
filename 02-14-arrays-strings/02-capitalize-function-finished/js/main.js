// let string = "mIsSIssIPPi";
const form = document.querySelector('form');
const responseElement = document.querySelector('.response');

const capitalize = (string) => {
  // Enclose the following code in a function that accepts a string as a parameter
  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  
  return string;
}

const submitHandler = (event) => {
  event.preventDefault();

  const capitalString = capitalize(form.string.value);

  responseElement.textContent = `The capitalization of ${form.string.value} is ${capitalString}!!!`;

}

form.addEventListener('submit',submitHandler);