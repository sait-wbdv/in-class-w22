const form = document.querySelector('form');
const responseElement = document.querySelector('.response');

const submitHandler = (event) => {
  event.preventDefault();

  const string1 = form.string1.value;
  const string2 = form.string2.value;
  const phrase = form.phrase.value;

  // Use a combination of array and string methods here
  console.log(string1, string1.length);
  console.log(string2, string2.length);
  console.log(phrase, phrase.length);

  responseElement.textContent = phrase.replaceAll(string1, string2);
}

form.addEventListener('submit',submitHandler);