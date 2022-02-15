const form = document.querySelector('form');
const responseElement = document.querySelector('.response');

const submitHandler = (event) => {
  event.preventDefault();

  const string = form.string.value;
  const phrase = form.phrase.value;

  // Use a combination of array and string methods here
  console.log(string, string.length);
  console.log(phrase, phrase.length);

  const matches = phrase.matchAll(string);
  console.log(matches);
  let numberOfMatches = 0;
  for (const match of matches) {
    numberOfMatches++;
  }
  responseElement.textContent = `${numberOfMatches} matches found.`;

}

form.addEventListener('submit',submitHandler);