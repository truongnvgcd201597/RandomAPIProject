const formInput = document.getElementById('airport-form');
const inputValue = document.getElementById('airport-input')
const airportOutput = document.getElementById('airport-output-info');
formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    getAirPort();
})

async function getAirPort() {
    const airportVal = inputValue.value; 
    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/airports?name=' + airportVal,
        headers: { 'X-Api-Key': 'TscOkMVnt77AHmWV1Gxp6g==lQe2rTPr2H9s70sq' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
        }
    }
    const respone = await fetch(`https://api.api-ninjas.com/v1/airports?name=${airportVal}`, options);
    const data = await respone.json();
    let output = '';
    for (const iterator of data) {
         output+=`
         <p class="airport-output-info">Airport Name: ${iterator.name}</p>
         <p class="airport-output-info">Airport City: ${iterator.city}</span></p>
         <p class="airport-output-info">Airport Country: ${iterator.country}</span></p>
         <p class="airport-output-info">Airport Latitude: ${iterator.latitude}</span></p>
         <p class="airport-output-info">Airport Longitude: ${iterator.longitude}</span></p>
         `
    }
    airportOutput.innerHTML = output;   

}