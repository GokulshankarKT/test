const fetch = require('node-fetch');

async function fetchData() {
  try {
    const response = await fetch('file://' + __dirname + '/array.json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
