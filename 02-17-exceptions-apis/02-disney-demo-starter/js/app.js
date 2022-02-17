const fetchData = async function(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) { 
          throw new Error(response.statusText);
      }
      const data = await response.json();

      console.log(data.data[8]);

      const output = `
        <h1>[Character Name]</h1>
        <img src="[URL]" alt="[Alt Text]">
        <p>
          <a href="[Link URL]">[Link Text]</a>
        </p>
      `;

      document.querySelector('.content').innerHTML = output;
      
  } catch (error) {
      console.error(error);
  }
}

const endpoint = 'http://api.disneyapi.dev/characters';

fetchData(endpoint);