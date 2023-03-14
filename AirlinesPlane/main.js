const container = document.getElementById('container');
const outputSection = document.getElementById('output-section');
const searchForm = document.getElementById('search-form');
const textInput = document.getElementById('text-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getAirplaneInfo();
})

async function getAirplaneInfo() {
    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/airlines?name=' + name,
        headers: { 'X-Api-Key': 'TscOkMVnt77AHmWV1Gxp6g==lQe2rTPr2H9s70sq' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
        },
    }
    const nameVal = textInput.value;
    const respone = await fetch(`https://api.api-ninjas.com/v1/airlines?name=${nameVal}`, options);
    const data = await respone.json();
    console.log(data);
    const output = `
  <img src="${data[0].logo_url}">
  <h3>Airlines name: ${data[0].name}</h3>
  <p>International Air Transport Association: ${data[0].iata}</p>
  <p>International Civil Aviation Organization: ${data[0].icao}</p>
  <ul>
    ${Object.entries(data[0].fleet).map(([key, value]) => {
        if (key === 'total') {
            return `<li>Total fleet: ${value}</li>`
        } else {
            return `<li>${key}: ${value}</li>`
        }
    }).join('')}
  </ul>
`;
    outputSection.innerHTML = output;
}