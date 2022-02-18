import randomIndex from './random-index.js';

const fetchData = async function(url) {
  
  try {
      const response = await fetch(url);
      if (!response.ok) { 
          throw new Error(response.statusText);
      }
      const data = await response.json();
      const character = data.data[randomIndex(data.data.length)];

      // console.log(character);

      const filmsOutput = `<ul><li>${character.films.join('</li><li>')}</li></ul>`;

      const output = `
        <h1>${character.name}</h1>
        <img src="${character.imageUrl}" alt="Image of ${character.name}">
        <p>
          <a href="${character.url}">Raw Data</a>
        </p>
        <p>Films</p>
        ${filmsOutput}
      `;

      document.querySelector('.content').innerHTML = output;
      
  } catch (error) {
      console.error(error);
  }
}

const endpoint = 'http://api.disneyapi.dev/characters';

fetchData(endpoint);