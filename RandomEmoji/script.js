const container = document.getElementById('container');
const buttonClick = document.getElementById('btn-click')
const emojiInput = document.getElementById('emoji-input');

buttonClick.addEventListener('click', ()=>{
    if(emojiInput.value === ''){
        alert('Empty');
    }
    else{
        getEmoji(); 
    }
});

async function getEmoji(){
    const options = {
        method: 'GET',
        headers: { 'X-Api-Key': 'TscOkMVnt77AHmWV1Gxp6g==lQe2rTPr2H9s70sq'},
        contentType: 'application/json',
    }
    const respone = await fetch(`https://api.api-ninjas.com/v1/emoji?name=${emojiInput.value}`, options); 
    const data = await respone.json();
    console.log(data);
    let output = '';
    for (const element of data) {
        output += `
        <h1>${element.character}</h1>
        <h1>${element.name}</h1>
       `
    }
    container.lastElementChild.innerHTML = output;
}