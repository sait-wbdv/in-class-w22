const form = document.querySelector('form');
const responseElement = document.querySelector('.response');

const submitHandler = (event) => {
  event.preventDefault();

  const string = form.string.value;
  const phrase = form.phrase.value;

  // Use a combination of array and string methods here
  console.log(string, string.length);
  console.log(phrase, phrase.length);

  responseElement.textContent = `Add your response here. "string" is ${string.length} characters long. "phrase" is ${phrase.length} characters long.`;

}

form.addEventListener('submit',submitHandler);