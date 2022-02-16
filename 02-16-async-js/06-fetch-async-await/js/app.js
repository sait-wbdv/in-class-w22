
const fetchData = async function() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/9');
  const data = await response.json();
  
  console.log(data);

  document.querySelector('h1').textContent = data.title;
  document.querySelector('p').textContent = data.body;
}

fetchData();

console.log('Hello world!');
