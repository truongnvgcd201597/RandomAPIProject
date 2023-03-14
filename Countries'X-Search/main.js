const form = document.getElementById('search-form');
const outputResult = document.querySelector('.output-section');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = form.children[1].value;
    if (inputValue.length === 0 || inputValue === null || inputValue === '') {
        alert('Empty value, pls re-enter')
    } else {
        getTheCity(inputValue);
    }
    form.children[1].value = '';
})

async function getTheCity(cityName) {
    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/city?name=' + cityName,
        headers: { 'X-Api-Key': 'TscOkMVnt77AHmWV1Gxp6g==lQe2rTPr2H9s70sq' },
        contentType: 'application/json',
    }
    const respone = await fetch(`https://api.api-ninjas.com/v1/city?name=${cityName}`, options);
    const data = await respone.json();
    if(data.length === 0) {
        alert('No data found');
        outputResult.style.display = 'none';
    } else {
    let output = '';
    output += `
      <h4 class="city-name">Name of the city: ${data[0].name}</h4>
      <p class="countries-name">Country: ${data[0].country}</p>
      <p class="latitude">Latitude: ${data[0].latitude}</p>
      <p class="longtitude">Longtitude: ${data[0].longitude}</p>
      <p class="population-number">Population: ${data[0].population}</p>
    `
    outputResult.innerHTML = output;

    outputResult.style.display = 'block';
    }
}