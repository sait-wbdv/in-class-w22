const form = document.querySelector('form');
const responseElement = document.querySelector('.response');

const submitHandler = (event) => {
  event.preventDefault();

  const string = form.string.value;
  const phrase = form.phrase.value;

  // Use a combination of array and string methods here
  // console.log(string, string.length);
  // console.log(phrase, phrase.length);

  if (phrase.startsWith(string)) {
    responseElement.textContent = `Yes, the phrase starts with "${string}"`;
  } else {
    responseElement.textContent = `No, the phrase doesn't start with "${string}"`;
  }
}

form.addEventListener('submit',submitHandler);