const greet = (name, lang) => {
  if (lang === 'en') {

    console.log(`Hello, ${name}!`);
  
  } else if(lang === 'fr') {

    console.log(`Bonjour, ${name}!`);

  } else if(lang === 'ch') {

    console.log(`Ni hao, ${name}!`);

  } else if (lang === 'es') {

    console.log(`Hola, ${name}!`);

  } else if (lang === 'la') {

    console.log(`Salve, ${name}!`);

  } else if (lang === 'inc') {

    console.log(`Urdu, ${name}!`);

  } else if (lang === 'ja') {

    console.log(`Konnichiwa, ${name}!`);

  } else if (lang === 'pt') {

    console.log(`Olá, ${name}!`);

  } else {

    console.warn("Language not supported.")

  }
}

const name = prompt('What is your name?');
const lang = prompt('What is your favourite language?');
greet(name, lang);